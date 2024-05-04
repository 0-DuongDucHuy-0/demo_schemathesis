import express from "express";
const userRouter = require("./users")
const auctionRouter = require("./auction");

const router = express.Router()

const initWebRoutes = (app) => {
    app.use('/users', userRouter);
    app.use('/auctions', auctionRouter);
    return app.use('/', router);
}

export default initWebRoutes;