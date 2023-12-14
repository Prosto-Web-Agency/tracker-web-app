'use client'

import { DoughnutChart } from "../../diagrams/DoughnutChart";
import { CHART_COLORS } from "@/consts/chart";
import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFirstMetricsData } from "@/store/thunks/officeThunk";
import TRIcon from "@/components/common/icon";

export default function DiagramsFieldOffice() {
    const dispatch = useDispatch();
    //@ts-ignore
    const { firstMetrics } = useSelector(state => state.officePage)

    useEffect(() => {
        //@ts-ignore
        dispatch(getFirstMetricsData());
    }, [dispatch]);

    return (
        <div className="bg-white rounded-6 h-[527px] big_screen_h:h-[680px] sx_lg:h-[740px] p-6 pt-3">
            <h4 className="text-heading-ss-bold">
                Диаграммы отчёта
            </h4>

            <div className="w-full h-full grid grid-cols-2 gap-3 pt-3">
                {
                    firstMetrics.data.length ? (
                        <DoughnutChart
                            name={'Занятость по проектам'}
                            percents={'50%'}
                            id={'80%'}
                            labels={firstMetrics.label}
                            data={firstMetrics.data}
                        />
                    ) : (
                        <div className="flex justify-center items-center w-full h-full">
                            <TRIcon iconName="loader" edgeLength={48} className="animate-spin" />
                        </div>
                    )
                }
            </div>
        </div>
    )
}
