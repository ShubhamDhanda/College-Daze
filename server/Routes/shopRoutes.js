const router = require('express').Router();
const ShopController = require('../Controllers/ShopController');

router.get("/getshops", ShopController.getAllShops);

module.exports = router;