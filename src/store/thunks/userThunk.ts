import {userApi} from "@/store/api/userApi";
import {setUserAuth, setUserData} from "@/store/reducers/userReducer";
import {TUserCommonData} from "@/models/userData";

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
