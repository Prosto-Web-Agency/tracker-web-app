'use client'

import Header from "@/components/common/header";
import PersonalOffice from "@/components/pages/profile";
import ProtectedRoute from "@/components/common/protectedRoute";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {checkUserAuth, getUserPersonalData} from "@/store/thunks/userThunk";
import ReportsPage from "@/components/pages/reports";

export default function Reports() {
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

    return (
        <ProtectedRoute>
            <Header />
            <ReportsPage />
        </ProtectedRoute>
    )
}
