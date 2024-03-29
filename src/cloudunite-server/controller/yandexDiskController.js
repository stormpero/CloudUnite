import yandex from "../api/yandexapis/index.js";
import YandexDiskService from "../service/disks/yandexDiskService.js";

import oauthService from "../service/oauth/oauthService.js";
import {CLIENT_URL_LOGIN_SUCCESS} from "../config/urls.js";


class YandexDiskController {

    async login(req, res, next) {
        try {
            const url = yandex.auth.generateAuthUrl();
            res.redirect(url);
        } catch (e) {
            next(e)
        }
    }

    async callback(req, res, next) {
        try {
            const {code} = req.query;
            const {refreshToken} = req.cookies;
            await YandexDiskService.callback(refreshToken, code);
            return res.redirect(CLIENT_URL_LOGIN_SUCCESS)
        } catch (e) {
            next(e)
        }
    }

    async storageQuota(req, res, next) {
        try {
            const {user} = req;
            const result = await YandexDiskService.storageQuota(user.id);
            return res.status(200).json(result)
        } catch (e) {
            next(e)
        }
    }

    async folderFiles(req, res, next) {
        try {
            const {user, query: {folderId}} = req;
            const result = await YandexDiskService.folderFiles(user.id, folderId);
            return res.status(200).json(result)
        } catch (e) {
            next(e)
        }
    }

    async recentFiles(req, res, next) {
        try {
            const {user} = req;
            const result = await YandexDiskService.recentFiles(user.id);
            return res.status(200).json(result)
        } catch (e) {
            next(e)
        }
    }

    async trashFiles(req, res, next) {
        try {
            const {user, query: {folderId}} = req;
            const result = await YandexDiskService.trashFiles(user.id, folderId);
            return res.status(200).json(result)
        } catch (e) {
            next(e)
        }
    }

    async newFolder(req, res, next) {
        try {
            const {user, body: {folderPath}} = req;
            const result = await YandexDiskService.newFolder(user.id, folderPath);
            return res.status(200).json(result)
        } catch (e) {
            next(e)
        }
    }

    async fileDownloadLink(req, res, next) {
        try {
            const {user,  query: {path}} = req;
            const result = await YandexDiskService.fileDownloadLink(user.id, path);
            return res.status(200).json(result)
        } catch (e) {
            next(e)
        }
    }

    async deleteFileOrFolder(req, res, next) {
        try {
            console.log(23123)
            const {user, body: {folderPath}} = req;
            const result = await YandexDiskService.deleteFileOrFolder(user.id, folderPath);
            return res.status(200).json(result)
        } catch (e) {
            next(e)
        }
    }

}

export default new YandexDiskController();