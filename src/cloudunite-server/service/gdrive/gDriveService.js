import {google} from "googleapis";
import {authGoogle} from "../../api/oauthgoogle.js";
import userRepository from "../../database/repository/userRepository.js";
import {UserTokens} from "../../database/model/UserTokens.js";

class GDriveService {
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

    async files(id, folder_id) {
        const user = await userRepository.findOneById(id, UserTokens);

        const drive = google.drive("v3");
        try {
            const result = await drive.about.get({
                auth:  authGoogle(user.user_token.googleAccessToken),
                pageSize: 1000,
                fields: 'storageQuota',
                q: `'me' in owners and '${folder_id}' in parents`
            })
            return result.data;
        } catch (e) {
            console.log(e);
        }
    }
}
export default new GDriveService();