import pool from "../config/db";
import hashService from "../services/hashService";
import bcrypt from "bcryptjs"

class usersController {
    getAllUsers = (req, res) => {
        pool.query(
            "SELECT * FROM users",
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

    // insertUserInfo = async (req, res) => {
    //     try {
    //         const fullname = req.params.fullname;
    //         const sex = req.params.sex;
    //         const email = req.params.email;
    //         const phoneNumber = req.params.phoneNumber
    //         const dob = req.params.dob;

    //         // Example asynchronous operation:
    //         const result = await pool.execute("INSERT INTO users (fullname, sex, email, phoneNumber, dob) VALUES (?, ?, ?, ?, ?)", [fullname, sex, email, phoneNumber, dob]);

    //         // Handle the result and send a response
    //         res.status(200).json({
    //             status: "success",
    //             message: "User inserted successfully",
    //             data: result,
    //         });
    //     } catch (error) {
    //         console.error(error);
    //         res.status(503).json({
    //             status: "error",
    //             message: "Service error. Please try again later",
    //         });
    //     }
    // }

    // insertUserAccount = async (req, res) => {
    //     try {
    //         const userId = req.params.userId;
    //         const username = req.params.username;
    //         const password = req.params.password;
    //         const roleId = req.params.roleId;

    //         // Example asynchronous operation:
    //         const result = await pool.execute("INSERT INTO user_accounts (userId, username, password, roleId) VALUES (?, ?, ?, ?)", [userId, username, authService.hashPassword(password), roleId]);

    //         // Handle the result and send a response
    //         res.status(200).json({
    //             status: "success",
    //             message: "User inserted successfully",
    //             data: result,
    //         });
    //     } catch (error) {
    //         console.error(error);
    //         res.status(503).json({
    //             status: "error",
    //             message: "Service error. Please try again later",
    //         });
    //     }
    // };

    // checkUserAccount = async (req, res) => {
    //     try {
    //         const username = req.params.username;
    //         const password = req.params.password;

    //         // Asynchronous operation:
    //         pool.query("SELECT users.id, users.fullname, users.dob, users.sex, users.email, users.phoneNumber, user_accounts.roleId, user_accounts.password FROM user_accounts JOIN users ON user_accounts.userId = users.id where user_accounts.username = ?", [username],
    //             (err, results, fields) => {
    //                 if (err) {
    //                     return res.status(503).json({
    //                         status: "error",
    //                         message: "Service error. Please try again later",
    //                     });
    //                 }
    //                 let data = results;
    //                 let check = false
    //                 if (results.length == 1) {
    //                     check = bcrypt.compareSync(password, results[0].password)
    //                 }
    //                 if (check) {
    //                     return res.status(200).json({
    //                         status: "success",
    //                         data: data,
    //                     });
    //                 }
    //                 else return res.status(503).json({
    //                     status: "error",
    //                     message: "Service error. Please try again later",
    //                 });
    //             });
    //     } catch (error) {
    //         console.error(error);
    //         res.status(503).json({
    //             status: "error",
    //             message: "Service error. Please try again later",
    //         });
    //     }
    // }
}

module.exports = new usersController();
