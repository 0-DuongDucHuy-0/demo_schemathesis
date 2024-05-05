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

    updateUserInfo = (req, res) => {
        try {
            const id = req.params.id;
            const { fullname, email, phone_number, address } = req.body

            // Example asynchronous operation:
            const result = pool.execute('UPDATE `users` SET `fullname` = ?, `email` = ?, `phone_number` = ?, `address` = ? WHERE `id` = ?', [fullname, email, phone_number, address, id],
                (err, results, fields) => {
                    if (err) {
                        console.error(err);
                        res.status(503).json({
                            status: "error",
                            message: "Service error. Please try again later",
                        });
                    } else {
                        // Handle the result and send a response
                        res.status(200).json({
                            status: "success",
                            message: "User updated successfully",
                        });
                    }
                }
            );
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
            const { username, password } = req.body;

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
            const { username, password } = req.body;

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
                    if (results.length == 0) {
                        return res.status(503).json({
                            status: "error",
                            message: "Tên tài khoản không tồn tại",
                        });
                    }
                    let check = false
                    if (results.length == 1) {
                        check = bcrypt.compareSync(password, results[0].password)
                    }
                    if (check) {
                        return res.status(200).json({
                            status: "Đăng nhập thành công",
                        });
                    }
                    else return res.status(503).json({
                        status: "error",
                        message: "Sai mật khẩu",
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
