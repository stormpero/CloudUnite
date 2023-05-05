import {Router} from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import FriendsController from "../controller/friendsController.js";

const friendRouter = new Router();

friendRouter.use(authMiddleware)

friendRouter.get("/usersList", FriendsController.friendsList);
friendRouter.get("/friendsList", FriendsController.friendsList);

export default friendRouter;

