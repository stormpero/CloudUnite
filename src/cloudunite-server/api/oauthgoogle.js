import {google} from "googleapis";
import UserRepository from "../database/repository/userRepository.js";
import {UserTokens} from "../database/model/UserTokens.js";
import UserTokensRepository from "../database/repository/userTokensRepository.js";

const GOOGLE_REDIRECT_URL ="http://localhost:7493/api/oauth/callback";

export const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    GOOGLE_REDIRECT_URL
);

const scopes = [
    "https://www.googleapis.com/auth/userinfo.profile",
    "https://www.googleapis.com/auth/drive",
];

export const authorizationUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: scopes,
    include_granted_scopes: true
});

oauth2Client.on('tokens', async (tokens) => {
    const tokenInfo = await oauth2Client.getTokenInfo(tokens.access_token); // email
    if (!tokenInfo.email) return
    const user = await UserRepository.findOneByEmail(tokenInfo.email, UserTokens);
    if (user) {
        console.log("ТОКЕН ОБНОВИЛСЯ")
        user.user_token.googleAccessToken = tokens.access_token;
        user.user_token.save();
    }
});

export const authGoogle = ({googleAccessToken, googleRefreshToken}) => {
    oauth2Client.setCredentials({access_token: googleAccessToken, refresh_token: googleRefreshToken})
    return oauth2Client;
}
