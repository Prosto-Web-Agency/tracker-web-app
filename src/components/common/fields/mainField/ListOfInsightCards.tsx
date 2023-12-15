'use client'

import InsightCard from "../../cards/mainPageCards/InsightCard";
import ModalInsight from "../../modal/ModalInsight";
import React, { useState } from "react";
import {TInsightCardArray} from "@/models/traker";
import TRIcon from "@/components/common/icon";

export type TInsightCard = {
    listOfUserInsights: TInsightCardArray | null;
}

export default function ListOfInsightCards({ listOfUserInsights }: TInsightCard) {
    const [modalDataInsight, setModalDataInsight] = useState({
        header: '',
        first_name: '',
        text: '',
        open: false,
    });

    return (
        <div className="bg-white w-[384px] h-full rounded-6 flex flex-col gap-4 pb-0 p-6 s_lg:w-full s_lg:h-[192px] s_lg:bg-transparent s_lg:p-0">
            <h3 className="text-heading-s s_lg:hidden pl-3">Ваши инсайты</h3>
            <div className="h-full pb-6 w-full rounded-t-6 overflow-y-scroll scroll-hidden flex flex-col gap-4 s_lg:rounded-t-[0px] s_lg:overflow-y-hidden s_lg:w-screen s_lg:ml-[-24px] s_lg:pl-6 s_lg:overflow-x-scroll s_lg:flex-row">
                {
                    listOfUserInsights ? (
                        <>
                            {
                                listOfUserInsights.map((insightData, index) => (
                                    <div
                                        key={insightData.first_name + index}
                                        onClick={() => setModalDataInsight(
                                            {
                                                ...insightData,
                                                header: 'Инсайт',
                                                open: true
                                            })}
                                    >
                                        <InsightCard header='Инсайт' {...insightData} />
                                    </div>
                                ))
                            }
                        </>
                    ) : (
                        <div className="flex justify-center items-center w-full h-full">
                            <TRIcon iconName="loader" edgeLength={48} className="animate-spin" />
                        </div>
                    )
                }
            </div>

            <ModalInsight
                header={modalDataInsight.header}
                first_name={modalDataInsight.first_name}
                text={modalDataInsight.text}
                open={modalDataInsight.open}
                setModalDataInsight={setModalDataInsight}
            />
        </div>
    )
}
