import axios, {AxiosRequestConfig} from "axios";
import {storage} from "@/utils/localStorage";
import {TOKEN} from "@/consts/profile";

const endpoint = process.env.ENDPOINT

const config: AxiosRequestConfig = {
    headers: {
        Authorization: `Token ${storage.get(TOKEN)}`,
    }
};


export const mainPageApi = {
    getListOfUserInsightsApi() {
        return axios.get(endpoint + `live_insight`, config)
            .then((response) => response)
    },
    getListOfTopUsersApi() {
        return axios.get(endpoint + `top_user`, config)
            .then((response) => response)
    },
}
