import { OfficeAPI } from "../api/officePage"
import {
    setCharts, setDiagrams, setMetrics
} from "../reducers/OfficeReducer"
import type { TUserCharts } from "@/models/charts";
import {TMetrics} from "@/models/charts";

export const getDiagrams = () => (dispatch: any) => {
    OfficeAPI
        .getDiagrams()
        .then((response) => {
            dispatch(setDiagrams(response.data))
        })
        .catch(() => {})
}

export const getCharts = () => (dispatch: any) => {
    OfficeAPI
        .getCharts()
        .then((response) => {
            dispatch(setCharts(response.data as TUserCharts))
        })
        .catch(() => {})
}

export const getMetrics = () => (dispatch: any) => {
    OfficeAPI
        .getMetrics()
        .then((response) => {
            dispatch(setMetrics(response.data as TMetrics))
        })
        .catch(() => {})
}
