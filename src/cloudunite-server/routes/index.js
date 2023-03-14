import {Router} from "express";
import oauthRouter from "./oauthRouter.js";
import diskRouter from "./diskRouter.js";

const rootRouter = new Router();

rootRouter.use("/oauth", oauthRouter);
rootRouter.use("/disk", diskRouter);

export default rootRouter;

