'use client'

import PrimaryButton from "@/components/common/buttons/primary";
import SliderBalance from "@/components/common/slider/SliderBalance";
import { updateUserWheelData } from "@/store/thunks/WheelThunk";
import { ThemeProvider } from "@mui/material";
import { createTheme } from '@mui/material/styles';
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useRouter} from "next/navigation";
import classNames from "classnames";
import {useAppSelector} from "@/hooks/store";
import {TReportCheckup} from "@/store/reducers/balanceWheelReducer";

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

const INIT_SLIDES_STATE = {
    self_development: 0,
    relationship: 0,
    career: 0,
    rest: 0,
    environment: 0,
    income: 0,
    creation: 0,
    health: 0
}

function CheckoutPage() {
    const dispatch = useDispatch();
    const router = useRouter();

    const handleBalanceWheel = () => {
        //@ts-ignore
        dispatch(updateUserWheelData(wheelData))
            .then(() => {
                router.push('/balance');
            })
    }

    const { slidersData } = useAppSelector(state => state.balanceWheel);
    const [wheelData, setWheelData] = useState<TReportCheckup>(slidersData ?? INIT_SLIDES_STATE);

    useEffect(() => {
        setWheelData(slidersData ?? INIT_SLIDES_STATE)
    }, [slidersData]);

    const BALANCE: {
        name: string,
        image: string,
        handleData: (value: number) => void,
        value: keyof TReportCheckup
    }[] = [
        {
            name: "Саморазвитие",
            image: '/balance/education.svg',
            handleData: (value: number) => { setWheelData({ ...wheelData, self_development: value }) },
            value: "self_development"
        },
        {
            name: "Отношения",
            image: '/balance/education.svg',
            handleData: (value: number) => { setWheelData({ ...wheelData, relationship: value }) },
            value: "relationship"
        },
        {
            name: "Карьера",
            image: '/balance/education.svg',
            handleData: (value: number) => { setWheelData({ ...wheelData, career: value }) },
            value: "career"
        },
        {
            name: "Отдых",
            image: '/balance/education.svg',
            handleData: (value: number) => { setWheelData({ ...wheelData, rest: value }) },
            value: "rest"
        },
        {
            name: "Окружение",
            image: '/balance/education.svg',
            handleData: (value: number) => { setWheelData({ ...wheelData, environment: value }) },
            value: "environment"
        },
        {
            name: "Доходы",
            image: '/balance/education.svg',
            handleData: (value: number) => { setWheelData({ ...wheelData, income: value }) },
            value: "income"
        },
        {
            name: "Творчество",
            image: '/balance/education.svg',
            handleData: (value: number) => { setWheelData({ ...wheelData, creation: value }) },
            value: "creation"
        },
        {
            name: "Здоровье",
            image: '/balance/education.svg',
            handleData: (value: number) => { setWheelData({ ...wheelData, health: value }) },
            value: "health"
        }
    ]

    return (

        <div className={classNames(
            "w-full h-[calc(100%-80px)] bg-bg-gray flex flex-col gap-6 justify-center items-center",
            "lg:h-auto lg:px-4 lg:pb-[100px]"
        )}>
            <div className={classNames(
                "bg-white rounded-6 max-h-[700px] w-[600px] flex flex-col p-6",
                "lg:w-full lg:max-h-none lg:px-2"
            )}>
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

                <div className="flex flex-col gap-5 p-4 pt-10">
                    <ThemeProvider theme={theme}>
                        {
                            BALANCE.map(({
                                value,
                                name,
                                handleData,
                                image
                            }, index) => (
                                <SliderBalance
                                    value={wheelData[value]}
                                    setData={handleData}
                                    name={name}
                                    image={image}
                                    key={name + index}
                                />
                            ))
                        }
                    </ThemeProvider>
                </div>


            </div>

            <div className="w-[600px] lg:w-full" onClick={handleBalanceWheel}>
                <PrimaryButton
                    text="Далее"
                    className="text-16_700"
                    onClick={() => { }}
                />
            </div>

        </div>

    )
}

export default React.memo(CheckoutPage);
