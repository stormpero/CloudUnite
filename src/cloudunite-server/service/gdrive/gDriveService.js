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
                auth:  authGoogle(user.user_token.googleAccessToken),
                fields: 'storageQuota'
            })
            return result.data;
        } catch (e) {
            console.log(e);
        }

    }

    async files(token) {
        const drive = google.drive("v3");
        try {
            const result = await drive.files.list({
                auth: authGoogle(token),
                pageSize: 10,
                fields: 'nextPageToken, files(id, name)',
            });
            console.log(result)
            const files = result.data.files;
            if (files.length) {
                console.log('Files:');
                files.map((file) => {
                    console.log(`${file.name} (${file.id})`);
                });
            } else {
                console.log('No files found.');
            }
        } catch (e) {
            console.log(e)
        }
    }
}
export default new GDriveService();