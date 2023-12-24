import axios, { AxiosRequestConfig } from 'axios';
import { storage } from '@/utils/localStorage';
import { TOKEN } from '@/consts/profile';

const endpoint = process.env.ENDPOINT;

const config: AxiosRequestConfig = {
  headers: {
    Authorization: `Token ${storage.get(TOKEN)}`,
  },
};

export const mainPageApi = {
  getListOfUserInsightsApi() {
    return axios
      .get(endpoint + `live_insight`, config)
      .then((response) => response);
  },
  getListOfTopUsersApi() {
    try {
      return axios
        .get(endpoint + `top_user`, config)
        .then((response) => response);
    } catch (e) {}
  },
  getSearchUsers(name: string) {
    try {
      return axios
        .get(endpoint + `user_search?search=${name}`, config)
        .then((response) => response);
    } catch (e) {}
  },
  getNews() {
    try {
      return axios
        .get(endpoint + `news?page=1&page_size=10`, config)
        .then((response) => response);
    } catch (e) {}
  },
  getRankUpdateList() {
    return axios.get(endpoint + 'get_rank_update_list', config).then((res) => {
      if (res.status === 200) {
        return res.data.results;
      }

      return null;
    });
  },
};
