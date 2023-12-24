import type {
  TRankUpdateList,
  TUserData,
  TUserSmallDataArray,
} from '@/models/userData';
import type { TInsightCardArray } from '@/models/traker';
import { TUserSearchData, TUserSearchDataArray } from '@/models/userData';

const SET_LIST_OF_INSIGHTS = 'SET_LIST_OF_INSIGHTS';
const SET_LIST_OF_TOP_USES = 'SET_LIST_OF_TOP_USES';
const SET_SELECTED_USER_DATA = 'SET_SELECTED_USER_DATA';
const SET_SEARCH_USERS = 'SET_SEARCH_USERS';
const SET_NEWS_DATA = 'SET_NEWS_DATA';
const SET_RANK_UPDATE_LIST = 'SET_RANK_UPDATE_LIST';

type TTracker = {
  listOfTopUsers: TUserSmallDataArray | null;
  listOfUserInsights: TInsightCardArray | null;
  listOfNews: [] | null;

  main_important_news: object[];
  main_live_success_feed: object[];
  main_live_chat_flood: object[];
  selectedUserData: TUserData | object;
  searchUsers: TUserSearchDataArray;
  rankUpdateList?: TRankUpdateList;
};

const initialState: TTracker = {
  listOfTopUsers: null,
  listOfUserInsights: null,
  listOfNews: null,

  main_important_news: [],
  main_live_success_feed: [],
  main_live_chat_flood: [],
  selectedUserData: {},
  searchUsers: [],
  rankUpdateList: undefined,
};

const TrakerReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_LIST_OF_INSIGHTS:
      return {
        ...state,
        listOfUserInsights: [...action.data],
      };
    case SET_LIST_OF_TOP_USES:
      return {
        ...state,
        listOfTopUsers: [...action.data],
      };
    case SET_SELECTED_USER_DATA:
      return {
        ...state,
        selectedUserData: action.data,
      };
    case SET_SEARCH_USERS:
      return {
        ...state,
        searchUsers: action.data.slice(0, 5),
      };
    case SET_NEWS_DATA:
      return {
        ...state,
        listOfNews: action.data,
      };
    case SET_RANK_UPDATE_LIST:
      return {
        ...state,
        rankUpdateList: action.data,
      };
    default:
      return state;
  }
};

export const setListOfUserInsights = (data: TInsightCardArray) => ({
  type: SET_LIST_OF_INSIGHTS,
  data,
});
export const setListOfTopUsers = (data: TUserSmallDataArray) => ({
  type: SET_LIST_OF_TOP_USES,
  data,
});
export const setSelectedUserData = (data: TUserData | object) => ({
  type: SET_SELECTED_USER_DATA,
  data,
});
export const setSearchUsersData = (data: TUserSearchDataArray) => ({
  type: SET_SEARCH_USERS,
  data,
});
export const setNewsData = (data: any) => ({ type: SET_NEWS_DATA, data });
export const setRankUpdateList = (data: TRankUpdateList) => ({
  type: SET_RANK_UPDATE_LIST,
  data,
});

export default TrakerReducer;
