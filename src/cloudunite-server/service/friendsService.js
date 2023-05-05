import userRepository from "../database/repository/userRepository.js";
import {UserTokens} from "../database/model/UserTokens.js";


class FriendsService {

    async friendsList(id) {
        const user = await userRepository.findOneById(id, UserTokens);
    }

    async usersList(id) {
        const users = await userRepository.findAll();
        console.log("users", users);
    }

}
export default new FriendsService();