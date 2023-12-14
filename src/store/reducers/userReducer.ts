const SET_USER_AUTH = 'SET_USER_AUTH';

type TUser = {
    isUserAuth: boolean;
    isAuthCheck: boolean;
}

const initialState: TUser = {
    isUserAuth: false,
    isAuthCheck: false
};

const userReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_USER_AUTH:
            return {
                ...state,
                isUserAuth: action.data,
                isAuthCheck: true
            }
        default:
            return state
    }
}

export let setUserAuth = (data: boolean) => ({ type: SET_USER_AUTH, data })

export default userReducer;
