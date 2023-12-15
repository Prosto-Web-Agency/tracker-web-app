import { mainPageApi } from "../api/trakerApi"
import {setListOfTopUsers, setListOfUserInsights} from "@/store/reducers/trakerReducer";
import { TUserSmallDataArray } from "@/models/userData";

export const getListOfUsersInsights = () => (dispatch: any) => {
    mainPageApi.getListOfUserInsightsApi()
        .then((response) => {
            dispatch(setListOfUserInsights(response.data))
        })
}

export const getListOfTopUsers = () => (dispatch: any) => {
    mainPageApi.getListOfTopUsersApi()
        .then((response) => {
            dispatch(setListOfTopUsers(response.data as TUserSmallDataArray))
        })
}