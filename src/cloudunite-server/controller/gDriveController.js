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

    async files(req, res, next) {
        try {
            const {user} = req;
            await GDriveService.files(token);
            return res.status(200).json("success")
        } catch (e) {
            next(e)
        }
    }

}

export default new GDriveController();