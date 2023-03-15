import {Router} from "express";
import GoogleDiskController from "../../controller/googleDiskController.js";
import authMiddleware from "../../middleware/authMiddleware.js";
import diskRouter from "../diskRouter.js";

const googleDiskRouter = new Router();

googleDiskRouter.use(authMiddleware)


googleDiskRouter.get("/storageQuota", GoogleDiskController.storageQuota);

googleDiskRouter.get("/list/folderFiles", GoogleDiskController.folderFiles);
googleDiskRouter.get("/list/folderTree", GoogleDiskController.folderTree);

export default googleDiskRouter;

