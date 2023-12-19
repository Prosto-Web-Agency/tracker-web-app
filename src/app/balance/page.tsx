'use client'

import ProtectedRoute from "@/components/common/protectedRoute";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {checkUserAuth} from "@/store/thunks/userThunk";
import { getUserWheelData } from "@/store/thunks/WheelThunk";
import MainBalancePage from "@/components/pages/balancePage/mainBalancePage";

export default function Balance() {
    const dispatch = useDispatch();
    
    useEffect(() => {
        // @ts-ignore
        dispatch(checkUserAuth());
        // @ts-ignore
        // dispatch(getUserWheelData())
        // console.log(userBalanceData);
    }, []);

    return (
        <ProtectedRoute>
            <MainBalancePage />
        </ProtectedRoute>
    )
}
