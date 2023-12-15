import {storage} from "@/utils/localStorage";
import {LOGIN, TOKEN} from "@/consts/profile";
import axios, {AxiosRequestConfig} from "axios";

const endpoint = process.env.ENDPOINT;

const config: AxiosRequestConfig = {
    headers: {
        Authorization: `Token ${storage.get(TOKEN)}`,
    }
};

export const userApi = {
    checkUserAuth() {
        if (storage.get(TOKEN) && storage.get(LOGIN)) {
            return new Promise((resolve) => resolve(true));
        }

        return new Promise((resolve) => resolve(false));
    },
    getUserPersonalDataApi() {
        return axios.get(endpoint + 'get_user_personal_data', config)
            .then(res => {
                if (res.status === 200) {
                    return res.data
                }

                return null;
            })
    },
}

