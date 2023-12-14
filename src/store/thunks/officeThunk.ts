import { TUserData } from "@/models/userData";
import { OfficeAPI } from "../api/officePage"
import {setProductivity, editUserPersonalData, setEmotional, setHolidays} from "../reducers/OfficeReducer"

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

export const editUserPersonalDataThunk = (data: TUserData) => (dispatch: any) => {
    OfficeAPI.editUserPersonalDataApi(data)
        .then((response) => {
            dispatch(editUserPersonalData(response.data));
        })
}
