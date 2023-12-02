import InsaitCard from "@/components/common/cards/InsaitCard";
import InsaitField from "@/components/common/fields/InsiteField";
import NewsField from "@/components/common/fields/NewsField";
import Image from "next/image";

export default function MainPage() {
    return (
        <section className="min-h-screen h-screen w-full overflow-hidden">
            <div className="h-full w-full bg-bg-gray  rounded-t-9 s_lg: p-10 max-w-[1400px] mx-auto s_lg:rounded-t-[0px] s_lg:pt-0 s_lg:p-6">

                <div className="h-[552px] flex gap-6 s_lg:flex-col-reverse s_lg:h-auto">

                    <InsaitField />
                    <NewsField />
                    
                </div>

                <div className="">
                    <div>

                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </section>
    )
}