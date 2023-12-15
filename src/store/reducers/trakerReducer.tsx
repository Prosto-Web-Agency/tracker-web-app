import type { TUserData, TUserSmallDataArray } from "@/models/userData";
import type { TInsightCardArray } from "@/models/traker";

const SET_LIST_OF_INSIGHTS = 'SET_LIST_OF_INSIGHTS';
const SET_LIST_OF_TOP_USES = 'SET_LIST_OF_TOP_USES';
const SET_SELECTED_USER_DATA = 'SET_SELECTED_USER_DATA';
const SET_SEARCH_USERS = 'SET_SEARCH_USERS';

type TTracker = {
    listOfTopUsers: TUserSmallDataArray | null,
    listOfUserInsights: TInsightCardArray | null;

    main_important_news: object[],
    main_live_success_feed: object[];
    main_live_chat_flood: object[];
    selectedUserData: TUserData | object;
    searchUsers: [];
}

const initialState: TTracker = {
    listOfTopUsers: null,
    listOfUserInsights: null,

    main_important_news: [],
    main_live_success_feed: [],
    main_live_chat_flood: [],
    selectedUserData: {},
    searchUsers: [],
};

const TrakerReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_LIST_OF_INSIGHTS:
            return {
                ...state,
                listOfUserInsights: [...action.data]
            }
        case SET_LIST_OF_TOP_USES:
            return {
                ...state,
                listOfTopUsers: [...action.data]
            }
        case SET_SELECTED_USER_DATA:
            return {
                ...state,
                selectedUserData: action.data
            }
        case SET_SEARCH_USERS:
            return {
                ...state,
                searchUsers: action.data
            }
        default:
            return state
    }
}

export let setListOfUserInsights = (data: TInsightCardArray) => ({ type: SET_LIST_OF_INSIGHTS, data })
export let setListOfTopUsers = (data: TUserSmallDataArray) => ({ type: SET_LIST_OF_TOP_USES, data })
export let setSelectedUserData = (data: TUserData | object) => ({ type: SET_SELECTED_USER_DATA, data })
export let setSearchUsersData = (data: TUserData | object) => ({ type: SET_SEARCH_USERS, data })

export default TrakerReducer;
