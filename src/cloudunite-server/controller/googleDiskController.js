import GDriveService from "../service/disks/gDriveService.js";


class GDriveController {
    async storageQuota(req, res, next) {
        try {
            const {user} = req;
            const result = await GDriveService.storageQuota(user.id);
            return res.status(200).json(result)
        } catch (e) {
            next(e)
        }
    }

    async folderFiles(req, res, next) {
        try {
            const {user, query: {folderId}} = req;
            const result = await GDriveService.folderFiles(user.id, folderId);
            return res.status(200).json(result)
        } catch (e) {
            next(e)
        }
    }

    async folderTree(req, res, next) {
        try {
            const {user} = req;
            const result = await GDriveService.folderTree(user.id);
            return res.status(200).json(result)
        } catch (e) {
            next(e)
        }
    }

}

export default new GDriveController();