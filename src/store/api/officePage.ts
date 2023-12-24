import axios, { AxiosRequestConfig } from 'axios';
import type { TUserData } from '@/models/userData';
import { TOKEN } from '@/consts/profile';
import { storage } from '@/utils/localStorage';

const endpoint = process.env.ENDPOINT;

const config = (): AxiosRequestConfig => {
  return {
    headers: {
      Authorization: `Token ${storage.get(TOKEN)}`,
    },
  };
};

export const OfficeAPI = {
  getDiagrams() {
    return axios
      .get(endpoint + `personal_diagrams`, config())
      .then((response) => response);
  },
  getCharts() {
    return axios
      .get(endpoint + `personal_graphics`, config())
      .then((response) => response);
  },
  getMetrics() {
    return axios
      .get(endpoint + `personal_metrics`, config())
      .then((response) => response);
  },
  editUserPersonalDataApi(data: TUserData) {
    return axios
      .post(endpoint + 'change_user_personal_data', config())
      .then((res) => {
        if (res.status === 200) {
          return res.data;
        }

        return undefined;
      });
  },
};
