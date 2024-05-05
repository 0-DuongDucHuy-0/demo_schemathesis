const express = require("express");
const router = express.Router();
const auctionsController = require("../controller/auctionsController");

router.get("/", auctionsController.getAllAuctions);
router.get("/:id", auctionsController.getAuctionById);

router.post("/", auctionsController.createAuction);


module.exports = router; 
