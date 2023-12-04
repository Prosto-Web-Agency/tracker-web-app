import AchieveOfficeCard from "../../cards/OfficeCards/AchieveOfficeCard";
import RateCard from "../../cards/mainPageCards/RateCard";

export default function AchieveFieldOffice() {
    return (
        <div className="p-6 h-[564px] bg-orange-class overflow-hidden">
            <h3 className="text-heading-s mt-3 ml-4 text-white s_lg:text-heading-ss-bold pb-2">
                Ачивки
            </h3>
            <div className="flex flex-col pt-10 rounded-t-5 w-full h-full pb-12 s_lg:pb-5 overflow-y-scroll gap-4 scroll-hidden justify-center">

                <AchieveOfficeCard image="null" name="Название ачивки" />
                <AchieveOfficeCard image="null" name="Название ачивки" />
                <AchieveOfficeCard image="null" name="Название ачивки" />
                <AchieveOfficeCard image="null" name="Название ачивки" />
                <AchieveOfficeCard image="null" name="Название ачивки" />
                <AchieveOfficeCard image="null" name="Название ачивки" />

            </div>
        </div>
    )
}