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

yandexDiskRouter.get("/get/fileDownloadLink",authMiddleware, YandexDiskController.fileDownloadLink); //++

yandexDiskRouter.post("/add/newFolder", authMiddleware, YandexDiskController.newFolder);
yandexDiskRouter.post("/add/newFile", authMiddleware, () => {});

yandexDiskRouter.post("/edit/fileName", authMiddleware, () => {});

yandexDiskRouter.post("/delete/fileOrFolder", authMiddleware, YandexDiskController.deleteFileOrFolder); //++

yandexDiskRouter.post("publish/file", authMiddleware, () => {});
yandexDiskRouter.post("unpublish/file", authMiddleware, () => {});

export default yandexDiskRouter;

