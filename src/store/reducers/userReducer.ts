import {TUserCommonData, TUserData} from "@/models/userData";

const SET_USER_AUTH = 'SET_USER_AUTH';
const SET_USER_DATA = 'SET_USER_DATA';
const EDIT_USER_DATA = 'EDIT_USER_DATA';
const SET_USER_SUBSCRIPTION = 'SET_USER_SUBSCRIPTION';
const SET_USER_IMAGE = 'SET_USER_IMAGE';

export type TUserDataState = TUserCommonData | null | undefined;

type TUser = {
    isUserAuth: boolean;
    isAuthCheck: boolean;
    userData: TUserDataState;
    isUserSubscribed: boolean;
}

const initialState: TUser = {
    isUserAuth: false,
    isAuthCheck: false,
    userData: undefined,
    isUserSubscribed: false
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
        case SET_USER_SUBSCRIPTION:
            return {
                ...state,
                isUserSubscribed: action.data
            }
        default:
            return state
    }
}

export const setUserAuth = (data: boolean) => ({ type: SET_USER_AUTH, data })
export const setUserData = (data: TUserDataState) => ({ type: SET_USER_DATA, data })
export const editUserData = (data: TUserData | null) => ({ type: EDIT_USER_DATA, data });
export const setUserSubscription = (data: boolean) => ({ type: SET_USER_SUBSCRIPTION, data });


export default userReducer;
