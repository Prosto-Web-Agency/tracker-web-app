'use client'

import InsightCard from "../../cards/mainPageCards/InsightCard";
import ModalInsight from "../../modal/ModalInsight";
import React, { useState } from "react";
import type { TInsightCardArray } from "@/models/traker";
import TRIcon from "@/components/common/icon";
import ModalUser from "@/components/common/modal/ModalUser";

export type TInsightCard = {
    listOfUserInsights: TInsightCardArray | null;
}

type TModalDataUser = {
    open: boolean;
    login: string;
}

export default function ListOfInsightCards({ listOfUserInsights }: TInsightCard) {
    const [modalDataInsight, setModalDataInsight] = useState({
        header: '',
        first_name: '',
        text: '',
        open: false,
    });

    const [modalDataUser, setModalDataUser] = useState<TModalDataUser>({
        open: false,
        login: ''
    });

    return (
        <div className="bg-white w-[384px] h-[calc(100%-88px)] rounded-6 flex flex-col gap-4 pb-0 p-6 s_lg:w-full s_lg:h-[192px] s_lg:bg-transparent s_lg:p-0">
            <h3 className="text-heading-ss-bold s_lg:hidden pl-3">
                Инсайты пользователей
            </h3>
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
                                        <InsightCard
                                            setModalData={(login: string) => setModalDataUser({ open: true, login })}
                                            {...insightData}
                                        />
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
                first_name={modalDataInsight.first_name}
                text={modalDataInsight.text}
                open={modalDataInsight.open}
                setModalDataInsight={setModalDataInsight}
            />

            {
                modalDataUser.login ? (
                    <ModalUser
                        position={0}
                        open={modalDataUser.open}
                        login={modalDataUser.login}
                        setModalData={setModalDataUser}
                    />
                ) : null
            }
        </div>
    )
}
