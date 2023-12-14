'use client'

import { ChartComponent } from "@/components/common/graphs/Chart";
import React, { useEffect, useState } from "react";
import TRIcon from "@/components/common/icon";

export type TGraphField = {
    name: string;
    color: string;
    params: { label: [], data: [] }
}

export default function GraphFieldOffice({ name, params, color }: TGraphField) {
    return (
        <div className="bg-white h-[230px] big_screen_h:h-[310px] sx_lg:h-[300px] rounded-6 p-6 pt-3">
            <h4 className="text-heading-ss-bold">
                {name}
            </h4>

            {
                params?.data.length ? (
                    <ChartComponent params={params} color={color} />
                ) : (
                    <div className="flex justify-center items-center w-full h-full">
                        <TRIcon iconName="loader" edgeLength={48} className="animate-spin" />
                    </div>
                )
            }
        </div>
    )
}
