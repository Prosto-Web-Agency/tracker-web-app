import {storage} from "@/utils/localStorage";
import {LOGIN, TOKEN} from "@/consts/profile";
import axios, {AxiosRequestConfig} from "axios";
import {TUserData} from "@/models/userData";

const endpoint = process.env.ENDPOINT;

const config = (): AxiosRequestConfig => {
    return ({
        headers: {
            Authorization: `Token ${storage.get(TOKEN)}`,
        }
    })
};

const configWithBody = (): AxiosRequestConfig => {
    return ({
        headers: {
            Authorization: `Token ${storage.get(TOKEN)}`,
            'Content-Type': 'multipart/form-data',
        }
    })
};

export const userApi = {
    checkUserAuth() {
        if (storage.get(TOKEN) && storage.get(LOGIN)) {
            return new Promise((resolve) => resolve(true));
        }

        return new Promise((resolve) => resolve(false));
    },
    getUserPersonalDataApi() {
        return axios.get(endpoint + 'get_user_personal_data', config())
            .then(res => {
                if (res.status === 200) {
                    return res.data
                }

                return null;
            })
    },
    editUserPersonalDataApi(data: TUserData) {
        return axios.post(endpoint + 'change_user_personal_data', data, config())
            .then(res => {
                if (res.status === 200) {
                    return res.data
                }

                return null;
            })
            .catch((e) => {})
    },
    uploadUserImage(data: { profile_image: File | null }) {
        return axios.post(endpoint + 'profile_image', data, configWithBody())
            .then(res => {
                if (res.status === 200) {
                    return res.data
                }

                return null;
            })
    },
    getUserPopupData(login: string) {
        return axios.get(endpoint + `user_pop_up?login=${login}`, config())
            .then(res => {
                if (res.status === 200) {
                    return res.data
                }

                return null;
            })
    },
    getUserSubscriptions() {
        return axios.get(endpoint + 'user_subscriptions', config())
            .then(res => {
                if (res.status === 200) {
                    console.log(res.data);
                    return res.data
                }

                return null;
            })
    }
}

