'use client'

import { useSelector } from "react-redux";
import RateCard from "../../cards/mainPageCards/RateCard";
import ModalUser from "../../modal/ModalUser";
import React, {useEffect, useState} from 'react';
import {TUserCommonData, TUserSmallDataArray} from "@/models/userData";
import TRIcon from "@/components/common/icon";
import classNames from "classnames";

export type TRateData = {
    rateData: TUserSmallDataArray | null
}

export type TModalDataUser = {
    position: number;
    open: boolean;
    login: string;
}

export default function RateField({ rateData }: TRateData) {
    const [modalDataUser, setModalDataUser] = useState<TModalDataUser>({
        position: 0,
        open: false,
        login: ''
    });

    return (
        <div className={classNames(
            "w-[calc(100%-670px)] max-w-[33%] lg:max-w-full lg:w-full h-[300px] bg-white rounded-6 p-6 overflow-hidden",
            "md:min-h-[300px]"
        )}>
            <h3 className="text-heading-ss-bold pb-4">
                Список лидеров
            </h3>

            <div className="flex flex-wrap rounded-t-5 w-full h-full pb-12 s_lg:pb-5 justify-between overflow-y-scroll gap-4 scroll-hidden xx_lg:justify-center">
                {
                    rateData ? (
                        <>
                            {
                                rateData.map((userSmallData, position) => (
                                    <RateCard
                                        isTop={position < 3}
                                        setModalData={(login: string) => setModalDataUser({ open: true, position, login })}
                                        key={userSmallData.first_name + position}
                                        position={position + 1}
                                        {...userSmallData}
                                    />
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

            {
                modalDataUser.login ? (
                    <ModalUser
                        position={modalDataUser.position}
                        open={modalDataUser.open}
                        login={modalDataUser.login}
                        setModalData={setModalDataUser}
                    />
                ) : null
            }
        </div>
    )
}
