import {RefreshTokens} from "../model/RefreshTokens.js";

class RefreshTokenRepository {
    async findOneById(user_id) {
        return await RefreshTokens.findOne({where: {user_id}});
    }
    async findOneByRefreshToken(refreshToken) {
        return await RefreshTokens.findOne({where: {refreshToken}});
    }
}

export default new RefreshTokenRepository()