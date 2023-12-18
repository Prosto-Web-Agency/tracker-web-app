'use client';

import Header from "@/components/common/header";
import EditProfilePage from "../../../components/pages/profile/EditProfile";
import 'animate.css';
import ProtectedRoute from "@/components/common/protectedRoute";
import { useEffect } from "react";
import { checkUserAuth } from "@/store/thunks/userThunk";
import {useDispatch} from "react-redux";

export default function EditProfile() {
    const dispatch = useDispatch();

    useEffect(() => {
        // @ts-ignore
        dispatch(checkUserAuth());
    }, [dispatch]);

    return (
        <ProtectedRoute>
            <div className="flex flex-col">
                <Header />
                <div className="h-[calc(100vh-100px)] s_lg:h-[calc(100vh-75px)] bg-bg-gray rounded-t-9 s_lg:rounded-[0] w-screen flex justify-center  items-center">
                    <EditProfilePage />
                </div>
            </div>
        </ProtectedRoute>
    )
}
