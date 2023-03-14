import {Router} from "express";
import GoogleController from "../../controller/gDriveController.js";
import authMiddleware from "../../middleware/authMiddleware.js";

const gDriveRouter = new Router();

gDriveRouter.get("/storageQuota", authMiddleware, GoogleController.storageQuota);

gDriveRouter.post("/list/folderFiles", authMiddleware, GoogleController.folderFiles); // FOLDER ID

export default gDriveRouter;

