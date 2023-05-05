import FriendsService from "../service/friendsService.js";


class FriendsController {
    async friendsList(req, res, next) {
        try {
            const {user} = req;
            const result = await FriendsService.friendsList(user.id);
            return res.status(200).json(result)
        } catch (e) {
            next(e)
        }
    }

    async usersList(req, res, next) {
        try {
            const {user} = req;
            const result = await FriendsService.usersList(user.id);
            return res.status(200).json(result)
        } catch (e) {
            next(e)
        }
    }
}

export default new FriendsController()