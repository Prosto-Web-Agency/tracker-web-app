import axios from "axios";

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
}