const GET_BALANCE_DATA = 'GET_BALANCE_DATA';
const SET_BALANCE = 'SET_BALANCE';
const GET_BALANCE_DATA_SLIDERS = 'GET_BALANCE_DATA_SLIDERS';

type TBalance = {
    balanceData: {}
    balanceIsSet: boolean
    slidersData: {
        "self_development": number,
        "relationship": number,
        "career": number,
        "rest": number,
        "environment": number,
        "income": number,
        "creation": number,
        "health": number
    }
}

const initialState: TBalance = {
    balanceData: {},
    balanceIsSet: true,
    slidersData: {
        "self_development": 0,
        "relationship": 0,
        "career": 0,
        "rest": 0,
        "environment": 0,
        "income": 0,
        "creation": 0,
        "health": 0
    }
};

const BalanceWheelReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case GET_BALANCE_DATA:
            return {
                ...state,
                balanceData: action.data
            }
        case SET_BALANCE:
            return {
                ...state,
                balanceIsSet: action.data
            }
        case GET_BALANCE_DATA_SLIDERS:
            return {
                ...state,
                slidersData: action.data
            }
        default:
            return state
    }
}

export const setBalanceData = (data: {}) => {
    let Date: [] = [];
    for (const [key, value] of Object.entries(data)) {
        //@ts-ignore
        Date.push(value)
    }
    return { type: GET_BALANCE_DATA, data: Date.slice(0, 8) }
}
export const setBalanceDataForSliders = (data: {}) => {
    return { type: GET_BALANCE_DATA_SLIDERS, data }
}
export const setSetBalance = (data: {}) => ({ type: SET_BALANCE, data })

export default BalanceWheelReducer;
