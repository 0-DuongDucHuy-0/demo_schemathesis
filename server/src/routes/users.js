const express = require("express");
const router = express.Router();
const usersController = require("../controller/usersController");

//"http://localhost:8080/users/..."
//log in, sign up
router.get("/login/:username/:password/", usersController.handleLogin);
router.get("/signup/:username/:password/", usersController.createUserAccount);

router.get("/updateUserInfo/:fullname/:address/:email/:phoneNumber/:username", usersController.updateUserInfo);

//admin routes
router.get("/getAllUsers", usersController.getAllUsers);
router.get("/getUserById/:id", usersController.getUserById);
router.get("/deleteUserById/:id", usersController.deleteUserById);

module.exports = router; 
