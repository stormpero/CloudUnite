import {Router} from "express";
import oauthRouter from "./oauthRouter.js";
import diskRouter from "./diskRouter.js";
import friendRouter from "./frinedRouter.js";

const rootRouter = new Router();

rootRouter.use("/oauth", oauthRouter);
rootRouter.use("/disk", diskRouter);
rootRouter.use("/friends", friendRouter);

export default rootRouter;

