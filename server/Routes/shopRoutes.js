const router = require('express').Router();
const ShopController = require('../Controllers/ShopController');

router.get("/getshops", ShopController.getAllShops);
router.get("/orderItem", ShopController.orderItem);
router.get("/getUserOrders", ShopController.getOrdersForUser);
router.get("/getShopOrders", ShopController.getOrdersForShop);
router.get('/addSubs', ShopController.addSubs);

module.exports = router;