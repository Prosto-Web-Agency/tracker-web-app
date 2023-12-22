'use client'

import ProtectedRoute from "@/components/common/protectedRoute";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {checkUserAuth, getUserPersonalData} from "@/store/thunks/userThunk";
import { getUserWheelData } from "@/store/thunks/WheelThunk";
import BalancePage from "@/components/pages/balancePage";
import Header from "@/components/common/header";

export default function Balance() {
    // @ts-ignore
    const { isUserAuth } = useSelector(state => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        // @ts-ignore
        dispatch(checkUserAuth());
    }, []);

    useEffect(() => {
        if (isUserAuth) {
            // @ts-ignore
            dispatch(getUserPersonalData());
        }
    }, [isUserAuth]);

    useEffect(() => {
        if (isUserAuth) {
            // @ts-ignore
            dispatch(getUserWheelData());
        }
    }, [isUserAuth]);

    return (
        <ProtectedRoute>
            <Header />
            <BalancePage />
        </ProtectedRoute>
    )
}
