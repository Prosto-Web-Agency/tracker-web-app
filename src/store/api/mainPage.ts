import axios from "axios";

const url = 'https://v2224385.hosted-by-vdsina.ru/'

export const mainPageApi = {
    getInsaitsApi() {
        return axios.get(url + `live_insight`)
            .then((response) => (response))
    },
    getLeadersApi() {
        return axios.get(url + `top_user`)
            .then((response) => (response))
    },
    getUserPersonalDataApi(slack: string) {
        return axios.get(url + 'get_user_personal_data', {
            params: {
                login: slack
            }
        })
            .then(res => {
                if (res.status === 200) {
                    return res.data
                }

                return undefined;
            })
    },
    getUserCommonDataApi(slack: string) {
        return axios.get(url + 'user_pop_up', {
            params: {
                login: slack
            }
        })
            .then(res => {
                if (res.status === 200) {
                    return res.data[0]
                }

                return undefined;
            })
        }
}
