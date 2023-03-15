import YandexDiskService from "../service/disks/yandexDiskService.js";
import oauthService from "../service/oauth/oauthService.js";
import {CLIENT_URL_LOGIN_SUCCESS} from "../config/urls.js";

const REDIRECT_URL = "http://localhost:7493/api/disk/yandex/callback";

class YandexDiskController {

    async login(req, res, next) {
        try {
            const params = new URLSearchParams({
                response_type: 'code',
                client_id: process.env.YANDEX_CLIENT_ID,
                redirect_uri: REDIRECT_URL,
                force_confirm: 'yes',
            });
            const url = `https://oauth.yandex.ru/authorize?${params.toString()}`;
            res.redirect(url);
        } catch (e) {
            next(e)
        }
    }

    async callback(req, res, next) {
        try {
            const {code} = req.query;
            const {refreshToken} = req.cookies;
            await YandexDiskService.callback(refreshToken, code);
            return res.redirect(CLIENT_URL_LOGIN_SUCCESS)
        } catch (e) {
            next(e)
        }
    }

    // async refreshToken(req, res, next) {
    //     try {
    //         const {refreshToken} = req.cookies;
    //         const data = await YandexDiskService.refreshToken(refreshToken);
    //         return
    //         //return res.redirect(CLIENT_URL_LOGIN_SUCCESS)
    //     } catch (e) {
    //         next(e)
    //     }
    // }

    async storageQuota(req, res, next) {
        try {
            const {user} = req;
            const result = await YandexDiskService.storageQuota(user.id);
            return res.status(200).json(result)
        } catch (e) {
            next(e)
        }
    }

}

export default new YandexDiskController();