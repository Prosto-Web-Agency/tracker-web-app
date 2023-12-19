import axios, { AxiosRequestConfig } from "axios";
import { TOKEN } from "@/consts/profile";
import { storage } from "@/utils/localStorage";

const endpoint = process.env.ENDPOINT

const config: AxiosRequestConfig = {
    headers: {
        Authorization: `Token ${storage.get(TOKEN)}`,
    }
};

export const balanceAPI = {
    getWheelData() {
        return axios.get(endpoint + `get_wheel_data`, config)
            .then((response) => (response))
    },
    updateWheelData(data: {}) {
        return axios.post(endpoint + `update_or_create_balance_wheel`,
            data,
            config
        )
            .then((response) => (response))
    },
}