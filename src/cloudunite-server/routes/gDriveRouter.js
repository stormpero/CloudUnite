import {Router} from "express";
import GoogleController from "../controller/gDriveController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const gDriveRouter = new Router();

gDriveRouter.get("/files", authMiddleware, GoogleController.files);
gDriveRouter.get("/storageQuota", authMiddleware, GoogleController.storageQuota);


export default gDriveRouter;

