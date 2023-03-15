import {google} from "googleapis";
import {authGoogle} from "../../api/oauthgoogle.js";
import userRepository from "../../database/repository/userRepository.js";
import {UserTokens} from "../../database/model/UserTokens.js";
import oauthService from "../oauth/oauthService.js";
import {CLIENT_URL_LOGIN_SUCCESS} from "../../config/urls.js";
import axios from "axios";
import UserRepository from "../../database/repository/userRepository.js";
import tokenService from "../oauth/tokenService.js";
import {ApiError} from "../../exceptions/apiError.js";

class YandexDiskService {

    async callback(refreshToken, code) {
        const params = new URLSearchParams({
            grant_type: 'authorization_code',
            code,
            client_id: process.env.YANDEX_CLIENT_ID,
            client_secret: process.env.YANDEX_CLIENT_SECRET,
        });

        try {
            const tokens = (await axios.post('https://oauth.yandex.ru/token', params.toString())).data;

            const userData = tokenService.validateRefreshToken(refreshToken);
            const tokenDB = await tokenService.findToken(refreshToken);
            if (!userData || !tokenDB) {
                throw ApiError.UnauthorizedError();
            }
            const user = await UserRepository.findOneById(userData.id, UserTokens);

            user.user_token.yandexAccessToken = tokens.access_token;
            user.user_token.yandexRefreshToken = tokens.refresh_token;
            user.user_token.yandexAccessTokenExpiry = tokens.expires_in;
            await user.user_token.save();

            const userInfo = await axios.get('https://login.yandex.ru/info', {
                headers: {
                    Authorization: `OAuth ${tokens.access_token}`
                }
            });
            user.yandex_id = userInfo.data.id;
            await user.save();
        } catch (e) {
            throw ApiError.UnauthorizedError();
        }
    }

    // async refreshToken(refreshToken) {
    //
    // }

    async storageQuota(id) {
        const user = await userRepository.findOneById(id, UserTokens);
        try {
            const response = await axios.get('https://cloud-api.yandex.net/v1/disk', {
                headers: {
                    'Authorization': 'OAuth ' + user.user_token.yandexAccessToken
                }
            });
            const data = response.data;
            return { storageQuota: {
                    usage: data?.used_space,
                    limit: data?.total_space
                }
            }
        } catch (e) {
            console.log(e)
        }

        // const drive = google.drive("v3");
        // try {
        //     const result = await drive.about.get({
        //         auth:  authGoogle(user.user_token),
        //         fields: 'storageQuota'
        //     })
        //     return result.data;
        // } catch (e) {
        //     console.log(e);
        // }
    }


}
export default new YandexDiskService();