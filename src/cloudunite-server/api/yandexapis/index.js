import {getUserInfo, getToken, generateAuthUrl} from "./auth.js";
import {getAbout, getFolderFiles} from "./disk.js";

const auth = {
    generateAuthUrl,
    getToken,
    getUserInfo
}

const disk = {
    getAbout,
    getFolderFiles
}

export default {
    auth,
    disk
}