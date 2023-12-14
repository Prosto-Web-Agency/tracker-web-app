import axios from "axios";

const endpoint = process.env.ENDPOINT

export const mainPageApi = {
    getInsaitsApi() {
        return axios.get(endpoint + `live_insight`)
            .then((response) => (response))
    },
    getLeadersApi() {
        return axios.get(endpoint + `top_user`)
            .then((response) => (response))
    },
    getUserPersonalDataApi(slack: string) {
        return axios.get(endpoint + 'get_user_personal_data', {
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
        return axios.get(endpoint + 'user_pop_up', {
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
