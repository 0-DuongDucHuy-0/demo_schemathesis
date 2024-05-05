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

    getAuctionById = (req, res) => {
        const id = req.params.id;

        pool.query(
            "SELECT * FROM auctions WHERE auction_id = ?", [id],
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

    createAuction = (req, res) => {
        try {
            const { book_id, start_time, end_time, status, start_price, step } = req.body;

            const result = pool.execute('INSERT INTO `auctions`(`book_id`, `start_time`, `end_time`, `status`, `start_price`, `step`) VALUES (?, ?, ?, ?, ?)', [book_id, start_time, end_time, status, start_price, step])

            res.status(200).json({
                status: "success",
                message: "Auction inserted successfully",
                data: result,
            });
        } catch (error) {
            console.error(error);
            res.status(503).json({
                status: "error",
                message: "Service error. Please try again later",
            });
        }
    }

}

module.exports = new auctionsController();
