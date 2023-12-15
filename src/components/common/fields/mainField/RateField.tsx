'use client'

import { useSelector } from "react-redux";
import RateCard from "../../cards/mainPageCards/RateCard";
import ModalUser from "../../modal/ModalUser";
import { useState } from 'react';
import { TUserCommonData } from "@/models/userData";

export type TRateData = {
    rateData: []
}

type TModalDataUser = {
    name: string;
    position: string;
    open: boolean;
}

export default function RateField({ rateData }: TRateData) {
    // @ts-ignore
    const { selectedUserData }: { selectedUserData: TUserCommonData } = useSelector(state => state.mainPage);

    const [modalDataUser, setModalDataUser] = useState<TModalDataUser>({
        name: '',
        position: '',
        open: false,
    });

    return (
        <div className="w-[calc(100%-670px)] max-w-[33%] lg:max-w-full lg:w-full h-[300px] bg-white rounded-6 p-6 overflow-hidden">
            <h3 className="text-heading-s s_lg:text-heading-ss-bold pb-4">
                Топ лидеров
            </h3>

            <div className="flex flex-wrap rounded-t-5 w-full h-full pb-12 s_lg:pb-5 justify-between overflow-y-scroll gap-4 scroll-hidden xx_lg:justify-center">
                {
                    rateData.map((e, index) => (
                        <RateCard
                            setModalData={(data: TModalDataUser) => setModalDataUser(data)}
                            key={e}
                            name={e}
                            position={index + 1}
                        />
                    ))
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
