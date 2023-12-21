'use client'

import { ChartComponent } from "@/components/common/graphs/Chart";
import React, { useEffect, useState } from "react";
import TRIcon from "@/components/common/icon";
import {TChart} from "@/store/reducers/OfficeReducer";

export type TGraphField = {
    name: string;
    color: string;
    params: TChart;
    elementId: string;
}

export default function GraphFieldOffice({ name, params, color, elementId }: TGraphField) {
    return (
        <div className="bg-white flex-1 rounded-6 p-6 pt-3">
            <h4 className="text-heading-ss-bold">
                {name}
            </h4>

            {
                params?.data.length ? (
                    <ChartComponent params={params} color={color} elementId={elementId} />
                ) : (
                    <div className="flex justify-center items-center w-full h-full">
                        <TRIcon iconName="loader" edgeLength={48} className="animate-spin" />
                    </div>
                )
            }
        </div>
    )
}
