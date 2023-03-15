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
                q: `'me' in owners and '${folder_id}' in parents`,
                fields: "*"
            })
            return result.data.files;
        } catch (e) {
            console.log(e);
        }
    }

    async folderTree(id) {
        const user = await userRepository.findOneById(id, UserTokens);
        const drive = google.drive({version: "v3", auth: authGoogle(user.user_token)});
        const tree = await this.buildFileTree(drive);
        console.log(JSON.stringify(tree, null, 2));
        return tree
    }


    // async getAllFiles(drive, fields, query) {
    //     let files = [];
    //     let pageToken;
    //
    //     do {
    //         const result = await drive.files.list({
    //             q: query,
    //             fields,
    //             pageToken,
    //         });
    //
    //         files = files.concat(result.data.files);
    //         pageToken = result.data.nextPageToken;
    //     } while (pageToken);
    //
    //     return files;
    // }

    // async getFolderTree(drive, nextPageToken, folderList) {
    //     drive.files.list({
    //         pageToken: nextPageToken ? nextPageToken : "",
    //         pageSize: 1000,
    //         q: "mimeType='application/vnd.google-apps.folder' and 'me' in owners",
    //         fields: "files(id,name,parents),nextPageToken",
    //     }, (err, {data}) => {
    //         if (err) return console.log('The API returned an error: ' + err);
    //         const token = data.nextPageToken;
    //         Array.prototype.push.apply(folderList, data.files);
    //         if (token) {
    //             this.getFolderTree(drive, token, folderList);
    //         } else {
    //             // This script retrieves a folder tree under this folder ID.
    //             const folderId = "0AFKqRzHYm1vNUk9PVA";
    //
    //             const folderTree = function c(folder, folderSt, res) {
    //                 let ar = folderList.filter(e => e?.parents[0] === folder);
    //                 folderSt += folder + "#_aabbccddee_#";
    //                 let arrayFolderSt = folderSt.split("#_aabbccddee_#");
    //                 arrayFolderSt.pop();
    //                 res.push(arrayFolderSt);
    //                 ar.length === 0 && (folderSt = "");
    //                 ar.forEach(e => c(e.id, folderSt, res));
    //                 return res;
    //             }(folderId, "", []);
    //
    //             // Output the folder tree.
    //             console.log(folderTree);
    //         }
    //     });
    // }
}
export default new GoogleDiskService();