import AchieveFieldOffice from "@/components/common/fields/officeField/AchieveFieldOffice";
import DiagramsFieldOffice from "@/components/common/fields/officeField/DiagramsField";
import GraphFieldOffice from "@/components/common/fields/officeField/GrapgFieldOffice";
import MetrisFieldOffice from "@/components/common/fields/officeField/MetricsField";
import PersonField from "@/components/common/fields/officeField/PersonField";
import Link from "next/link";

export default function PersonalOffice() {
    return (

        <section className="min-h-[screen] mx-auto max-w-[1400px] w-full overflow-hidden">
            <div className="w-full gap-6 h-full bg-bg-gray grid grid-cols-3 sx_lg:grid-cols-2 rounded-t-9 s_lg: p-10 sx_lg:pb-6 max-w-[1400px] mx-auto s_lg:rounded-t-[0px] s_lg:pt-0 s_lg:p-6">

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
                    <div className="sx_lg:hidden">
                        <MetrisFieldOffice />
                    </div>

                </div>


                <div className="sx_lg:hidden flex flex-col gap-6 row-span-3 min-w-[384px]">
                    <GraphFieldOffice name="Назавние графика" params={[]} />
                    <GraphFieldOffice name="Назавние графика" params={[]} />
                    <GraphFieldOffice name="Назавние графика" params={[]} />
                </div>

            </div>

            <div className="sx_lg:grid grid-cols-2 px-10 bg-bg-gray p-6 pt-0 hidden flex-col gap-6 row-span-3 min-w-[384px]">
                <MetrisFieldOffice />
                <GraphFieldOffice name="Назавние графика" params={[]} />
                <GraphFieldOffice name="Назавние графика" params={[]} />
                <GraphFieldOffice name="Назавние графика" params={[]} />
            </div>
        </section>
    )
}