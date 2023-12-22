import { storage } from "@/utils/localStorage";
import { TOKEN } from "@/consts/profile";
import axios, {AxiosRequestConfig} from "axios";

const endpoint = process.env.ENDPOINT;

const config = (): AxiosRequestConfig => {
    return ({
        headers: {
            Authorization: `Token ${storage.get(TOKEN)}`,
        }
    })
};

export const adminApi = {
    getEnableChatsApi() {
        return axios.get(endpoint + 'chat/enable_chats', config())
            .then(res => {
                if (res.status === 200) {
                    return res.data
                }

                return null;
            })
    }
}
