import express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
require('dotenv').config();

const app = express()
const PORT = process.env.PORT || 8080;


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

configViewEngine(app);
initWebRoutes(app);

// app.listen(PORT, () => {
//     console.log('backend is running on port ' + PORT);
// })

(async function () {
    try {
        // Bắt đầu server
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error("Error connecting to SQLite:", error);
    }
})();


