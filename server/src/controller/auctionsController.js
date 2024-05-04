import pool from "../config/db";

class auctionsController {
    getAllAuctions = (req, res) => {
        pool.query(
            "SELECT * FROM auctions",
            (err, results, fields) => {
                if (err) {
                    return res.status(503).json({
                        status: "error",
                        message: "Service error. Please try again later",
                    });
                }
                let data = results;
                return res.status(200).json({
                    status: "success",
                    data: data,
                });
            }
        )
    }

}

module.exports = new auctionsController();
