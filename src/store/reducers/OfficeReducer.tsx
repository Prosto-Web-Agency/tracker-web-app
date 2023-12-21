import { TUserData } from "@/models/userData";
import {TUserCharts} from "@/models/charts";

const SET_CHARTS = 'SET_CHARTS';
const EDIT_USER_PERSONAL_DATA = 'EDIT_USER_PERSONAL_DATA';

export type TChart = {
    label: string[],
    data: number[]
}

type TMetricsType = {
    [key: string]: number;
};

type TOfficePage = {
    charts: TUserCharts | null;
    firstMetrics: TChart | null,
}

const initialState: TOfficePage = {
    charts: null,
    firstMetrics: null
};

let OfficeReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_CHARTS:
            return {
                ...state,
                charts: action.data
            }
        default:
            return state
    }
}

export const setCharts = (data: TUserCharts) => {
    return { type: SET_CHARTS, data }
}

export const editUserPersonalData = (data: TUserData) => ({ type: EDIT_USER_PERSONAL_DATA, data });

export default OfficeReducer;
