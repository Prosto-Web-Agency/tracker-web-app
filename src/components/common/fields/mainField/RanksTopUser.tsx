import SwiperComponent from "@/components/common/swiper";
import {useEffect, useState} from "react";
import classNames from "classnames";
import { RANKS_TOP_USER } from "@/consts/ranks";
import {useAppSelector} from "@/hooks/store";
import {TRankUpdateList} from "@/models/userData";
import {getRankUpdateList} from "@/store/thunks/trakerThunk";
import {useDispatch} from "react-redux";

export default function RanksTopUser() {
    const dispatch = useDispatch();
    const [hover, setHover] = useState(false);
    const rankUpdateList: TRankUpdateList['results'] | undefined = useAppSelector(state => state.mainPage?.rankUpdateList);

    useEffect(() => {
        //@ts-ignore
        dispatch(getRankUpdateList());
    }, []);

    useEffect(() => {
        console.log('rankUpdateList', rankUpdateList);
    }, [rankUpdateList]);

    return (
        <div
            onMouseOver={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="w-[33%] relative lg:w-full h-[300px] py-6 bg-white overflow-hidden bg-orange-class"
        >
            <h3 className="text-heading-ss-bold px-6 text-white">
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
                swiperCards={rankUpdateList?.map(update => ({
                    image: update.image_url,
                    name: update.first_name + ' ' + (update.surname ?? ''),
                    achieveName: update.rank_name,
                })) ?? []}
                cardType="achievement"
            />
        </div>
    )
}
