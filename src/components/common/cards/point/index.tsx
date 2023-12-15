'use client'

import ModalInsight from "../../modal/ModalInsight";
import { useState } from "react";

export type TDataInsights = {
    dataInsaits: string[]
}

const NAMES = ['Анвар', 'Лев', 'Олег', 'Илья', 'Вадим', 'Камиль'];

export default function InsaitField({ dataInsaits }: TDataInsights) {
    const [modalDataInsight, setModalDataInsight] = useState({
        header: '',
        name: '',
        text: '',
        open: false,
    });

    return (
        <div className="bg-white w-[384px] h-full rounded-6 flex flex-col gap-4 pb-0 p-6 s_lg:w-full s_lg:h-[192px] s_lg:bg-transparent s_lg:p-0">
            <h3 className="text-heading-s s_lg:hidden pl-3">Ваши инсайты</h3>
            <div className="h-full pb-6 w-full rounded-t-6 overflow-y-scroll scroll-hidden flex flex-col gap-4 s_lg:rounded-t-[0px] s_lg:overflow-y-hidden s_lg:w-screen s_lg:ml-[-24px] s_lg:pl-6 s_lg:overflow-x-scroll s_lg:flex-row">
                {
                    dataInsaits.map((e: string, index) => (
                        <div key={e} onClick={() => setModalDataInsight(
                            {
                                header: 'Инсайт',
                                name: NAMES[index],
                                text: e,
                                open: true
                            }
                        )}>
                            {/*<InsightCard first_name={NAMES[index]} text={e}/>*/}
                        </div>
                    ))
                }
            </div>

            <ModalInsight
                first_name={modalDataInsight.name}
                text={modalDataInsight.text}
                open={modalDataInsight.open}
                setModalDataInsight={setModalDataInsight}
            />
        </div>
    )
}
