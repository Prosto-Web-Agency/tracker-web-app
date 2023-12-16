'use client'

import Header from "@/components/common/header";
import PersonalOffice from "@/components/pages/profile";
import ProtectedRoute from "@/components/common/protectedRoute";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {checkUserAuth} from "@/store/thunks/userThunk";

export default function Profile() {
    const dispatch = useDispatch();

    useEffect(() => {
        // @ts-ignore
        dispatch(checkUserAuth());
    }, []);

    return (
        <ProtectedRoute>
            <Header />
            <PersonalOffice />
        </ProtectedRoute>
    )
}
