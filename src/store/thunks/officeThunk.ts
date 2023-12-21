import { OfficeAPI } from "../api/officePage"
import {
    setCharts, setDiagrams
} from "../reducers/OfficeReducer"
import type { TUserCharts } from "@/models/charts";

export const getDiagrams = () => (dispatch: any) => {
    OfficeAPI
        .getDiagrams()
        .then((response) => {
            const { life_balance, non_life_balance_false, life_balance_total, non_life_balance_false_total } = response.data;
            dispatch(setDiagrams({
                lifeBalance: {
                    date: life_balance.project_name__project_name,
                    dots: life_balance.total_spent_minutes,
                    avg: life_balance_total
                },
                nonLifeBalance: {
                    date: non_life_balance_false.project_name__project_name,
                    dots: non_life_balance_false.total_spent_minutes,
                    avg: non_life_balance_false_total
                },
            }))
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
