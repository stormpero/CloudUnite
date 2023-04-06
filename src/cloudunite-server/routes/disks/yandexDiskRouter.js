import {Router} from "express";
import YandexDiskController from "../../controller/yandexDiskController.js";
import authMiddleware from "../../middleware/authMiddleware.js";


const yandexDiskRouter = new Router();

yandexDiskRouter.get("/login", YandexDiskController.login);
yandexDiskRouter.get("/callback", YandexDiskController.callback); //http://localhost:7493/api/disk/yandex/callback
//TODO: На два router
yandexDiskRouter.get("/storageQuota", authMiddleware, YandexDiskController.storageQuota);

yandexDiskRouter.get("/list/folderFiles",authMiddleware, YandexDiskController.folderFiles);
yandexDiskRouter.get("/list/recentFiles",authMiddleware, YandexDiskController.recentFiles);
yandexDiskRouter.get("/list/trashFiles",authMiddleware, YandexDiskController.trashFiles);

yandexDiskRouter.post("/newFolder", authMiddleware, YandexDiskController.newFolder);

export default yandexDiskRouter;

