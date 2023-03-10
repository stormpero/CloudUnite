import {sequelize} from "../../config/database.js";
import {DataTypes} from "sequelize";

export const RefreshTokens = sequelize.define("refresh_tokens", {
    token_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, required: true},
    refreshToken: {type: DataTypes.STRING(300)}
})