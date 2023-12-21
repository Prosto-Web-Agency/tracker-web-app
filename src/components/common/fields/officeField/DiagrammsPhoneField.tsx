'use client'

import { DoughnutChart } from "../../diagrams/DoughnutChart";
import { CHART_COLORS, MOCKS_CHARTS } from "@/consts/chart";
import React from "react";
import randomColor from "@/utils/randColor";

export default function DiagrammsPhoneField() {
    return (
        <div className="w-full h-[185px] p-4 bg-white rounded-6">
            <h5 className="ss_lg:text-text-sm-bold">
                Диаграммы отчёта
            </h5>
            <div className="w-full h-full grid grid-cols-3 pt-6 gap-6">
                {
                    [MOCKS_CHARTS[0], MOCKS_CHARTS[1], MOCKS_CHARTS[2]].map(({ data, labels, name }, index) => (
                        <DoughnutChart
                            colors={data.map(() => randomColor())}
                            key={name}
                            name={name}
                            percents={'50%'}
                            id={'80%'}
                            labels={labels}
                            data={data}
                        />
                    ))
                }
            </div>
        </div>
    )
}
