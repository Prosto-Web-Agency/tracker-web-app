import { mainPageApi } from "../api/trakerApi"
import {
    setListOfTopUsers,
    setListOfUserInsights,
    setNewsData,
    setSearchUsersData
} from "@/store/reducers/trakerReducer";
import {TUserSearchDataArray, TUserSmallDataArray} from "@/models/userData";
import {log10} from "chart.js/helpers";

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
export const getSearchUsersThunk = (text: string) => (dispatch: any) => {
    mainPageApi.getSearchUsers(text)
        .then((response) => {
            dispatch(setSearchUsersData(response.data as TUserSearchDataArray))
        })
}

export const getNews = () => (dispatch: any) => {
    mainPageApi.getNews()
        .then((response) => {
            dispatch(setNewsData(response.data.results))
        })
}
