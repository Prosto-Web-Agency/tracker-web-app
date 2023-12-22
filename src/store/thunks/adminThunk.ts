import { adminApi } from "@/store/api/adminApi";

export const getEnableChatsData = () => (dispatch: any) => {
    try {
        adminApi
            .getEnableChatsApi()
            .then((res) => {
                // console.log(res);
            })
            .catch(() => {})
    } catch (e) {
        console.error('error ', e);
    }
}
