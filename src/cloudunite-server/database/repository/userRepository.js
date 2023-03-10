import {Users} from "../model/Users.js";

import {Op} from "sequelize";
import {UserTokens} from "../model/UserTokens.js";

class UserRepository {

    async findOneById(user_id, include = null) {
        return await Users.findOne({where: {user_id}, include});
    }
    async findOneByGoogleId(google_id, include = null) {
        return await Users.findOne({where: {google_id}, include});
    }

    async createUser(values) {
        return await Users.create(values, {include: UserTokens});
    }
}

export default new UserRepository()