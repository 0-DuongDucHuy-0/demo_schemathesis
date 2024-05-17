import express from "express";
const userRouter = require("./users")
const router = express.Router()

const initWebRoutes = (app) => {
    app.use('/users', userRouter);
    return app.use('/', router);
}

export default initWebRoutes;