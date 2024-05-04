const express = require("express");
const router = express.Router();
const usersController = require("../controller/usersController");

//"http://localhost:8080/users/..."
//login
// router.get("/insertUserInfo/:fullname/:sex/:email/:phoneNumber/:dob", usersController.insertUserInfo);
// router.get("/checkUserAccount/:username/:password/", usersController.checkUserAccount);
// router.get("/insertUserAccount/:userId/:username/:password/:roleId", usersController.insertUserAccount);
router.get("/getAllUsers", usersController.getAllUsers);

module.exports = router; 
