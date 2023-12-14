'use client'

import Header from "@/components/common/header";
import BalancePage from "@/components/pages/balancePage";
import BalanceWebPage from "@/components/pages/balancePage/balanceGraph";
import ProtectedRoute from "@/components/common/protectedRoute";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {checkUserAuth} from "@/store/thunks/userThunk";

export default function Balance() {
    const dispatch = useDispatch();

    useEffect(() => {
        // @ts-ignore
        dispatch(checkUserAuth());
    });

    return (
        <ProtectedRoute>
            <Header />
            <BalancePage />
            <BalanceWebPage />
        </ProtectedRoute>
    )
}
