import { log } from "console";
import { mainPageApi } from "../api/mainPage"
import { updateInsaits, updateLeaderboard } from "../reducers/MainPagereducer";

export const getInsaitsDataThunk = () => (dispatch: any) => {
    mainPageApi.getInsaitsApi()
        .then((response) => {
            dispatch(updateInsaits(response.data.insight_live_text))
        })
}

export const getLeadersDataThunk = () => (dispatch: any) => {
    mainPageApi.getLeadersApi()
        .then((response) => {
            dispatch(updateLeaderboard(response.data.top_user_tg_id))
        })
}

export const getUserDataBySlack = (slack: string) => (dispatch: any) => {
    mainPageApi.getUserDataApi(slack)
        .then((res) => {
            console.log(res);
        })
}