import {sequelize} from "../../config/database.js";
import {DataTypes} from "sequelize";

export const Users = sequelize.define("users", {
    user_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, required: true},
    email: {type: DataTypes.STRING, unique: true, required: true},

    google_id: {type: DataTypes.DECIMAL},
    yandex_id: {type: DataTypes.DECIMAL},
    onedrive_id: {type: DataTypes.DECIMAL},

    //blocked: {type: DataTypes.BOOLEAN, defaultValue: false},

    created_at: {type: DataTypes.DATE, required: true}
})