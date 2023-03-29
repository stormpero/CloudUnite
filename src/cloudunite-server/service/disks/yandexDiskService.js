import yandex from "../../api/yandexapis/index.js";
import userRepository from "../../database/repository/userRepository.js";
import {UserTokens} from "../../database/model/UserTokens.js";
import oauthService from "../oauth/oauthService.js";
import axios from "axios";
import UserRepository from "../../database/repository/userRepository.js";
import tokenService from "../oauth/tokenService.js";
import {ApiError} from "../../exceptions/apiError.js";
import {getFolderFiles, getTrashFiles} from "../../api/yandexapis/disk.js";

class YandexDiskService {

    async callback(refreshToken, code) {
        const tokens = await yandex.auth.getToken(code);

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

        const userInfo = await yandex.auth.getUserInfo(tokens.access_token)
        user.yandex_id = userInfo.id;
        await user.save();
    }

    // async refreshToken(refreshToken) {
    //
    // }

    async storageQuota(id) {
        const user = await userRepository.findOneById(id, UserTokens);

        const data = await yandex.disk.getAbout(user.user_token.yandexAccessToken);
        return { storageQuota: {
                usage: data?.used_space,
                limit: data?.total_space
            }
        }
    }

    async folderFiles(id, folder) {
        const user = await userRepository.findOneById(id, UserTokens);

        const data = await yandex.disk.getFolderFiles(folder, user.user_token.yandexAccessToken);
        return data;
    }

    async recentFiles(id) {
        const user = await userRepository.findOneById(id, UserTokens);

        const data = await yandex.disk.getRecentFiles(user.user_token.yandexAccessToken);
        return data;
    }

    async trashFiles(id, folder) {
        const user = await userRepository.findOneById(id, UserTokens);

        const data = await yandex.disk.getTrashFiles(folder, user.user_token.yandexAccessToken);
        return data;
    }


}
export default new YandexDiskService();