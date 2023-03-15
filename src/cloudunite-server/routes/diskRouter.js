import {Router} from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import googleDiskRouter from "./disks/googleDiskRouter.js";
import yandexDiskRouter from "./disks/yandexDiskRouter.js";

const diskRouter = new Router();


diskRouter.use("/google", googleDiskRouter);
diskRouter.use("/yandex", yandexDiskRouter);
// diskRouter.use("/onedrive")

export default diskRouter;

