import RankComponent from "../../cards/RankComponent";
import RateCard from "../../cards/mainPageCards/RateCard";

export default function AchieveFieldOffice() {
    return (
        <div className="p-6 h-[400px] bg-orange-class big_screen_h:h-[calc(60vh-139px)] ss_lg:h-[304px] rounded-4 bg-white overflow-hidden ss_lg:w-full pt-3 ss_lg:p-2">
            <h3 className="text-heading-s text-white mt-3 ml-4 s_lg:text-heading-ss-bold pb-2">
                Ранги
            </h3>
            <div className="flex flex-col pt-8 rounded-t-5 w-full h-full pb-12 s_lg:pb-5 overflow-y-scroll gap-4 scroll-hidden justify-start">
                <RankComponent rank="expert" />
            </div>
        </div>
    )
}