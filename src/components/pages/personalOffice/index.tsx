import AchieveFieldOffice from "@/components/common/fields/officeField/AchieveFieldOffice";
import DiagrammsPhoneField from "@/components/common/fields/officeField/DiagrammsPhoneField";
import DiagramsFieldOffice from "@/components/common/fields/officeField/DiagramsField";
import GraphFieldOffice from "@/components/common/fields/officeField/GrapgFieldOffice";
import MetrisFieldOffice from "@/components/common/fields/officeField/MetricsField";
import PersonField from "@/components/common/fields/officeField/PersonField";
import SeccessGraphPhoneOffice from "@/components/common/fields/officeField/SuccessGraphOfficePhone";
import Link from "next/link";

export default function PersonalOffice() {
    return (

        <section className="min-h-[screen] mx-auto max-w-[1400px] w-full overflow-hidden">
            <div className="w-full ss_lg:flex ss_lg:flex-col gap-6 h-full bg-bg-gray grid grid-cols-3 sx_lg:grid-cols-2 rounded-t-9 s_lg: p-10 sx_lg:pb-6 max-w-[1400px] mx-auto s_lg:rounded-t-[0px] s_lg:pt-0 s_lg:p-6 ss_lg:p-4 ss_lg:gap-4">

                <div className="row-span-3 flex flex-col gap-6">
                    <div className="w-full">
                        <PersonField />
                        <Link href={"/personalOffice/profileSettings"} className="w-full hoveredMenu duration-300 hover:scale-[1.03] flex justify-center items-center rounded-4 mt-6 ss_lg:mt-4 min-w-[364px] py-5 bg-white text-heading-ss-bold ss_lg:py-3">
                            Редактировать
                        </Link>
                    </div>

                    <div className="ss_lg:hidden">
                        <AchieveFieldOffice />
                    </div>
                </div>

                <div className="hidden gap-4 ss_lg:grid grid-cols-2 w-full">
                    <div>
                        <AchieveFieldOffice />
                    </div>
                    <div className="flex flex-col gap-4">
                        <div>
                            <SeccessGraphPhoneOffice />
                        </div>
                        <div>
                            <MetrisFieldOffice />
                        </div>
                    </div>
                </div>

                <div className="row-span-3 flex flex-col gap-6 min-w-[384px] ss_lg:hidden">
                    <DiagramsFieldOffice />
                    <div className="sx_lg:hidden">
                        <MetrisFieldOffice />
                    </div>

                </div>


                <div className="sx_lg:hidden flex flex-col gap-6 row-span-3 min-w-[384px]">
                    <GraphFieldOffice name="Название графика" params={[]} />
                    <GraphFieldOffice name="Название графика" params={[]} />
                    <GraphFieldOffice name="Название графика" params={[]} />
                </div>

            </div>

            <div className="sx_lg:grid grid-cols-2 px-10 bg-bg-gray p-6 pt-0 hidden flex-col gap-6 row-span-3 min-w-[384px] ss_lg:hidden">
                <MetrisFieldOffice />
                <GraphFieldOffice name="Название графика" params={[]} />
                <GraphFieldOffice name="Название графика" params={[]} />
                <GraphFieldOffice name="Название графика" params={[]} />
            </div>

            <div className="hidden ss_lg:block bg-bg-gray w-full px-4 pb-6">
                <DiagrammsPhoneField />
            </div>
        </section>
    )
}