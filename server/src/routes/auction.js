const express = require("express");
const router = express.Router();
const auctionsController = require("../controller/auctionsController");

router.get("/", auctionsController.getAllAuctions);
router.get("/:id", auctionsController.getAuctionById);

router.post("/", auctionsController.createAuction);
router.put("/:id", auctionsController.updateAuction);
router.delete("/:id", auctionsController.deleteAuction);


module.exports = router; 
