import { TUserData } from "@/models/userData";
import {TMetrics, TUserCharts, TUserDiagrams} from "@/models/charts";

const SET_CHARTS = 'SET_CHARTS';
const SET_DIAGRAMS = 'SET_DIAGRAMS';
const SET_METRICS = 'SET_METRICS';
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
    diagrams: TUserDiagrams | null;
    firstMetrics: TChart | null,
}

const initialState: TOfficePage = {
    charts: null,
    diagrams: null,
    firstMetrics: null
};

let OfficeReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_CHARTS:
            return {
                ...state,
                charts: action.data
            }
        case SET_DIAGRAMS:
            return {
                ...state,
                diagrams: action.data
            }
        case SET_METRICS:
            return {
                ...state,
                metrics: action.data
            }
        default:
            return state
    }
}

export const setCharts = (data: TUserCharts) => {
    return { type: SET_CHARTS, data }
}

export const setDiagrams = (data: TUserDiagrams) => {
    return { type: SET_DIAGRAMS, data }
}

export const setMetrics = (data: TMetrics) => {
    return { type: SET_METRICS, data }
}

export const editUserPersonalData = (data: TUserData) => ({ type: EDIT_USER_PERSONAL_DATA, data });

export default OfficeReducer;
