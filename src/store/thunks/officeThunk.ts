import { TUserData } from "@/models/userData";
import { OfficeAPI } from "../api/officePage"
import {
    setProductivity,
    editUserPersonalData,
    setEmotional,
    setHolidays,
    setFirstMetrics
} from "../reducers/OfficeReducer"

export const getProductivityChartData = () => (dispatch: any) => {
    OfficeAPI
        .getProductivityChartData()
        .then((response) => {
            dispatch(setProductivity(response.data))
        })
}

export const getEmotionalChartData = () => (dispatch: any) => {
    OfficeAPI
        .getEmotionalChartData()
        .then((response) => {
            dispatch(setEmotional(response.data))
        })
}

export const getHolidaysChartData = () => (dispatch: any) => {
    OfficeAPI
        .getHolidaysChartData()
        .then((response) => {
            dispatch(setHolidays(response.data))
        })
}

export const getFirstMetricsData = () => (dispatch: any) => {
    OfficeAPI
        .getFirstMetrics()
        .then((response) => {
            dispatch(setFirstMetrics(response.data))
        })
}
