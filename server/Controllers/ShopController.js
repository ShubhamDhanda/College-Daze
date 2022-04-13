const User = require("../models/User");
const Shop = require("../models/Shops.js");

const getAllShops = async (req, res) => {
    try {
        let success = false;
        const allShops = await Shop.find({}).select('-orders');
        
        success = true;
        res.status(200).json({
			success,
			allShops
		});

    } catch (error) {
        console.log(error.message),
        res.status(500).send("Internal Server Error");
    }
}

module.exports = { getAllShops };