import {ApiError} from "../../exceptions/apiError.js";
import axios from "axios";

const REDIRECT_URL = "http://localhost:7493/api/disk/yandex/callback";

export const generateAuthUrl = () => {
    const params = new URLSearchParams({
        response_type: 'code',
        client_id: process.env.YANDEX_CLIENT_ID,
        redirect_uri: REDIRECT_URL,
        force_confirm: 'yes',
    });
    const url = `https://oauth.yandex.ru/authorize?${params.toString()}`;
    return url;
}

export const getToken = async (code) => {
    const params = new URLSearchParams({
        grant_type: 'authorization_code',
        code,
        client_id: process.env.YANDEX_CLIENT_ID,
        client_secret: process.env.YANDEX_CLIENT_SECRET,
    });
    const res = await axios.post('https://oauth.yandex.ru/token', params.toString());
    return res.data;
}

export const getUserInfo = async (token) => {
    const res = await axios.get('https://login.yandex.ru/info', {
        headers: {
            Authorization: `OAuth ${token}`
        }
    });
    return res.data;
}