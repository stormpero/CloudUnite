import {sequelize} from "../../config/database.js";
import {DataTypes} from "sequelize";

export const UserFriends = sequelize.define("user_friends", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, required: true},
    date_added: {type: DataTypes.DATE, required: true}
})