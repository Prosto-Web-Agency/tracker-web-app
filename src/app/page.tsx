'use client'

import Header from '@/components/common/header'
import MainPage from '@/components/pages/mainPage'
import ProtectedRoute from "@/components/common/protectedRoute";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {checkUserAuth} from "@/store/thunks/userThunk";

export default function Home() {
    const dispatch = useDispatch();

    useEffect(() => {
        // @ts-ignore
        dispatch(checkUserAuth());
    });

  return (
    <ProtectedRoute>
      <div className='w-screen h-screen relative'>
        <Header />
        <MainPage />
      </div>
    </ProtectedRoute>
  )
}
