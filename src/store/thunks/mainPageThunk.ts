import { TUserCommonData } from "@/models/userData";
import { mainPageApi } from "../api/mainPage"
import { setSelectedUserData, updateInsaits, updateLeaderboard } from "@/store/reducers/MainPageReducer";

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
    mainPageApi.getUserCommonDataApi(slack)
        .then((res: TUserCommonData | undefined) => {
            if (res) {
                dispatch(setSelectedUserData(res))
            } else {
                dispatch(setSelectedUserData({}))
            }
        })
}
