import {google} from "googleapis";
import {authGoogle} from "../../api/oauthgoogle.js";
import userRepository from "../../database/repository/userRepository.js";
import {UserTokens} from "../../database/model/UserTokens.js";

class GoogleDiskService {
    async storageQuota(id) {
        const user = await userRepository.findOneById(id, UserTokens);

        const drive = google.drive("v3");
        try {
            const result = await drive.about.get({
                auth:  authGoogle(user.user_token),
                fields: 'storageQuota'
            })
            return result.data;
        } catch (e) {
            console.log(e);
        }
    }

    async folderFiles(id, folder_id) {
        const user = await userRepository.findOneById(id, UserTokens);
        const drive = google.drive("v3");
        try {
            const result = await drive.files.list({
                auth:  authGoogle(user.user_token),
                pageSize: 1000,
                q: `'me' in owners and '${folder_id}' in parents and trashed=false`,
                fields: "*"
            })
            return result.data.files;
        } catch (e) {
            console.log(e);
        }
    }

    async recentFiles(id) {
        const user = await userRepository.findOneById(id, UserTokens);
        const drive = google.drive("v3");
        try {
            //TODO: Recent files
            const result = await drive.files.list({
                auth:  authGoogle(user.user_token),
                pageSize: 1000,
                q: `'me' in owners and trashed=false and mimeType!='application/vnd.google-apps.folder'`,
                orderBy: "modifiedByMeTime desc",
                fields: "*"
            })
            return result.data.files;
        } catch (e) {
            console.log(e);
        }
    }

    async trashFiles(id) {
        const user = await userRepository.findOneById(id, UserTokens);
        const drive = google.drive("v3");
        try {
            const result = await drive.files.list({
                auth:  authGoogle(user.user_token),
                pageSize: 1000,
                q: `'me' in owners and trashed=true`,
                fields: "*"
            })
            return result.data.files;
        } catch (e) {
            console.log(e);
        }
    }

}
export default new GoogleDiskService();