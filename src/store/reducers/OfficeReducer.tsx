import { TUserData } from "@/models/userData";

const SET_PRODUCTIVITY = 'SET_PRODUCTIVITY';
const SET_EMOTIONAL = 'SET_EMOTIONAL';
const SET_HOLIDAYS = 'SET_HOLIDAYS';
const EDIT_USER_PERSONAL_DATA = 'EDIT_USER_PERSONAL_DATA';
const SET_FIRST_METRICS = 'SET_FIRST_METRICS';

export type TChart = {
    label: [],
    data: []
}

type TMetricsType = {
    [key: string]: number;
};

type TOfficePage = {
    productivityChart: TChart | null,
    emotionalChart: TChart | null,
    holidaysChart: TChart | null,
    firstMetrics: TChart | null,
}

const initialState: TOfficePage = {
    productivityChart: null,
    emotionalChart: null,
    holidaysChart: null,
    firstMetrics: null
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
        case SET_FIRST_METRICS:
            return {
                ...state,
                firstMetrics: {
                    data: [...action.data],
                    label: [...action.label]
                }
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

export const setFirstMetrics = (resolvedData: TMetricsType) => {
    const label: string[] = Object.keys(resolvedData);
    const data: number[] = Object.values(resolvedData);

    return { type: SET_FIRST_METRICS, data, label }
}

export const editUserPersonalData = (data: TUserData) => ({ type: EDIT_USER_PERSONAL_DATA, data });

export default OfficeReducer;
