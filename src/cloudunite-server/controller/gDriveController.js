import GDriveService from "../service/gdrive/gDriveService.js";


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
            const {user} = req;
            const result = await GDriveService.files(user.id);
            return res.status(200).json(result)
        } catch (e) {
            next(e)
        }
    }

}

export default new GDriveController();