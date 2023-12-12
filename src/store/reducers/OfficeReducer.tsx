import { TUserData } from "@/models/userData";

const SET_PRODUCTIVITY = 'SET_PRODUCTIVITY';
const EDIT_USER_PERSONAL_DATA = 'EDIT_USER_PERSONAL_DATA';

type TOfficePage = {
    productivuty: {}
    userPersonalData: TUserData | object;
}

const initialState: TOfficePage = {
    productivuty: {
        label: [],
        data: []
    },
    userPersonalData: {
        first_name: '',
        surname: '',
        tg_username: '',
        instagram: '',
        login: '',
    }
};

let OfficeReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_PRODUCTIVITY:
            return {
                ...state,
                productivuty: {
                    data: [...action.data],
                    label: [...action.label]
                }
            }
        case EDIT_USER_PERSONAL_DATA:
            return {
                ...state,
                userPersonalData: action.data
            }
        default:
            return state
    }
}

export const setProductivity = (array: []) => {
    const label: [] = [];
    const data: [] = [];

    array.map(({report_date, task_count}: any) => {
        //@ts-ignore
        label.push(report_date)
        //@ts-ignore
        data.push(task_count)
    })
    
    return { type: SET_PRODUCTIVITY, data, label }
}

export const editUserPersonalData = (data: TUserData) => ({ type: EDIT_USER_PERSONAL_DATA, data });

export default OfficeReducer;