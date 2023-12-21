import { TUserData } from "@/models/userData";
import { OfficeAPI } from "../api/officePage"
import {
    setProductivity,
    editUserPersonalData,
    setEmotional,
    setHolidays,
    setFirstMetrics
} from "../reducers/OfficeReducer"

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
            console.log('charts - ', response.data);
            // const { report_emotional_condition = [], report_date = [] } = response.data;
            // dispatch(setEmotional({ report_emotional_condition, report_date }))
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
