import {Users} from "../model/Users.js";

import {UserTokens} from "../model/UserTokens.js";

class UserRepository {

    async findOneById(user_id, include = null) {
        return await Users.findOne({where: {user_id}, include});
    }
    async findOneByGoogleId(google_id, include = null) {
        return await Users.findOne({where: {google_id}, include});
    }
    async findOneByEmail(email, include = null) {
        return await Users.findOne({where: {email}, include});
    }
    async createUser(values) {
        return await Users.create(values, {include: UserTokens});
    }
    async findAll() {
        return await Users.findAll({raw: true});
    }
}

export default new UserRepository()