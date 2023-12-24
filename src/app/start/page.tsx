'use client'

import Header from '@/components/common/header'
import StartPage from '@/components/pages/startPage'
import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import {checkUserAuth, getUserPersonalData} from "@/store/thunks/userThunk";
import {useAppSelector} from "@/hooks/store";
import {useRouter} from "next/navigation";

export default function Start() {
    const { isUserAuth, isUserPaidSubscription } = useAppSelector(state => state.user);

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
        <div className='w-screen h-screen relative'>
            <Header />
            <StartPage />
        </div>
    )
}
