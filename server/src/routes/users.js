const express = require("express");
const router = express.Router();
const usersController = require("../controller/usersController");

//"http://localhost:8080/users/..."

//admin routes
router.get("/getAllUsers", usersController.getAllUsers);
router.get("/getUserById/:id", usersController.getUserById);
router.delete("/deleteUserById/:id", usersController.deleteUserById);

module.exports = router; 
