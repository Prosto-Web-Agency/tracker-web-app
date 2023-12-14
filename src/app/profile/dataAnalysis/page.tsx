'use client'

import DataAnalysisComponent from "@/components/pages/dataAnalysis";
import ProtectedRoute from "@/components/common/protectedRoute";

export default function DataAnalysis() {
    return (
        <ProtectedRoute>
            <div className="text-white">
                <DataAnalysisComponent />
            </div>
        </ProtectedRoute>
    )
}
