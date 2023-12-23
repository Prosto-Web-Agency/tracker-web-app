'use client'

import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import TRIcon from "@/components/common/icon";
import classNames from "classnames";

ChartJS.register(ArcElement, Tooltip, Legend);

//@ts-ignore
export function DoughnutChart({ labels, data, name, id, colors, iconName }) {
    return (
        <div className={classNames(
            'h-[175px] flex justify-center flex-col items-center',
                "lg:h-[110px]"
        )}>
            <div className={classNames(
                'flex justify-center h-[125px] w-[125px] relative',
                'lg:h-[90px] lg:w-[90px]'
            )}>
                <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
                    <TRIcon iconName={iconName} edgeLength={40} />
                </div>

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
                                    '',
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
