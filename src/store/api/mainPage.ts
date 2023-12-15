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
    }
}
