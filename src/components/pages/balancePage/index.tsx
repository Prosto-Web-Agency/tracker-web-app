'use client'

import BalanceWebPage from "./balanceGraph";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserWheelData } from "@/store/thunks/WheelThunk";

export default function BalancePage() {
    const dispatch = useDispatch();
    // @ts-ignore
    const { balanceData } = useSelector(state => state.balanceWheel);

    useEffect(() => {
        // @ts-ignore
        dispatch(getUserWheelData())
    }, []);

    useEffect(() => {
        console.log(balanceData)
    }, [balanceData]);

    return (
        <div className="w-full min-h-[100vh] py-10 bg-bg-gray">
            {
                balanceData ? (
                    <BalanceWebPage balanceData={balanceData}/>
                ) : null
            }
        </div>
    )
}
