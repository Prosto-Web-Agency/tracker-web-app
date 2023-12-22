'use client'

import { DoughnutChart } from "../../diagrams/DoughnutChart";
import React from "react";
import TRIcon from "@/components/common/icon";
import {TDiagram, TUserDiagrams} from "@/models/charts";
import {CHART_COLORS} from "@/consts/chart";

export default function DiagramsFieldOffice({ diagrams }: { diagrams: TUserDiagrams }) {

    return (
        <div className="bg-white rounded-6 big_screen_h:h-[680px] sx_lg:h-[740px] p-6 pt-3 ss_lg:h-auto">
            <h4 className="text-heading-ss-bold">
                Диаграммы отчёта
            </h4>

            <div className="w-full h-full justify-center items-center flex flex-wrap gap-5 ss_lg:flex-col ss_lg:gap-[100px] ss_lg:py-15">
                {
                    diagrams ?
                        diagrams.lifeBalance?.data?.length ? (
                        <>
                            {
                                Object.values(diagrams)
                                    .map((diagram: TDiagram, index) => (
                                    <DoughnutChart
                                        key={index + 'diagrams'}
                                        colors={CHART_COLORS}
                                        name={'Занятость по проектам'}
                                        id={'80%'}
                                        labels={diagram.data}
                                        data={diagram.dots}
                                    />
                                ))
                            }
                        </>
                    ) : (
                        <div>
                            графика сейчас нет (
                        </div>
                    ) : (
                        <div className="flex justify-center items-center w-full h-full">
                            <TRIcon iconName="loader" edgeLength={48} className="animate-spin" />
                        </div>
                    )
                }

                {/*{*/}
                {/*    MOCKS_CHARTS.map(({ data, labels, name }, index) => (*/}
                {/*        <DoughnutChart*/}
                {/*            colors={[CHART_COLORS[index+1].color1, CHART_COLORS[index+1].color2]}*/}
                {/*            key={name}*/}
                {/*            name={name}*/}
                {/*            percents={'50%'}*/}
                {/*            id={'80%'}*/}
                {/*            labels={labels}*/}
                {/*            data={data}*/}
                {/*        />*/}
                {/*    ))*/}
                {/*}*/}
            </div>

        </div>
    )
}
