import {TUserCommonData} from "@/models/userData";

const SET_USER_AUTH = 'SET_USER_AUTH';
const SET_USER_DATA = 'SET_USER_DATA';

type TUser = {
    isUserAuth: boolean;
    isAuthCheck: boolean;
    userData: TUserCommonData | null;
}

const initialState: TUser = {
    isUserAuth: false,
    isAuthCheck: false,
    userData: null
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
        default:
            return state
    }
}

export let setUserAuth = (data: boolean) => ({ type: SET_USER_AUTH, data })
export let setUserData = (data: TUserCommonData | null) => ({ type: SET_USER_DATA, data })

export default userReducer;
