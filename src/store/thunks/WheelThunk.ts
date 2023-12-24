import { balanceAPI } from '../api/balanceWheel';
import {
  setBalanceData,
  setBalanceDataForSliders,
} from '../reducers/balanceWheelReducer';

export const getUserWheelData = () => (dispatch: any) => {
  try {
    return balanceAPI.getWheelData().then((res: any) => {
      dispatch(setBalanceData(res.data));
      dispatch(setBalanceDataForSliders(res.data));

      return res.data;
    });
  } catch (e) {
    console.error('error ', e);
  }
};

export const updateUserWheelData = (data: {}) => (dispatch: any) => {
  try {
    return balanceAPI.updateWheelData(data).then((res: { data: {} }) => {
      dispatch(setBalanceData(res.data));
      dispatch(setBalanceDataForSliders(res.data));

      return res.data;
    });
  } catch (e) {
    console.error('error ', e);
  }
};
