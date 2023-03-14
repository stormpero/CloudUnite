import {Router} from "express";
import gDriveRouter from "./disks/gDriveRouter.js";
import authMiddleware from "../middleware/authMiddleware.js";

const diskRouter = new Router();

diskRouter.use(authMiddleware)

diskRouter.use("/google", gDriveRouter);
// diskRouter.use("/yandex")
// diskRouter.use("/onedrive")

export default diskRouter;

