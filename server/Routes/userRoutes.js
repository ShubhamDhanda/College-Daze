const router = require('express').Router();
const UserController = require('../Controllers/UserController');

router.post("/login", UserController.loginUser);
router.post("/signup", UserController.signupUser)

module.exports = router;