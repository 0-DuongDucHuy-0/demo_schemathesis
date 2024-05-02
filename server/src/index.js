import express from "express";
import sqlite3 from "sqlite3";
import { open } from "sqlite";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
require('dotenv').config();

const app = express()
const PORT = process.env.PORT || 8080;
const dbPath = process.env.DB_PATH;

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

configViewEngine(app);
initWebRoutes(app);

// app.listen(PORT, () => {
//     console.log('backend is running on port ' + PORT);
// })

(async function () {
    try {
        // Mở kết nối tới cơ sở dữ liệu SQLite
        global.db = await open({
            filename: dbPath,
            driver: sqlite3.Database,
        });

        console.log("Connected to SQLite");

        // Bắt đầu server
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error("Error connecting to SQLite:", error);
    }
})();