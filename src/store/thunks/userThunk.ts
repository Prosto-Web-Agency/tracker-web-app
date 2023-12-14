import {userApi} from "@/store/api/userApi";
import {setUserAuth} from "@/store/reducers/userReducer";


export const checkUserAuth = () => (dispatch: any) => {
    userApi
        .checkUserAuth()
        .then((res) => {
            dispatch(setUserAuth(Boolean(res)))
        })
}
