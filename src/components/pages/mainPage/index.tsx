import InsaitField from "@/components/common/fields/InsiteField";
import NewsField from "@/components/common/fields/NewsField";
import RateField from "@/components/common/fields/RateField";
import Image from "next/image";

export default function MainPage() {
    return (
        <section className="min-h-screen w-full overflow-hidden">
            <div className="min-h-full w-full bg-bg-gray  rounded-t-9 s_lg: p-10 max-w-[1400px] mx-auto s_lg:rounded-t-[0px] s_lg:pt-0 s_lg:p-6">

                <div className="h-[552px] flex gap-6 s_lg:flex-col-reverse s_lg:h-auto">
                    <InsaitField />
                    <NewsField />
                </div>

                <div className="flex gap-6 mt-6">
                    <RateField />
                    
                    <div className="w-full bg-white">
                        sadf
                    </div>
                </div>
            </div>
        </section>
    )
}