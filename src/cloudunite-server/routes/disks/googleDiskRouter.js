import {Router} from "express";
import GoogleController from "../../controller/gDriveController.js";
import authMiddleware from "../../middleware/authMiddleware.js";

const gDriveRouter = new Router();

gDriveRouter.get("/storageQuota", GoogleController.storageQuota);

gDriveRouter.get("/list/folderFiles", GoogleController.folderFiles);
gDriveRouter.get("/list/folderTree", GoogleController.folderTree);

export default gDriveRouter;

