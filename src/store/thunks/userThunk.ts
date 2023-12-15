import {userApi} from "@/store/api/userApi";
import {editUserData, setUserAuth, setUserData} from "@/store/reducers/userReducer";
import {TUserCommonData, TUserData} from "@/models/userData";

export const checkUserAuth = () => (dispatch: any) => {
    userApi
        .checkUserAuth()
        .then((res) => {
            dispatch(setUserAuth(Boolean(res)))
        })
}

export const getUserPersonalData = () => (dispatch: any) => {
    userApi
        .getUserPersonalDataApi()
        .then((res: TUserCommonData | null) => {
            dispatch(setUserData(res));
        })
}

export const editUserDataFetch = (data: TUserData) => (dispatch: any) => {
    userApi
        .editUserPersonalDataApi(data)
        .then((res: TUserData | null) => {
            dispatch(editUserData(res));
        })
}

