'use client'

import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

//@ts-ignore
export function DoughnutChart({ labels, data, name, percents: percents, id, colors }) {
    return (
        <div className='h-[175px] ss_lg:h-[100px] flex justify-center flex-col items-center'>
            <div className='flex justify-center h-[125px] w-[125px]'>
                <Doughnut
                    data={
                        {
                            labels,
                            datasets: [
                                {
                                    data,
                                    backgroundColor: colors,
                                    borderColor: colors,
                                    borderWidth: 1,
                                    // @ts-ignore
                                    cutout: "70%"
                                },
                            ],
                        }
                    }
                    options={{
                        plugins: {
                            legend: {
                                display: false
                            },
                            datalabels: {
                                display: false
                            }
                        }

                    }}
                    plugins={[
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
                    ]}
                />
            </div>

            <h4 className='flex w-full text-13_600 max-w-[55%] text-center justify-center pt-2 ss_lg:text-11_400'>
                {name}
            </h4>
        </div>
    )

}
