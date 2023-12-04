'use client'

import AchievmentField from "@/components/common/fields/mainField/AchievementField";
import ChatField from "@/components/common/fields/mainField/ChatField";
import InsaitField from "@/components/common/fields/mainField/InsiteField";
import NewsField from "@/components/common/fields/mainField/NewsField";
import RateField from "@/components/common/fields/mainField/RateField";
import Image from "next/image";
import { registrationApi } from '@/store/api/registration'
import { useEffect } from "react";

export default function MainPage() {

    useEffect(() => {
        registrationApi.getTokenRequest(1)
    }, []);

    return (
        <section className="min-h-screen w-full overflow-hidden">
            <div className="min-h-full w-full bg-bg-gray  rounded-t-9 s_lg: p-10 max-w-[1400px] mx-auto s_lg:rounded-t-[0px] s_lg:pt-0 s_lg:p-6">

                <div className="h-[552px] flex gap-6 s_lg:flex-col-reverse s_lg:h-auto">
                    <InsaitField />
                    <NewsField />
                </div>

                <div className="flex lg:flex-col gap-6 mt-6">
                    <RateField />
                    <AchievmentField />
                    <ChatField />
                </div>
            </div>
        </section>
    )
}