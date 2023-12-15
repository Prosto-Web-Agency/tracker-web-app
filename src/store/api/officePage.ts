import axios, { AxiosRequestConfig } from "axios";
import type { TUserData } from "@/models/userData";
import { TOKEN } from "@/consts/profile";
import { storage } from "@/utils/localStorage";

const endpoint = process.env.ENDPOINT

const config: AxiosRequestConfig = {
    headers: {
        Authorization: `Token ${storage.get(TOKEN)}`,
    }
};

export const OfficeAPI = {
    getEmotionalChartData() {
        return axios.get(endpoint + `get_emotional_growth`, config)
            .then((response) => (response))
    },
    getProductivityChartData() {
        return axios.get(endpoint + `get_productivity_growth`, config)
            .then((response) => (response))
    },
    getHolidaysChartData() {
        return axios.get(endpoint + `get_life_balance_growth`, config)
            .then((response) => (response))
    },
    getFirstMetrics() {
        return axios.get(endpoint + `get_project_time`, config)
            .then((response) => (response))
    },
    editUserPersonalDataApi(data: TUserData) {
        return axios.post(endpoint + 'change_user_personal_data', config)
            .then(res => {
                if (res.status === 200) {
                    return res.data
                }

                return undefined;
            })
    }
}
