import {Router} from "express";
import oauthRouter from "./oauthRouter.js";
import gDriveRouter from "./gDriveRouter.js";

const rootRouter = new Router();


rootRouter.use("/oauth", oauthRouter);
rootRouter.use("/g/drive", gDriveRouter);
// rootRouter.use("/y/disk", gDriveRouter);
// rootRouter.use("/onedrive", gDriveRouter);


export default rootRouter;

