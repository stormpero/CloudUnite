import {Users} from "./Users.js";
import {RefreshTokens} from "./RefreshTokens.js";
import {UserTokens} from "./UserTokens.js";

Users.hasOne(RefreshTokens, {foreignKey: "user_id"});
RefreshTokens.belongsTo(Users, {foreignKey: "user_id"});

Users.hasOne(UserTokens, {foreignKey: "user_id"})
UserTokens.belongsTo(Users, {foreignKey: "user_id"})

export default {
    Users,
    RefreshTokens,
    UserTokens
}