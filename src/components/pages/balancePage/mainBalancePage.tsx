'use client'

import Header from "@/components/common/header";
import BalanceWebPage from "./balanceGraph";
import BalancePage from ".";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserWheelData } from "@/store/thunks/WheelThunk";

export default function MainBalancePage() {
    const dispatch = useDispatch();
    // @ts-ignore
    const { balanceIsSet, balanceData } = useSelector(state => state.balanceWheel);
    useEffect(() => {
        // @ts-ignore
        dispatch(getUserWheelData())
    }, []);

    return (
        <div className="overflow-y-scroll">
            <Header />
            <div className="w-full min-h-[calc(100vh-90px)] py-10 bg-bg-gray">
                {
                    balanceIsSet
                        ? <BalanceWebPage balanceData={balanceData} />
                        : <BalancePage />
                }
            </div>
        </div>
    )
}
