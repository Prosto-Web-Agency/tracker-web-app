'use client'

import { useSelector } from "react-redux";
import RateCard from "../../cards/mainPageCards/RateCard";
import ModalUser from "../../modal/ModalUser";
import React, { useState } from 'react';
import {TUserCommonData, TUserSmallDataArray} from "@/models/userData";
import TRIcon from "@/components/common/icon";

export type TRateData = {
    rateData: TUserSmallDataArray | null
}

export type TModalDataUser = {
    first_name: string;
    position: string;
    open: boolean;
    profile_image?: string;
}

export default function RateField({ rateData }: TRateData) {
    // @ts-ignore
    const { selectedUserData }: { selectedUserData: TUserCommonData } = useSelector(state => state.mainPage);

    const [modalDataUser, setModalDataUser] = useState<TModalDataUser>({
        first_name: '',
        position: '',
        open: false,
    });

    console.log(rateData);

    return (
        <div className="w-[calc(100%-670px)] max-w-[33%] lg:max-w-full lg:w-full h-[300px] bg-white rounded-6 p-6 overflow-hidden">
            <h3 className="text-heading-s s_lg:text-heading-ss-bold pb-4">
                Список лидеров
            </h3>

            <div className="flex flex-wrap rounded-t-5 w-full h-full pb-12 s_lg:pb-5 justify-between overflow-y-scroll gap-4 scroll-hidden xx_lg:justify-center">
                {
                    rateData ? (
                        <>
                            {
                                rateData.map((userSmallData, index) => (
                                    <RateCard
                                        setModalData={(data: TModalDataUser) => setModalDataUser(data)}
                                        key={userSmallData.first_name + index}
                                        position={index + 1}
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

            {/*
                achievement_name: "Написать 1 отчёт"
                first_name: "lunivilen"
                hash_tag_header: "#RECsIT"
                instagram: "@lunivilen"
                rank_color: "#808080"
                rank_name: "Новый пользователь"
                surname: "test"
                tg_username: "lunivilen"
            */}

            {
                selectedUserData ? (
                    <ModalUser
                        userAchievements={[]}
                        name={selectedUserData.first_name + ' ' + selectedUserData.surname}
                        tg_username={selectedUserData.tg_username}
                        instagram={selectedUserData.instagram}
                        userStatus={'AG-Ментор'}
                        position={modalDataUser.position}
                        open={modalDataUser.open}
                        setModalData={setModalDataUser}
                    />
                ) : null
            }
        </div>
    )
}
