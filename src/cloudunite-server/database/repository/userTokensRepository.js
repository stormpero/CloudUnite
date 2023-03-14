import {UserTokens} from "../model/UserTokens.js";
import {Users} from "../model/Users.js";

class UserTokensRepository {
    async findOneByGoogleRefreshToken(googleRefreshToken) {
        return await UserTokens.findOne({where: {googleRefreshToken}, include: Users})
    }
}

export default new UserTokensRepository();