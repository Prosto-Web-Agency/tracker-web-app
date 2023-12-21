'use client'

import { DoughnutChart } from "../../diagrams/DoughnutChart";
import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFirstMetricsData } from "@/store/thunks/officeThunk";
import TRIcon from "@/components/common/icon";
import { CHART_COLORS, MOCKS_CHARTS } from "@/consts/chart";
import {TChart} from "@/store/reducers/OfficeReducer";

export default function DiagramsFieldOffice() {
    const dispatch = useDispatch();
    //@ts-ignore
    const { firstMetrics }: { firstMetrics: TChart | null } = useSelector(state => state.officePage)

    useEffect(() => {
        //@ts-ignore
        dispatch(getFirstMetricsData());
    }, [dispatch]);

    return (
        <div className="bg-white rounded-6 big_screen_h:h-[680px] sx_lg:h-[740px] p-6 pt-3">
            <h4 className="text-heading-ss-bold">
                Диаграммы отчёта
            </h4>

            <div className="w-full h-full grid grid-cols-2 gap-3 pt-3">
                {
                    firstMetrics ?
                        firstMetrics.data.length ? (
                        <DoughnutChart
                            colors={[CHART_COLORS[0].color1, CHART_COLORS[0].color2]}
                            name={'Занятость по проектам'}
                            percents={'50%'}
                            id={'80%'}
                            labels={firstMetrics.label}
                            data={firstMetrics.data}
                        />
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

                {
                    MOCKS_CHARTS.map(({ data, labels, name }, index) => (
                        <DoughnutChart
                            colors={[CHART_COLORS[index+1].color1, CHART_COLORS[index+1].color2]}
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
