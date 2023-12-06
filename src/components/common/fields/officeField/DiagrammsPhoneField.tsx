'use client'

import { DoughnutChart } from "../../diagrams/DoughnutChart";
import { TColors } from "./DiagramsField"

const COLORS: TColors[] = [
    {
        color1: 'rgba(229, 44, 49, 1)',
        color2: 'rgba(255, 201, 202, 0.38)'
    },
    {
        color1: 'rgba(243, 108, 33, 1)',
        color2: 'rgba(243, 108, 33, 0.18)'
    },
    {
        color1: 'rgba(249, 209, 0, 1)',
        color2: 'rgba(249, 209, 0, 0.18)'
    },
]

export default function DiagrammsPhoneField() {
    return (
        <div className="w-full h-[185px] p-4 bg-white rounded-6">
            <h5 className="ss_lg:text-text-sm-bold">
                Диаграммы отчёта
            </h5>
            <div className="w-full h-full grid grid-cols-3 pt-6 gap-6">
                {
                    COLORS.map((e) => (
                        <DoughnutChart name={'Продуктивность'}
                            plugins={{
                                id: '80%',
                                //@ts-ignore
                                beforeDatasetDraw(chart, args, pluginOptions) {
                                    const { ctx, data } = chart;

                                    ctx.save();
                                    ctx.font = 'bolder 10px sans-serif';
                                    ctx.fillStyle = 'black';
                                    ctx.textAlign = 'center';
                                    ctx.textBaseline = 'middle';
                                    ctx.fillText('text', chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y)
                                }
                            }}
                            data={
                                {
                                    datasets: [
                                        {
                                            label: '%',
                                            data: [88, 12],
                                            backgroundColor: [
                                                e.color1,
                                                e.color2,
                                            ],
                                            borderColor: [
                                                e.color1,
                                                e.color2,
                                            ],
                                            borderWidth: 1,
                                            cutout: "80%"
                                        },
                                    ],
                                }
                            } />
                    ))
                }
            </div>
        </div>
    )
}