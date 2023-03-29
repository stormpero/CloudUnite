import axios from "axios";

const OAuthHeader = (token) =>({
    Authorization: `OAuth ${token}`
})

export const getAbout = async (token) => {
    const res = await axios.get('https://cloud-api.yandex.net/v1/disk', {
        headers: OAuthHeader(token)
    });
    return res.data;
}

export const getFolderFiles = async (folder, token) => {
    const res = await axios.get('https://cloud-api.yandex.net/v1/disk/resources', {
        headers: OAuthHeader(token),
        params: {
            path: folder
        }
    });
    return res.data?._embedded;
}

export const getRecentFiles = async (token) => {
    const res = await axios.get('https://cloud-api.yandex.net/v1/disk/resources/last-uploaded', {
        headers: OAuthHeader(token),
    });
    return res.data;
}

export const getTrashFiles = async (folder, token) => {
    const res = await axios.get('https://cloud-api.yandex.net/v1/disk/trash/resources', {
        headers: OAuthHeader(token),
        params: {
            path: folder
        }
    });
    return res.data?._embedded;
}