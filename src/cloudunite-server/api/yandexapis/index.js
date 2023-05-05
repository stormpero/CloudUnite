import {getUserInfo, getToken, generateAuthUrl} from "./auth.js";
import {
    getAbout,
    getFolderFiles,
    getRecentFiles,
    getTrashFiles,
    addNewFolder,
    deleteFileOrFolder,
    getFileDownloadLink
} from "./disk.js";

const auth = {
    generateAuthUrl,
    getToken,
    getUserInfo
}

const disk = {
    getAbout,
    getFolderFiles,
    getRecentFiles,
    getTrashFiles,
    addNewFolder,
    deleteFileOrFolder,
    getFileDownloadLink
}

export default {
    auth,
    disk
}