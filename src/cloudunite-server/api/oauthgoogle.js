import {google} from "googleapis";

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

export const authGoogle = (accessToken) => {
    oauth2Client.setCredentials({access_token: accessToken})
    return oauth2Client;
}