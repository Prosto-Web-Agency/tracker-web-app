import { TUserData } from "@/models/userData";
import { OfficeAPI } from "../api/officePage"
import { setProductivity, editUserPersonalData } from "../reducers/OfficeReducer"

export const getProductivityThunk = () => (dispatch: any) => {
    OfficeAPI.getProductivityGrowth()
        .then((response) => {
            dispatch(setProductivity(response.data))
        })
}

export const editUserPersonalDataThunk = (data: TUserData) => (dispatch: any) => {
    OfficeAPI.editUserPersonalDataApi(data)
        .then((response) => {
            dispatch(editUserPersonalData(response.data));
        })
}