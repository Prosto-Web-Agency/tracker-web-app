'use client';

import Header from '@/components/common/header';
import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import {checkUserAuth, getUserPersonalData} from "@/store/thunks/userThunk";
import ReportsPage from "@/components/pages/reports";

export default function Start() {
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
        <div className='w-screen h-screen relative'>
            <Header />
            <ReportsPage/>
        </div>
    )
}
