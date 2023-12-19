import { userApi } from "@/store/api/userApi";
import {
    editUserData,
    setUserAuth,
    setUserData,
    setUserSubscription,
    TUserDataState
} from "@/store/reducers/userReducer";
import { TUserCommonData, TUserData } from "@/models/userData";
import {storage} from "@/utils/localStorage";
import {SUBSCRIPTION} from "@/consts/profile";

export const checkUserAuth = () => (dispatch: any) => {
    userApi
        .checkUserAuth()
        .then((res) => {
            dispatch(setUserAuth(Boolean(res)))
        })
        .catch(() => {})
}

export const getUserPersonalData = () => (dispatch: any) => {
    try {
        userApi
            .getUserPersonalDataApi()
            .then((res: TUserDataState) => {
                dispatch(setUserData(res));
                // todo: get subscription status from userData
                // setUserSubscriptionFetch(true);
                dispatch(setUserSubscriptionFetch(Boolean(storage.get(SUBSCRIPTION))));
            })
            .catch(() => {
                dispatch(setUserData(null));
            })
    } catch (e) {
        console.error('error ', e);
    }
}

export const editUserDataFetch = (data: TUserData) => (dispatch: any) => {
    userApi
        .editUserPersonalDataApi(data)
        .then((res: TUserData | null) => {
            dispatch(editUserData(res));
        })
        .catch(() => {})
}

export const setUserSubscriptionFetch = (data: boolean) => (dispatch: any) => {
    void new Promise(() => {
        dispatch(setUserSubscription(data));
        storage.set(SUBSCRIPTION, String(data))
    })
}

export const editUserImageFetch = (data: { profile_image: File | null }) => (dispatch: any) => {
    userApi
        .uploadUserImage(data)
        .then((res) => {
            if (res) {
                getUserPersonalData();
            }
        })
        .catch(() => {})
}


