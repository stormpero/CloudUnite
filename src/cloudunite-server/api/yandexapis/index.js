import {getUserInfo, getToken, generateAuthUrl} from "./auth.js";
import {getAbout} from "./disk.js";

const auth = {
    generateAuthUrl,
    getToken,
    getUserInfo
}

const disk = {
    getAbout
}

export default {
    auth,
    disk
}