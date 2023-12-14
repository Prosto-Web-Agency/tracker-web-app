import { TUserData } from "@/models/userData";

const SET_PRODUCTIVITY = 'SET_PRODUCTIVITY';
const SET_EMOTIONAL = 'SET_EMOTIONAL';
const SET_HOLIDAYS = 'SET_HOLIDAYS';
const EDIT_USER_PERSONAL_DATA = 'EDIT_USER_PERSONAL_DATA';

export type TChart = {
    label: [],
    data: []
}

type TOfficePage = {
    productivityChart: TChart,
    emotionalChart: TChart,
    holidaysChart: TChart,
    userPersonalData: TUserData | object;
}

const initialState: TOfficePage = {
    productivityChart: {
        label: [],
        data: []
    },
    emotionalChart: {
        label: [],
        data: []
    },
    holidaysChart: {
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
                productivityChart: {
                    data: [...action.data],
                    label: [...action.label]
                }
            }
        case SET_EMOTIONAL:
            return {
                ...state,
                emotionalChart: {
                    data: [...action.data],
                    label: [...action.label]
                }
            }
        case SET_HOLIDAYS:
            return {
                ...state,
                holidaysChart: {
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

export const setProductivity = ({ tasks_count: data, report_date: label }: { tasks_count: number[], report_date: string[] }) => {
    return { type: SET_PRODUCTIVITY, data, label }
}
export const setEmotional = ({ report_emotional_condition: data, report_date: label }: { report_emotional_condition: number[], report_date: string[] }) => {
    return { type: SET_EMOTIONAL, data, label }
}
export const setHolidays = ({ total_time_spent: data, report_date: label }: { total_time_spent: number[], report_date: string[] }) => {
    return { type: SET_HOLIDAYS, data, label }
}

export const editUserPersonalData = (data: TUserData) => ({ type: EDIT_USER_PERSONAL_DATA, data });

export default OfficeReducer;
