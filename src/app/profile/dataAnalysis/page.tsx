'use client'

import DataAnalysisComponent from "@/components/pages/dataAnalysis";
import ProtectedRoute from "@/components/common/protectedRoute";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {checkUserAuth} from "@/store/thunks/userThunk";

export default function DataAnalysis() {
    const dispatch = useDispatch();

    useEffect(() => {
        // @ts-ignore
        dispatch(checkUserAuth());
    }, []);

    return (
        <ProtectedRoute>
            <div className="text-white">
                <DataAnalysisComponent />
            </div>
        </ProtectedRoute>
    )
}
