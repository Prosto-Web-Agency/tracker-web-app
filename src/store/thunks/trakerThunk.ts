import { mainPageApi } from '../api/trakerApi';
import {
  setListOfTopUsers,
  setListOfUserInsights,
  setNewsData,
  setRankUpdateList,
  setSearchUsersData,
} from '@/store/reducers/trakerReducer';
import {
  TRankUpdateList,
  TUserSearchDataArray,
  TUserSmallDataArray,
} from '@/models/userData';

export const getListOfUsersInsights = () => (dispatch: any) => {
  mainPageApi
    .getListOfUserInsightsApi()
    .then((response) => {
      dispatch(setListOfUserInsights(response.data.results));
    })
    .catch(() => {});
};

export const getListOfTopUsers = () => (dispatch: any) => {
  try {
    mainPageApi
      .getListOfTopUsersApi()
      ?.then((response) => {
        dispatch(
          setListOfTopUsers(response.data.results as TUserSmallDataArray),
        );
      })
      .catch(() => {});
  } catch (e) {}
};

export const getSearchUsersThunk = (text: string) => (dispatch: any) => {
  mainPageApi
    .getSearchUsers(text)
    ?.then((response) => {
      dispatch(setSearchUsersData(response.data as TUserSearchDataArray));
    })
    .catch(() => {});
};

export const getNews = () => (dispatch: any) => {
  mainPageApi
    .getNews()
    ?.then((response) => {
      dispatch(setNewsData(response.data.results));
    })
    .catch(() => {});
};

export const getRankUpdateList = () => (dispatch: any) => {
  try {
    return mainPageApi
      .getRankUpdateList()
      .then((res: TRankUpdateList) => {
        dispatch(setRankUpdateList(res));
      })
      .catch(() => {});
  } catch (e) {
    console.error('error ', e);
  }
};
