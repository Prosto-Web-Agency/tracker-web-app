import axios from "axios";

const url = 'https://v2224385.hosted-by-vdsina.ru/'

// /live_insight/

export const mainPageApi = {
    getInsaitsApi() {
        return axios.get(url + `live_insight`)
            .then((response) => (response))
    },
    getLeadersApi() {
        return axios.get(url + `top_user`)
            .then((response) => (response))
    },
}