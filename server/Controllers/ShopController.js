const User = require("../models/User");
const Shop = require("../models/Shops.js");
const Order = require("../models/Orders.js");
const Subs = require('../models/Subs');

const getAllShops = async (req, res) => {
    try {
        let success = false;
        const allShops = await Shop.find({});
        
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

const getOrdersForShop = async (req, res) => {
    let shopOwnerId = req.params.id;

    try{
        let success = false;
        let shopId = await Shop.find({ owner_id : shopOwnerId });

        let orders = await Order.find({ shop_id : shopId });

        success = true;
        return res.status(200).json({
            success,
            orders
        });
    } catch (error) {
        console.log(error.message),
        res.status(500).send("Internal Server Error");
    }
}

const getOrdersForUser = async (req, res) => {
    let userId = req.params.id;

    try{
        let success = false;
        let orders = await Order.find({user_id : userId});

        success = true;
        return res.status(200).json({
            success,
            orders
        })
    } catch (error) {
        console.log(error.message),
        res.status(500).send("Internal Server Error");
    }
}

const orderItem = async (req, res) => {
    let userId = req.params.id;
    try{
        let order = await Order.create({
            user_id : userId,
            shop_id : req.body.shopId,
            item_id : req.body.itemId
        });

        let success = true;
        return res.status(200).json({
            success, 
            order
        })
    } catch (error) {
        console.log(error.message),
        res.status(500).send("Internal Server Error");
    }
}

const addSubs = async (req, res) => {
    let userId = req.params.id;
    try{
        let sub = await Subs.create({
            user_id : userId,
            shop_id : req.body.shopId,
            item_id : req.body.itemId,
            time_limit : req.body.timeLimit
        });

        let success = true;
        return res.status(200).json({
            success, 
            sub
        })
    } catch (error) {
        console.log(error.message),
        res.status(500).send("Internal Server Error");
    }
}

module.exports = { getAllShops, orderItem, getOrdersForUser, getOrdersForShop, addSubs };