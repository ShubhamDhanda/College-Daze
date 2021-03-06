const router = require('express').Router();
const UserController = require('../Controllers/UserController');

router.post("/login", UserController.loginUser);
router.post("/signup", UserController.signupUser);
router.delete("/deleteUser", UserController.deleteUser);
router.get("/getUserDetails/:id", UserController.getUserDetails);
router.get('/getDetails', UserController.getDetails);

module.exports = router;