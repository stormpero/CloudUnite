import axios from "axios";
import {GET} from "./methods.js";
import {ApiError} from "../../exceptions/apiError.js";

export const makeRequest = ({
        url = '/',
        method = GET,
        data = {},
        ...configs
    }) => {
    return axios.request({url, method, data, ...configs})
        .catch((error) => throw ApiError.BadRequest("Yandex Api", error))
};