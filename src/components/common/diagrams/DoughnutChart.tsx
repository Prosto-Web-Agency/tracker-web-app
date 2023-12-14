'use client'

import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import {CHART_COLORS} from "@/consts/chart";

ChartJS.register(ArcElement, Tooltip, Legend);

//@ts-ignore
export function DoughnutChart({ labels, data, name, percents: percents, id }) {

    return (
        <div className='h-[175px] ss_lg:h-[100px] flex justify-center flex-col items-center'>
            <div className='flex justify-center h-full w-[144px]'>
                <Doughnut data={
                    {
                        labels,
                        datasets: [
                            {
                                data,
                                backgroundColor: [CHART_COLORS[0].color1, CHART_COLORS[0].color2],
                                borderColor: [CHART_COLORS[0].color1, CHART_COLORS[0].color2],
                                borderWidth: 1,
                                // @ts-ignore
                                cutout: "70%"
                            },
                        ],
                    }
                } plugins={[
                    {
                        id,
                        //@ts-ignore
                        beforeDatasetDraw(chart) {
                            const { ctx } = chart;

                            ctx.save();
                            ctx.font = 'bolder 15px sans-serif';
                            ctx.fillStyle = 'black';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'middle';

                            ctx.fillText(
                                percents,
                                chart.getDatasetMeta(0).data[0].x,
                                chart.getDatasetMeta(0).data[0].y
                            )
                        }
                    }
                ]} />
            </div>

            <h4 className='flex w-full max-w-[55%] text-center justify-center pt-2 ss_lg:text-11_400'>
                {name}
            </h4>
        </div>
    )

}
