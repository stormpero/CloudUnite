import GoogleDiskService from "../service/disks/googleDiskService.js";


class GoogleDiskController {
    async storageQuota(req, res, next) {
        try {
            const {user} = req;
            const result = await GoogleDiskService.storageQuota(user.id);
            return res.status(200).json(result)
        } catch (e) {
            next(e)
        }
    }

    async folderFiles(req, res, next) {
        try {
            const {user, query: {folderId}} = req;
            const result = await GoogleDiskService.folderFiles(user.id, folderId);
            return res.status(200).json(result)
        } catch (e) {
            next(e)
        }
    }

    async recentFiles(req, res, next) {
        try {
            const {user} = req;
            const result = await GoogleDiskService.recentFiles(user.id);
            return res.status(200).json(result)
        } catch (e) {
            next(e)
        }
    }

    async trashFiles(req, res, next) {
        try {
            const {user} = req;
            const result = await GoogleDiskService.trashFiles(user.id);
            return res.status(200).json(result)
        } catch (e) {
            next(e)
        }
    }
}

export default new GoogleDiskController();