import {UserDto} from "../database/dto/userDto.js";
import {ApiError} from "../exceptions/apiError.js";
import {authorizationUrl} from "../api/oauthgoogle.js";
import {validationResult} from "express-validator";
import oauthService from "../service/oauth/oauthService.js";
import {CLIENT_URL_LOGIN_SUCCESS} from "../config/urls.js";


class OAuthController {
    async login(req, res, next) {
        try {
            return res.redirect(authorizationUrl);
        } catch (e) {
            next(e)
        }
    }

    async callback(req, res, next) {
        try {
            const {code} = req.query;
            const refreshToken = await oauthService.callback(code);
            res.cookie("refreshToken", refreshToken, {maxAge: process.env.JWT_REFRESH_AGE, httpOnly: true});
            return res.redirect(CLIENT_URL_LOGIN_SUCCESS)
        } catch (e) {
            next(e)
        }
    }

    async user(req, res, next) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return next(ApiError.UnauthorizedError())
            }

            const {refreshToken} = req.cookies;
            const userData = await oauthService.user(refreshToken);
            res.cookie("refreshToken", userData.refreshToken, {maxAge: process.env.JWT_REFRESH_AGE, httpOnly: true});
            return res.json(new UserDto(userData).json());
        } catch (e) {
            next(e)
        }
    }

    async logout(req, res, next) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return next(ApiError.BadRequest("RefreshToken не найден", errors.array()))
            }

            const {refreshToken} = req.cookies;
            await oauthService.logout(refreshToken);
            res.clearCookie("refreshToken");
            return res.status(200).json("success")
        } catch (e) {
            next(e)
        }
    }
}

export default new OAuthController()