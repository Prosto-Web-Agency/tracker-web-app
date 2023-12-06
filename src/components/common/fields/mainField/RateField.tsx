'use client'

import RateCard from "../../cards/mainPageCards/RateCard";
import ModalUser from "../../modal/ModalUser";
import { useState } from 'react';

export type TRateData = {
    rateData: []
}

export default function RateField({ rateData }: TRateData) {
    const [modalDataUser, setModalDataUser] = useState({
        name: '',
        position: '',
        open: false,
    })

    return (
        <div className="w-[calc(100%-670px)] max-w-[610px] lg:max-w-full lg:w-full h-[300px] bg-white rounded-6 p-4 pt-3 overflow-hidden">
            <h3 className="text-heading-s s_lg:text-heading-ss-bold pb-2">
                Топ лидеров
            </h3>

            <div className="flex flex-wrap rounded-t-5 w-full h-full pb-12 s_lg:pb-5 justify-between overflow-y-scroll gap-4 scroll-hidden xx_lg:justify-center">


                {
                    rateData.map((e, index) => (
                        <button key={e + index} className="w-full max-w-[278px] xx_lg:max-w-full" onClick={() => (
                            setModalDataUser({
                                name: e,
                                position: (String(index + 1)),
                                open: true,
                            })
                        )}>
                            <RateCard name={e} position={String(index + 1)}/>
                        </button>
                    ))
                }
            </div>

            <ModalUser
                name={modalDataUser.name}
                position={modalDataUser.position}
                open={modalDataUser.open}
                setModalData={setModalDataUser}
            />
        </div>
    )
}