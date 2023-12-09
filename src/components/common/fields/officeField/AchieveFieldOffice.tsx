import AchieveOfficeCard from "../../cards/OfficeCards/AchieveOfficeCard";
import RateCard from "../../cards/mainPageCards/RateCard";

export default function AchieveFieldOffice() {
    return (
        <div className="p-6 h-[400px] ss_lg:h-[304px] rounded-4 bg-white overflow-hidden ss_lg:w-full pt-3 ss_lg:p-2">
            <h3 className="text-heading-s mt-3 ml-4 s_lg:text-heading-ss-bold pb-2">
                Ранги
            </h3>
            <div className="flex flex-col pt-10 rounded-t-5 w-full h-full pb-12 s_lg:pb-5 overflow-y-scroll gap-4 scroll-hidden justify-start">
                <AchieveOfficeCard image="null" name="Название ранга" />
            </div>
        </div>
    )
}