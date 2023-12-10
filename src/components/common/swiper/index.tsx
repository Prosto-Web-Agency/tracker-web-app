// Import Swiper styles
import 'swiper/css';
import AchievmentCard from "@/components/common/cards/mainPageCards/AchievmentCard";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function SwiperComponent<T>({ swiperCards, cardType }: { swiperCards: T[], cardType: 'achievement' }) {
    const swiper = useSwiper();

    return (
        <>
            <button
                className="z-[900] bg-white rounded-5 top-[calc(50%-20px)] right-[2%] absolute w-[40px] h-[40px]"
                onClick={() => swiper.slideNext()}
            />

            <button
                className="z-[900] bg-white rounded-5 top-[calc(50%-20px)] left-[2%] absolute w-[40px] h-[40px]"
                onClick={() => swiper.slidePrev()}
            />

            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
            >
                {
                    swiperCards.map((card, index) => (
                        <SwiperSlide
                            style={{
                                width: '280px',
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                            key={index}
                        >
                            {
                                cardType === 'achievement' ?
                                    (
                                        // @ts-ignore
                                        <AchievmentCard {...card} />
                                    ) : (
                                        <>Slide 1</>
                                    )
                            }
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    );
};