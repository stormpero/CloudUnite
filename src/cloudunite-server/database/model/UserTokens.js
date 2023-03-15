import {sequelize} from "../../config/database.js";
import {DataTypes} from "sequelize";

export const UserTokens = sequelize.define("user_tokens", {
    googleAccessToken: {type: DataTypes.STRING},
    googleAccessTokenExpiry: {type: DataTypes.DATE},
    googleRefreshToken: {type: DataTypes.STRING},

    yandexAccessToken: {type: DataTypes.STRING},
    yandexAccessTokenExpiry: {type: DataTypes.DATE},
    yandexRefreshToken: {type: DataTypes.STRING},
})