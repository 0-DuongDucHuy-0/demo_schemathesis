const express = require("express");
const router = express.Router();
const auctionsController = require("../controller/auctionsController");

router.get("/getAllAuctions", auctionsController.getAllAuctions);

module.exports = router; 
