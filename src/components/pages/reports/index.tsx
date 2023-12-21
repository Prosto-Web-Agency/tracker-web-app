'use client';

import BasePrimaryCard from "@/components/common/cards/BasePrimaryCard";
import React from "react";
import SearchUsers from "@/components/common/fields/mainField/SearchUsers";

export default function ReportsPage(){
    return(
        <section className='w-full bg-bg-gray h-full p-10 rounded-t-9 flex gap-6 s_lg:rounded-t-[0px] s_lg:flex-col'>
            <div className='flex flex-col gap-6 w-full flex-[33%] max-w-[380px] min-w-[290px] s_lg:max-w-full'>
                <SearchUsers/>
                <BasePrimaryCard>
                    users
                </BasePrimaryCard>
            </div>
            <div className='flex-[67%]'>
                <BasePrimaryCard>
                    <h3 className="text-heading-ss-bold pb-2">
                        Отчеты
                    </h3>
                </BasePrimaryCard>
            </div>
        </section>
    );
}
