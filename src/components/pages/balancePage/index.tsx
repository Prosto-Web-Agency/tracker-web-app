'use client'

import PrimaryButton from "@/components/common/buttons/primary";
import SliderBalance, { TSliderBalance } from "@/components/common/slider/SliderBalance";
import { updateUserWheelData } from "@/store/thunks/WheelThunk";
import { Slider, ThemeProvider } from "@mui/material";
import { createTheme } from '@mui/material/styles';
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

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


// export const theme = createTheme({
//     overrides: {
//         MuiCssBaseline: {
//             '@global': {
//                 body: {
//                     background: 'linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%)',
//                     backgroundRepeat: "no-repeat",
//                     backgroundAttachment: "fixed",
//                 },
//             },
//         },
//     },
//     palette: {
//         type: "dark",
//     },
// })



export default function BalancePage({ }: any) {
    const dispatch = useDispatch();
    const handleBalanceWheel = () => {
        //@ts-ignore
        dispatch(updateUserWheelData(wheelData))
    }
    //@ts-ignore
    const { slidersData } = useSelector(state => state.balanceWheel);

    const [wheelData, setWheelData] = useState<any>(slidersData);

    useEffect(() => {
        setWheelData(slidersData)
    }, [slidersData]);

    const BALANCE: any[] = [
        {
            name: "Саморазвитие",
            image: '/balance/education.svg',
            handleData: (e: number) => { setWheelData({ ...wheelData, self_development: e }) }
        },
        {
            name: "Отношения",
            image: '/balance/education.svg',
            handleData: (e: number) => { setWheelData({ ...wheelData, relationship: e }) }
        },
        {
            name: "Карьера",
            image: '/balance/education.svg',
            handleData: (e: number) => { setWheelData({ ...wheelData, career: e }) }
        },
        {
            name: "Отдых",
            image: '/balance/education.svg',
            handleData: (e: number) => { setWheelData({ ...wheelData, rest: e }) }
        },
        {
            name: "Окружение",
            image: '/balance/education.svg',
            handleData: (e: number) => { setWheelData({ ...wheelData, environment: e }) }
        },
        {
            name: "Доходы",
            image: '/balance/education.svg',
            handleData: (e: number) => { setWheelData({ ...wheelData, income: e }) }
        },
        {
            name: "Творчество",
            image: '/balance/education.svg',
            handleData: (e: number) => { setWheelData({ ...wheelData, creation: e }) }
        },
        {
            name: "Здоровье",
            image: '/balance/education.svg',
            handleData: (e: number) => { setWheelData({ ...wheelData, health: e }) }
        }
    ]
    return (

        <div className="w-full h-[calc(100%-80px)] bg-bg-gray flex flex-col gap-6 justify-center items-center">
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

                <div className="flex flex-col gap-5 p-4 pt-10">
                    <ThemeProvider theme={theme}>
                        {
                            BALANCE.map((e, index): any => (
                                <SliderBalance setData={e.handleData} name={e.name} image={e.image} key={e.name + index} />
                            ))
                        }
                    </ThemeProvider>
                </div>


            </div>

            <div className="w-[600px]" onClick={handleBalanceWheel}>
                <PrimaryButton
                    text="Далее"
                    className="text-16_700"
                    onClick={() => { }}
                />
            </div>

        </div>

    )
}