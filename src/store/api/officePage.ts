import axios from "axios";
import type { TUserData } from "../../models/userData";

const url = 'https://v2224385.hosted-by-vdsina.ru/'

export const OfficeAPI = {
    getEmotionalGrowth() {
        return axios.get(url + `get_emotional_growth?login=anvar`)
            .then((response) => (response))
    },
    getProductivityGrowth() {
        return axios.get(url + `get_productivity_growth?login=anvar`)
            .then((response) => (response))
    },
    getLifeBalanceGrowth() {
        return axios.get(url + `get_life_balance_growth?login=anvar`)
            .then((response) => (response))
    },
    editUserPersonalDataApi(data: TUserData) {
        return axios.post(url + 'change_user_personal_data', {
            params: data
        })
            .then(res => {
                if (res.status === 200) {
                    return res.data
                }

                return undefined;
            })
    }
}