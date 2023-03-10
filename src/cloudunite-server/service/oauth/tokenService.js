import {RefreshTokens} from "../../database/model/RefreshTokens.js";
import TokenRepository from "../../database/repository/refreshTokenRepository.js";
import jwt from "jsonwebtoken";

class TokenService {
    generateTokens(payload) {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: "30m"})
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn: "30d"})
        return {accessToken, refreshToken}
    }

    async saveRefreshToken(user_id, refreshToken) {
        const tokenData = await TokenRepository.findOneById(user_id);
        if (tokenData) {
            tokenData.refreshToken = refreshToken;
            return tokenData.save();
        }

        const token = await RefreshTokens.create({user_id, refreshToken})
        return token;
    }

    async removeToken(refreshToken) {
        return await RefreshTokens.destroy({where: {refreshToken}});
    }

    async findToken(refreshToken) {
        const tokenData = await TokenRepository.findOneByRefreshToken(refreshToken);
        return tokenData;
    }

    validateAccessToken(accessToken) {
        try {
            return jwt.verify(accessToken, process.env.JWT_ACCESS_SECRET);
        } catch (e) {
            return null
        }
    }

    validateRefreshToken(refreshToken) {
        try {
            return jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
        } catch (e) {
            return null
        }
    }
}

export default new TokenService()