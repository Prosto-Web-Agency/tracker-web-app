const SET_BALANCE = 'SET_BALANCE';
const GET_BALANCE_DATA_SLIDERS = 'GET_BALANCE_DATA_SLIDERS';

export type TReportCheckup = {
  self_development: number;
  relationship: number;
  career: number;
  rest: number;
  environment: number;
  income: number;
  creation: number;
  health: number;
};

type TBalance = {
  balanceData: TReportCheckup | null;
  balanceIsSet: boolean;
  slidersData: TReportCheckup | null;
};

const initialState: TBalance = {
  balanceData: null,
  balanceIsSet: true,
  slidersData: null,
};

const BalanceWheelReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_BALANCE:
      return {
        ...state,
        balanceData: action.data,
      };
    case GET_BALANCE_DATA_SLIDERS:
      return {
        ...state,
        slidersData: action.data,
      };
    default:
      return state;
  }
};

export const setBalanceData = (data: {}) => ({
  type: SET_BALANCE,
  data: Object.values(data),
});
export const setBalanceDataForSliders = (data: {}) => {
  return { type: GET_BALANCE_DATA_SLIDERS, data };
};

export default BalanceWheelReducer;
