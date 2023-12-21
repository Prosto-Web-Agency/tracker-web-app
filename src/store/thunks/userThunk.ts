import { userApi } from "@/store/api/userApi";
import {
    editUserData,
    setUserAuth,
    setUserData,
    setUserPopupData,
    setUserSubscriptionPayment,
    setUserSubscriptions,
    setUserSubscriptionsReports,
    type TUserDataState
} from "@/store/reducers/userReducer";
import type {
    TUserData,
    TUserPopupData,
    TUserSubscriptionsArray,
    TUserSubscriptionsReportArray
} from "@/models/userData";
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
                dispatch(setUserSubscriptionPaymentFetch(Boolean(storage.get(SUBSCRIPTION))));
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

export const setUserSubscriptionPaymentFetch = (data: boolean) => (dispatch: any) => {
    void new Promise(() => {
        dispatch(setUserSubscriptionPayment(data));
        setTimeout(() => storage.set(SUBSCRIPTION, String(data)),0)
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

export const getUserPopupData = (login: string) => (dispatch: any) => {
    try {
        userApi
            .getUserPopupData(login)
            .then((res: TUserPopupData) => {
                dispatch(setUserPopupData(res));
            })
            .catch(() => {})
    } catch (e) {
        console.error('error ', e);
    }
}

export const getUserSubscriptionsData = () => (dispatch: any) => {
    try {
        userApi
            .getUserSubscriptions()
            .then((res: TUserSubscriptionsArray) => {
                dispatch(setUserSubscriptions(res));
            })
            .catch(() => {})
    } catch (e) {
        console.error('error ', e);
    }
}

export const getUserSubscriptionsReportsData = () => (dispatch: any) => {
    try {
        userApi
            .getUserSubscriptionsReports()
            .then((res: TUserSubscriptionsReportArray) => {
                dispatch(setUserSubscriptionsReports(res));
            })
            .catch(() => {})
    } catch (e) {
        console.error('error ', e);
    }
}


export const subscribeOnUserByLogin = (streamer_login: string) => (dispatch: any) => {
    try {
        userApi
            .subscribeOnUserByLogin({ streamer_login })
            .then((res: any) => {
                dispatch(getUserSubscriptionsReportsData());
                dispatch(getUserSubscriptionsData());
            })
            .catch(() => {})
    } catch (e) {
        console.error('error ', e);
    }
}

export const unsubscribeOnUserByLogin = (streamer_login: string) => (dispatch: any) => {
    try {
        userApi
            .unsubscribeOnUserByLogin({ streamer_login })
            .then((res: any) => {
                dispatch(getUserSubscriptionsReportsData());
                dispatch(getUserSubscriptionsData());
            })
            .catch(() => {})
    } catch (e) {
        console.error('error ', e);
    }
}

