// Import Swiper styles
import 'swiper/css';
import AchievmentCard from "@/components/common/cards/mainPageCards/AchievmentCard";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import {Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function SwiperComponent<T>({ swiperCards, cardType }: { swiperCards: T[], cardType: 'achievement' }) {
    return (
        <>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                autoplay={true}
                spaceBetween={24}
                slidesPerView={1}
                loop={true}
                style={{
                    paddingLeft: '24px',
                    paddingRight: '24px',
                    height: '100%'
                }}
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