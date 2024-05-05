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

    updateUserInfo = async (req, res) => {
        try {
            const fullname = req.params.fullname;
            const email = req.params.email;
            const phoneNumber = req.params.phoneNumber
            const address = req.params.address;
            const username = req.params.username;

            // Example asynchronous operation:
            const result = await pool.execute("UPDATE users SET fullname = ?, email = ?, phone_number = ?, address = ? WHERE username = ?", [fullname, email, phoneNumber, address, username]);

            // Handle the result and send a response
            res.status(200).json({
                status: "success",
                message: "User inserted successfully",
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

    createUserAccount = async (req, res) => {
        try {
            const username = req.params.username;
            const password = req.params.password;

            // Example asynchronous operation:
            const result = await pool.execute("INSERT INTO users (username, password, role) VALUES (?, ?, 'user')", [username, hashService.hashPassword(password)]);

            // Handle the result and send a response
            res.status(200).json({
                status: "success",
                message: "User created successfully",
                data: result,
            });
        } catch (error) {
            console.error(error);
            res.status(503).json({
                status: "error",
                message: "Service error. Please try again later",
            });
        }
    };

    handleLogin = async (req, res) => {
        try {
            const username = req.params.username;
            const password = req.params.password;

            // Asynchronous operation:
            pool.query("SELECT username, password FROM users WHERE users.username = ?", [username],
                (err, results, fields) => {
                    if (err) {
                        return res.status(503).json({
                            status: "error",
                            message: "Service error. Please try again later",
                        });
                    }
                    let data = results;
                    let check = false
                    if (results.length == 1) {
                        check = bcrypt.compareSync(password, results[0].password)
                    }
                    if (check) {
                        return res.status(200).json({
                            status: "success",
                            data: data,
                        });
                    }
                    else return res.status(503).json({
                        status: "error",
                        message: "Wrong password",
                    });
                });
        } catch (error) {
            console.error(error);
            res.status(503).json({
                status: "error",
                message: "Service error. Please try again later",
            });
        }
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
