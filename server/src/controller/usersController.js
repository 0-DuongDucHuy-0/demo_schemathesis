import pool from "../config/db";
import hashService from "../services/hashService";
import bcrypt from "bcryptjs"

class usersController {
    getAllUsers = (req, res) => {
        pool.query(
            "SELECT id, fullname, address, email, phone_number FROM users",
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

    getUserById = async (req, res) => {
        const id = req.params.id;

        pool.query(
            "SELECT id, fullname, address, email, phone_number FROM users WHERE id = ?", [id],
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

    deleteUserById = async (req, res) => {
        const id = req.params.id;

        pool.query(
            "DELETE FROM users WHERE id = ?", [id],
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

module.exports = new usersController();
