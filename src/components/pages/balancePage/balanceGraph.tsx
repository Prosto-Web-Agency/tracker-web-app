'use client'

import { WebGraph } from "@/components/common/WEB/webGraph";
import { TSliderBalance } from "@/components/common/slider/SliderBalance";
import { setSetBalance } from "@/store/reducers/balanceWheelReducer";
import { createTheme } from '@mui/material/styles';
import Image from "next/image";
import { useDispatch } from "react-redux";

const theme = createTheme({
    palette: {
        primary: {
            main: "#E12131",
        },
        secondary: {
            main: '#FEA310',
        },
    },
});

const BALANCE: TSliderBalance[] = [
    {
        name: "Саморазвитие",
        image: '/balance/education.svg'
    },
    {
        name: "Отношения",
        image: '/balance/education.svg'
    },
    {
        name: "Карьера",
        image: '/balance/education.svg'
    },
    {
        name: "Отдых",
        image: '/balance/education.svg'
    },
    {
        name: "Окружение",
        image: '/balance/education.svg'
    },
    {
        name: "Доходы",
        image: '/balance/education.svg'
    },
    {
        name: "Творчество",
        image: '/balance/education.svg'
    },
    {
        name: "Здоровье",
        image: '/balance/education.svg'
    }
]

export default function BalanceWebPage({ balanceData }: any) {
    const dispatch = useDispatch();
    const handleOpenSliders = () => {
        dispatch(setSetBalance(false))
    }

    return (
        <div onClick={handleOpenSliders} className="w-dull h-[calc(100%-90px)] bg-bg-gray flex justify-center items-center">
            <div className="flex gap-10 h-[600px]">
                <div className="bg-white rounded-6 h-[600px] w-[600px] flex flex-col p-6">
                    <div>
                        <div className="flex flex-col items-center px-6">
                            <div className="flex items-center gap-2">
                                <Image className="md:h-[27px] md:w-[27px]" height={48} width={48} src={'/logo.svg'} alt='RECs' />
                                <h1 className="RECsText text-heading-m md:text-text-m-bold">
                                    Rec’s Traker
                                </h1>
                            </div>

                            <h1 className="RECsText text-20 md:text-[15px] -bold">
                                Чекап
                            </h1>
                        </div>
                    </div>

                    <div className="flex flex-col gap-5 p-6">
                        <WebGraph balanceData={balanceData} />
                    </div>

                </div>

                <div className="w-[350px] bg-white h-full rounded-6">
                </div>
            </div>

        </div>

    )
}
