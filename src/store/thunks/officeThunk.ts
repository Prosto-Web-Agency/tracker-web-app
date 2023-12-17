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
            const { tasks_count = [], report_date = [] } = response.data;
            dispatch(setProductivity({ tasks_count, report_date }))
        })
}

export const getEmotionalChartData = () => (dispatch: any) => {
    OfficeAPI
        .getEmotionalChartData()
        .then((response) => {
            const { report_emotional_condition = [], report_date = [] } = response.data;
            dispatch(setEmotional({ report_emotional_condition, report_date }))
        })
}

export const getHolidaysChartData = () => (dispatch: any) => {
    OfficeAPI
        .getHolidaysChartData()
        .then((response) => {
            const { total_time_spent = [], report_date = [] } = response.data;
            dispatch(setHolidays({ total_time_spent, report_date }))
        })
}

export const getFirstMetricsData = () => (dispatch: any) => {
    OfficeAPI
        .getFirstMetrics()
        .then((response) => {
            dispatch(setFirstMetrics(response.data))
        })
}
