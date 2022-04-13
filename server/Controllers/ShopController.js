const User = require("../models/User");
const Shop = require("../models/Shops.js");
const Order = require("../models/Orders.js");
const Subs = require('../models/Subs');
const Item = require("../models/Items");

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
            item_id : req.body.itemId,
            quantity : req.body.quantity
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

const addItem = async (req, res) => {
    let shopOwnerId = req.params.id;

    try{
        let success = false;
        let shopId = await Shop.findOne({ owner_id : shopOwnerId });
        let item = await Item.findOne({ item_name : req.body.itemName});
        
        if(item){
            return res.status(400).json({
                success, 
                error : "Item Already Exists"
            });
        }

        item = await Item.create({
            shop_id : shopId._id,
            item_name : req.body.itemName,
            quantity : req.body.quantity,
            price : req.body.price,
            desc : req.body.desc
        })

        success = true;
        return res.status(200).json({
            success,
            item
        });
    } catch (error) {
        console.log(error.message),
        res.status(500).send("Internal Server Error");
    }
}

module.exports = { getAllShops, orderItem, getOrdersForUser, getOrdersForShop, addSubs, addItem };