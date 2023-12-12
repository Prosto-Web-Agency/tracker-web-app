import SwiperComponent from "@/components/common/swiper";
import {useEffect, useState} from "react";
import classNames from "classnames";

export default function AchievmentField() {
    const [hover, setHover] = useState(false);

    useEffect(() => {
        console.log('h')
    }, [hover])

    return (
        <div
            onMouseOver={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="w-[33%] relative lg:w-full h-[300px] py-6 bg-white overflow-hidden bg-orange-class"
        >
            <h3 className="text-heading-s px-6 text-white s_lg:text-heading-ss-bold">
                Ранги
            </h3>

            <button
                id="next-button"
                className={classNames("z-[900] transition bg-white rounded-5 top-[calc(50%-20px)] right-[2%] absolute w-[40px] h-[40px]", {
                    ['opacity-1']: hover,
                    ['opacity-0']: !hover
                })}
            />

            <button
                id="prev-button"
                className={classNames("z-[900] transition bg-white rounded-5 top-[calc(50%-20px)] left-[2%] absolute w-[40px] h-[40px]", {
                    ['opacity-1']: hover,
                    ['opacity-0']: !hover
                })}
            />

            <SwiperComponent
                swiperCards={[
                    {
                        image: "f",
                        name: "Анвар Кайратович",
                        achieveName: "Новый ранг"
                    },
                    {
                        image: "f",
                        name: "Анвар Кайратович",
                        achieveName: "Новый ранг"
                    },
                    {
                        image: "f",
                        name: "Анвар Кайратович",
                        achieveName: "Новый ранг"
                    },
                    {
                        image: "f",
                        name: "Анвар Кайратович",
                        achieveName: "Новый ранг"
                    },
                ]}
                cardType="achievement"
            />
        </div>
    )
}