const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");
const User = require("../models/User");
const Shop = require("../models/Shops.js")

const signupUser = async (req, res) => {
	let success = false;
	try {
		//Check if User already exists
		let user = await User.findOne({
			loginID: req.body.loginID,
		});
		if (user) {
			success = false;
			return res.status(400).json({
				success,
				error: "loginID already Exists"
			});
		}

		const salt = await bcrypt.genSalt(10);
		const secPass = await bcrypt.hash(req.body.password, salt);

		//Create User
		user = await User.create({
			name: req.body.name,
			phoneNumber: req.body.phoneNumber,
			loginID: req.body.loginID,
			password: secPass,
			type: req.body.type
		});

		
		const authToken = generateToken(user._id);

		if (req.body.type === "shopkeeper") {
			let shop = await Shop.create({
				owner_id: user._id,
				shop_name: req.body.shopName,
				shop_type: req.body.shopType,
				items: [],
				orders: []
			})

			success = true;
			res.status(200).json({
				success,
				user,
				shop,
				authToken
			})

		}

		success = true;
		res.status(200).json({
			success,
			user,
			authToken
		})
	} catch (error) {
		console.log(error.message),
			res.status(500).send("Internal Server Error");
	}
}



const loginUser = async (req, res) => {

	const { loginID, password, type } = req.body;

	try {
		let success = false;
		if (!(loginID && password && type)) {
			success = false;
			res.status(400).send({
				success,
				error: "Missing fields"
			});
		}

		//Find User
		const existingUser = await User.findOne({
			loginID: loginID
		});
		if (!existingUser)
			return res.status(404).json({
				success,
				error: "User doesn't exist"
			});

		//Compare Passwords
		const isPasswordValid = await bcrypt.compare(
			password,
			existingUser.password
		);
		if (!isPasswordValid)
			return res.status(401).json({
				success,
				error: "Invalid password"
			});

		//Compare Types
		const isSameType = (existingUser.type === type ? true : false);
		if (!isSameType)
			return res.status(401).json({
				success,
				error: "Wrong type of User"
			})

		//Login User
		success = true;
		res.status(200).json({
			success,
			user: existingUser,
			token: generateToken(existingUser._id),
		});
	} catch (err) {
		res.status(500).json({ message: "Something went wrong", err });
	}
};

module.exports = { loginUser, signupUser }