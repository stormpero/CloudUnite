import axios from "axios";

export const getAbout = async (token) => {
    const res = await axios.get('https://cloud-api.yandex.net/v1/disk', {
        headers: {
            Authorization: `OAuth ${token}`
        }
    });
    return res.data;
}