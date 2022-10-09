import express from "express";
import APIController from '../controller/APIController';
let router = express.Router();

const initAPIRoute = (app) => {
    router.get('/users', APIController.getAllUsers);

    return app.use('/api/v1/', router)
}

export default initAPIRoute;