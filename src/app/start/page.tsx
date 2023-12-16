'use client'

import Header from '@/components/common/header'
import StartPage from '@/components/pages/startPage'
import { useEffect } from "react";
import {useDispatch} from "react-redux";
import {checkUserAuth, getUserPersonalData} from "@/store/thunks/userThunk";

export default function Start() {
    const dispatch = useDispatch();

    useEffect(() => {
        // @ts-ignore
        dispatch(checkUserAuth());
        // @ts-ignore
        dispatch(getUserPersonalData());
    });

    return (
        <div className='w-screen h-screen relative'>
            <Header />
            <StartPage />
        </div>
    )
}
