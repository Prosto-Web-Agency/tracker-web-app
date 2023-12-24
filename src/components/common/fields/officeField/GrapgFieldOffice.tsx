'use client'

import React from "react";
import TRIcon from "@/components/common/icon";
import {TChart} from "@/store/reducers/OfficeReducer";
import ChartComponent from "@/components/common/charts/graphs/Chart";

export type TGraphField = {
    name: string;
    color: string;
    color2?: string;
    params: TChart;
    param2?: TChart,
    elementId: string;
    average: string;
    type: 'chartProductive' | 'chartRelax' | 'chartEmotional';
}

function GraphFieldOffice({ name, params, param2, color, color2, elementId, type, average }: TGraphField) {
    return (
        <div className="bg-white flex-1 rounded-6 p-6 pt-3">
            <h4 className="text-heading-ss-bold">
                {name}
            </h4>

            {
                params && params?.data?.length > 1 ? (
                    <ChartComponent
                        params={params}
                        param2={param2}
                        color2={color2}
                        elemtnId2={elementId}
                        color={color}
                        elementId={elementId}
                        average={average}
                        type={type}
                    />
                ) : (
                    <div className="flex flex-col gap-2 justify-center items-center w-full h-full">
                        <TRIcon iconName={type} edgeLength={180} />

                        <p className="text-text-s">
                            Чтобы увидеть аналитику, начните пользоваться трекером
                        </p>
                    </div>
                )
            }
        </div>
    )
}

export default React.memo(GraphFieldOffice, (prevProps, nextProps) => {
    if (
        nextProps !== null &&
        JSON.stringify(prevProps.params) !== JSON.stringify(nextProps.params)
    ) {
        return false
    }

    return true;
});

