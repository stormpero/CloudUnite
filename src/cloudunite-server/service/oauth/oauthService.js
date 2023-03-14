import {ApiError} from "../../exceptions/apiError.js";
import {AuthUserDto} from "../../database/dto/authUserDto.js";
import tokenService from "./tokenService.js";
import UserRepository from "../../database/repository/userRepository.js";
import {authGoogle, oauth2Client} from "../../api/oauthgoogle.js";
import {google} from "googleapis";
import {UserTokens} from "../../database/model/UserTokens.js";


class OAuthService {
    async callback(code) {
        const results = await oauth2Client.getToken(code);
        const oauth2 = await google.oauth2({
            auth: authGoogle({
                googleAccessToken: results.tokens.access_token,
                googleRefreshToken: results.tokens.refresh_token
            }),
            version: "v2"
        })
        const {data: userGoogle} = await oauth2.userinfo.get();
        let user = await UserRepository.findOneByGoogleId(userGoogle.id);
        if(!user) {
            user = await UserRepository.createUser({google_id: userGoogle.id,
                user_token: {
                    googleAccessToken: results.tokens.access_token,
                    googleAccessTokenExpiry: results.tokens.expiry_date,
                    googleRefreshToken: results.tokens.refresh_token,
                }
            });
        }

        const userDto = new AuthUserDto({...userGoogle, user_id: user.user_id});

        const tokens = tokenService.generateTokens({...userDto})
        await tokenService.saveRefreshToken(userDto.id, tokens.refreshToken);

        return tokens.refreshToken;
    }


    async user(refreshToken) {
        const userData = tokenService.validateRefreshToken(refreshToken);
        const tokenDB = await tokenService.findToken(refreshToken);
        if (!userData || !tokenDB) {
            throw ApiError.UnauthorizedError();
        }

        const user = await UserRepository.findOneById(userData.id, UserTokens);

        const oauth2 = await google.oauth2({
            auth: authGoogle(user.user_token),
            version: "v2"
        })
        const {data: userGoogle} = await oauth2.userinfo.get();

        const userDto = new AuthUserDto({...userGoogle, user_id: user.user_id});
        const tokens = tokenService.generateTokens({...userDto})
        await tokenService.saveRefreshToken(userDto.id, tokens.refreshToken);

        return { ...tokens, user: userGoogle };
    }

    async logout(refreshToken) {
        const token = await tokenService.removeToken(refreshToken);
        if (!token) {
            throw ApiError.BadRequest("RefreshToken не обнаружен")
        }
    }
    }

export default new OAuthService()