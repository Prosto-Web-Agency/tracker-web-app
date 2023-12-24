'use client'

import ProtectedRoute from "@/components/common/protectedRoute";
import { useDispatch } from "react-redux";
import { useEffect} from "react";
import { checkUserAuth, getUserPersonalData} from "@/store/thunks/userThunk";
import { getUserWheelData } from "@/store/thunks/WheelThunk";
import BalancePage from "@/components/pages/balancePage";
import Header from "@/components/common/header";
import { useAppSelector } from "@/hooks/store";
import {TReportCheckup} from "@/store/reducers/balanceWheelReducer";
import {useRouter} from "next/navigation";
import {USER_RANKS} from "@/components/common/fields/officeField/RanksComponent";
import BaseSecondaryCard from "@/components/common/cards/BaseSecondaryCard";

export default function Balance() {
    const dispatch = useDispatch();
    const router = useRouter();

    const { isUserAuth } = useAppSelector(state => state.user);
    const { balanceData } = useAppSelector(state => state.balanceWheel);
    const { userData } = useAppSelector(state => state.user);


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
            dispatch(getUserWheelData())
                .then((balanceUserData: TReportCheckup | null) => {
                    if (balanceUserData && (Math.max(...Object.values(balanceUserData)) < 1)) {
                        router.push('/balance/checkout');
                    }
                });
        }
    }, [isUserAuth]);

    return (
        <ProtectedRoute>
            <Header />
            {
                userData && USER_RANKS.indexOf(userData.rank_name) < USER_RANKS.indexOf("resident") ? (
                    <div className="w-full max-w-[1400px] mx-auto h-[calc(100vh-90px)] flex justify-center items-center">
                        <BaseSecondaryCard className="max-w-[300px] max-h-[200px] text-white flex justify-center items-center text-center text-text-m-bold">
                            Для открытия &quot;Чекапа&quot;, вам необходимо достигнуть ранг &quot;Резидент&quot;
                        </BaseSecondaryCard>
                    </div>
                ) : (
                    <>
                        {
                            balanceData ? (
                                <BalancePage/>
                            ) : null
                        }
                    </>
                )
            }
        </ProtectedRoute>
    )
}
