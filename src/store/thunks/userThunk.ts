import { userApi } from "@/store/api/userApi";
import {editUserData, setUserAuth, setUserData, setUserSubscription} from "@/store/reducers/userReducer";
import { TUserCommonData, TUserData } from "@/models/userData";
import {storage} from "@/utils/localStorage";
import {SUBSCRIPTION} from "@/consts/profile";

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
            // todo: get subscription status from userData
            // setUserSubscriptionFetch(true);
            dispatch(setUserSubscriptionFetch(Boolean(storage.get(SUBSCRIPTION))));
        })
}

export const editUserDataFetch = (data: TUserData) => (dispatch: any) => {
    userApi
        .editUserPersonalDataApi(data)
        .then((res: TUserData | null) => {
            dispatch(editUserData(res));
        })
}

export const setUserSubscriptionFetch = (data: boolean) => (dispatch: any) => {
    return new Promise(() => {
        dispatch(setUserSubscription(data));
    })
}

