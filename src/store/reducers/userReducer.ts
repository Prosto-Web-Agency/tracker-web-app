import {
    TUserCommonData,
    TUserData,
    TUserPopupData,
    TUserSubscriptionsArray,
    TUserSubscriptionsReportArray
} from "@/models/userData";

const SET_USER_AUTH = 'SET_USER_AUTH';
const SET_USER_DATA = 'SET_USER_DATA';
const EDIT_USER_DATA = 'EDIT_USER_DATA';
const SET_USER_SUBSCRIPTION_PAYMENT = 'SET_USER_SUBSCRIPTION_PAYMENT';
const SET_USER_IMAGE = 'SET_USER_IMAGE';
const SET_USER_POPUP_DATA = 'SET_USER_POPUP_DATA';
const SET_USER_SUBSCRIPTIONS = 'SET_USER_SUBSCRIPTION';
const SET_USER_SUBSCRIPTIONS_REPORTS = 'SET_USER_SUBSCRIPTIONS_REPORTS';

export type TUserDataState = TUserCommonData | null | undefined;

type TUser = {
    isUserAuth: boolean;
    isAuthCheck: boolean;
    userData: TUserDataState;
    isUserPaidSubscription: boolean;
    userPopupData: TUserPopupData | null;
    userSubscriptions: TUserSubscriptionsArray;
    userSubscriptionsReports: TUserSubscriptionsReportArray;
}

const initialState: TUser = {
    isUserAuth: false,
    isAuthCheck: false,
    userData: undefined,
    isUserPaidSubscription: false,
    userPopupData: null,
    userSubscriptions: [],
    userSubscriptionsReports: []
};

const userReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_USER_AUTH:
            return {
                ...state,
                isUserAuth: action.data,
                isAuthCheck: true
            }
        case SET_USER_DATA:
            return {
                ...state,
                userData: action.data
            }
        case EDIT_USER_DATA:
            return {
                ...state,
                userPersonalData: action.data
            }
        case SET_USER_SUBSCRIPTION_PAYMENT:
            return {
                ...state,
                isUserPaidSubscription: action.data
            }
        case SET_USER_POPUP_DATA:
            return {
                ...state,
                userPopupData: action.data
            }
        case SET_USER_SUBSCRIPTIONS:
            return {
                ...state,
                userSubscriptions: action.data
            }
        case SET_USER_SUBSCRIPTIONS_REPORTS:
            return {
                ...state,
                userSubscriptionsReports: action.data
            }
        default:
            return state
    }
}

export const setUserAuth = (data: boolean) => ({ type: SET_USER_AUTH, data })
export const setUserData = (data: TUserDataState) => ({ type: SET_USER_DATA, data })
export const editUserData = (data: TUserData | null) => ({ type: EDIT_USER_DATA, data });
export const setUserSubscriptionPayment = (data: boolean) => ({ type: SET_USER_SUBSCRIPTION_PAYMENT, data });
export const setUserSubscriptions = (data: TUserSubscriptionsArray) => ({ type: SET_USER_SUBSCRIPTIONS, data });
export const setUserPopupData = (data: TUserPopupData | null) => ({ type: SET_USER_POPUP_DATA, data })
export const setUserSubscriptionsReports = (data: TUserSubscriptionsReportArray) => ({ type: SET_USER_SUBSCRIPTIONS_REPORTS, data })


export default userReducer;
