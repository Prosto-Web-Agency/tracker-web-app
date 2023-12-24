'use client'

import BalanceWebPage from "./balanceGraph";
import {useDispatch} from "react-redux";
import {useRouter} from "next/navigation";
import {useAppSelector} from "@/hooks/store";
import {useEffect} from "react";
import {getUserWheelData} from "@/store/thunks/WheelThunk";
import type {TReportCheckup} from "@/store/reducers/balanceWheelReducer";

export default function BalancePage() {
    const dispatch = useDispatch();
    const router = useRouter();

    const { balanceData } = useAppSelector(state => state.balanceWheel);

    useEffect(() => {
        // @ts-ignore
        dispatch(getUserWheelData())
            .then((balanceUserData: TReportCheckup | null) => {
                if (balanceUserData && (Math.max(...Object.values(balanceUserData)) < 1)) {
                    router.push('/balance/checkout');
                }
            });
    }, []);

    return (
        <div className="w-full min-h-[100vh] py-10 bg-bg-gray">
            {
                balanceData ? (
                    <BalanceWebPage />
                ) : null
            }
        </div>
    )
}
