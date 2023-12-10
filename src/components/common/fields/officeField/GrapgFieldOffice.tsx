'use client'

import { ChartComponent } from "@/components/common/graphs/Chart";
import React, { useEffect, useState } from "react";

export type TGraphField = {
    name: string;
    color: string;
    params: { label: [], data: [] }
}

export default function GraphFieldOffice({ name, params, color }: TGraphField) {
    return (
        <div className="bg-white h-[230px] big_screen_h:h-[calc(33vh-58px)] sx_lg:h-[300px] rounded-6 p-6 pt-3">
            <h4 className="text-heading-ss-bold">
                {name}
            </h4>

            {
                params.data.length ? <ChartComponent params={params} color={color} /> : null
            }
        </div>
    )
}