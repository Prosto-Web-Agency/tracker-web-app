import AchieveFieldOffice from "@/components/common/fields/officeField/AchieveFieldOffice";
import DiagramsFieldOffice from "@/components/common/fields/officeField/DiagramsField";
import GraphFieldOffice from "@/components/common/fields/officeField/GrapgFieldOffice";
import MetrisFieldOffice from "@/components/common/fields/officeField/MetricsField";
import PersonField from "@/components/common/fields/officeField/PersonField";
import ImagePicker from "@/components/pages/imagePicker";
import Link from "next/link";

export default function PersonalOffice() {
    return (

        <section className="min-h-[screen] max-w-[1400px] w-full overflow-hidden">
            <div className="w-full gap-6 h-full bg-bg-gray grid grid-cols-3 rounded-t-9 s_lg: p-10 max-w-[1400px] mx-auto s_lg:rounded-t-[0px] s_lg:pt-0 s_lg:p-6">

                <div className="row-span-3 flex flex-col gap-6">
                    <div className="w-full">
                        <PersonField />
                        <Link
                            href={"/personalOffice/profileSettings"}
                            className="w-full flex justify-center items-center rounded-4 mt-6 min-w-[364px] py-5 bg-white text-heading-ss-bold"
                        >
                            Редактировать
                        </Link>
                    </div>
                    <AchieveFieldOffice />
                </div>

                <div className="row-span-3 flex flex-col gap-6 min-w-[384px]">
                    <DiagramsFieldOffice />
                    <MetrisFieldOffice />
                </div>


                <div className= "flex flex-col gap-6 row-span-3 min-w-[384px]">
                    <GraphFieldOffice name="Назавние графика" params={[]} />
                    <GraphFieldOffice name="Назавние графика" params={[]} />
                    <GraphFieldOffice name="Назавние графика" params={[]} />
                </div>

            </div>
        </section>
    )
}