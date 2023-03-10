import {Router} from "express";
import {cookie} from "express-validator";
import oauthController from "../controller/oauthController.js";

const oauthRouter = new Router();
oauthRouter.get("/", oauthController.login);

oauthRouter.get("/callback", oauthController.callback);

oauthRouter.get("/user",
    cookie("refreshToken").exists(),
    oauthController.user
);

oauthRouter.get("/logout",
    cookie("refreshToken").exists(),
    oauthController.logout
);


//authRouter.get("/drive", authMiddleware, AuthController.drive);

// authRouter.get("/refreshtoken",
//     cookie("refreshToken").exists(),
//     AuthController.refreshtoken
// );

export default oauthRouter;
