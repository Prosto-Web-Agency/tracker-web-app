import axios, { AxiosRequestConfig } from "axios";
import type { TUserData } from "../../models/userData";
import { TEST_TOKEN, TEST_USER, TOKEN } from "@/consts/profile";
import { storage } from "@/utils/localStorage";

const url = 'https://v2224385.hosted-by-vdsina.ru/'

export const OfficeAPI = {
    getEmotionalGrowth() {
        const config: AxiosRequestConfig = {
            params: {
                login: TEST_USER
            },
            headers: {
                Authorization: `Token ${storage.get(TOKEN)}`,
            }
        };

        return axios.get(url + `get_emotional_growth`, config)
            .then((response) => (response))
    },
    getProductivityGrowth() {
        const config: AxiosRequestConfig = {
            params: {
                login: TEST_USER
            },
            headers: {
                Authorization: `Token ${storage.get(TOKEN)}`,
            }
        };

        return axios.get(url + `get_productivity_growth`, config)
            .then((response) => (response))
    },
    getLifeBalanceGrowth() {
        const config: AxiosRequestConfig = {
            params: {
                login: TEST_USER
            },
            headers: {
                Authorization: `Token ${storage.get(TOKEN)}`,
            }
        };

        return axios.get(url + `get_life_balance_growth`, config)
            .then((response) => (response))
    },
    editUserPersonalDataApi(data: TUserData) {
        const config: AxiosRequestConfig = {
            params: data
        };

        return axios.post(url + 'change_user_personal_data', config)
            .then(res => {
                if (res.status === 200) {
                    return res.data
                }

                return undefined;
            })
    }
}