'use client'

import ProtectedRoute from "@/components/common/protectedRoute";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { checkUserAuth, getUserPersonalData } from "@/store/thunks/userThunk";
import Header from "@/components/common/header";
import CheckoutPage from "@/components/pages/checkout";
import { getUserWheelData } from "@/store/thunks/WheelThunk";
import { useAppSelector } from "@/hooks/store";

export default function Balance() {
    const dispatch = useDispatch();

    const { isUserAuth } = useAppSelector(state => state.user);

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
            <CheckoutPage />
        </ProtectedRoute>
    )
}
