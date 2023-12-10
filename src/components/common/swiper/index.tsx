// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import AchievmentCard from "@/components/common/cards/mainPageCards/AchievmentCard";

export default function SwiperComponent<T>({ swiperCards, cardType }: { swiperCards: T[], cardType: 'achievement' }) {
    return (
        <Swiper
            spaceBetween={20}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
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
    );
};