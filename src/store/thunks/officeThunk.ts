import { OfficeAPI } from "../api/officePage"
import {
    setCharts
} from "../reducers/OfficeReducer"
import type { TUserCharts } from "@/models/charts";

export const getDiagrams = () => (dispatch: any) => {
    OfficeAPI
        .getDiagrams()
        .then((response) => {
            // console.log('diagrams - ', response.data)
            // const { tasks_count = [], report_date = [] } = response.data;
            // dispatch(setProductivity({ tasks_count, report_date }))
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
            // console.log('metrics - ', response.data)
            // const { total_time_spent = [], report_date = [] } = response.data;
            // dispatch(setHolidays({ total_time_spent, report_date }))
        })
        .catch(() => {})
}
