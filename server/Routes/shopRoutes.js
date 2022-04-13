const router = require('express').Router();
const ShopController = require('../Controllers/ShopController');

router.get("/getshops", ShopController.getAllShops);
router.post("/orderItem/:id", ShopController.orderItem);
router.get("/getUserOrders/:id", ShopController.getOrdersForUser);
router.get("/getShopOrders/:id", ShopController.getOrdersForShop);
router.post('/addSubs/:id', ShopController.addSubs);
router.post('/addItem/:id', ShopController.addItem);

module.exports = router;