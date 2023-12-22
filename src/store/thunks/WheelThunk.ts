import { balanceAPI } from "../api/balanceWheel";
import { setBalanceData, setBalanceDataForSliders, setSetBalance } from "../reducers/balanceWheelReducer";

export const getUserWheelData = () => (dispatch: any) => {
    try {
        balanceAPI
            .getWheelData()
            .then((res: any) => {
                dispatch(setBalanceData(res.data));
                dispatch(setBalanceDataForSliders(res.data));
                dispatch(setSetBalance(true))
            })
    } catch (e) {
        console.error('error ', e);
    }
}

export const updateUserWheelData = (data: {}) => (dispatch: any) => {
    try {
        balanceAPI
            .updateWheelData(data)
            .then((res: { data: {} }) => {

                dispatch(setBalanceData(res.data));
                dispatch(setBalanceDataForSliders(res.data));
                dispatch(setSetBalance(true))
            })
    } catch (e) {
        console.error('error ', e);
    }
}
