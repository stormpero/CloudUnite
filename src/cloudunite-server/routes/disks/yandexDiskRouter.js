import {Router} from "express";
import YandexDiskController from "../../controller/yandexDiskController.js";
import authMiddleware from "../../middleware/authMiddleware.js";


const yandexDiskRouter = new Router();

yandexDiskRouter.get("/login", YandexDiskController.login);
yandexDiskRouter.get("/callback", YandexDiskController.callback); //http://localhost:7493/api/disk/yandex/callback
yandexDiskRouter.get("/storageQuota", authMiddleware, YandexDiskController.storageQuota);

// yandexDiskRouter.get("/list/folderFiles", GoogleController.folderFiles);
// yandexDiskRouter.get("/list/folderTree", GoogleController.folderTree);

export default yandexDiskRouter;

