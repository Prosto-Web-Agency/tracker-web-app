import {storage} from "@/utils/localStorage";
import {LOGIN, TOKEN} from "@/consts/profile";

const endpoint = process.env.ENDPOINT

export const userApi = {
    checkUserAuth() {
        if (storage.get(TOKEN) && storage.get(LOGIN)) {
            return new Promise((resolve) => resolve(true));
        }

        return new Promise((resolve) => resolve(false));
    }
}
