'use client';

import BasePrimaryCard from "@/components/common/cards/BasePrimaryCard";
import React, {useEffect} from "react";
import SearchUsers from "@/components/common/fields/mainField/SearchUsers";
import {getUserSubscriptionsReportsData} from "@/store/thunks/userThunk";
import {useAppDispatch, useAppSelector} from "@/hooks/store";
import {TUserSubscriptionsReportArray} from "@/models/userData";
import SubscriptionCard from "@/components/common/userSubscription/subscriptionCard";

export default function ReportsPage() {
    const dispatch = useAppDispatch();
    const {userSubscriptionsReports}: {
        userSubscriptionsReports: TUserSubscriptionsReportArray
    } = useAppSelector(state => state.user)


    useEffect(() => {
        // @ts-ignore
        dispatch(getUserSubscriptionsReportsData());
    }, [dispatch]);

    return (
        <section className='w-full bg-bg-gray h-full p-10 rounded-t-9 flex gap-6 s_lg:rounded-t-[0px] s_lg:flex-col'>
            <div className='flex flex-col gap-6 w-full flex-[33%] max-w-[380px] min-w-[290px] s_lg:max-w-full'>
                <SearchUsers/>
                <BasePrimaryCard>
                    users
                </BasePrimaryCard>
            </div>
            <div className='flex-[67%]'>
                <BasePrimaryCard>
                    <div className='p-7 h-full overflow-hidden'>
                        <h3 className="text-heading-ss-bold pb-2">
                            Отчеты
                        </h3>
                        {
                            userSubscriptionsReports.length &&
                            <div className="flex flex-col overflow-y-auto overflow-x-hidden w-full h-full">
                                {
                                    userSubscriptionsReports.map(({
                                                                      report_text,
                                                                      first_name,
                                                                      image_url,
                                                                      login,
                                                                      is_anon
                                                                  }, index) => (
                                        <SubscriptionCard
                                            key={first_name + index}
                                            report_text={report_text}
                                            first_name={first_name}
                                            image_url={image_url}
                                            is_anon={is_anon}
                                            login={login}
                                        />
                                    ))
                                }
                            </div>

                        }
                    </div>
                </BasePrimaryCard>
            </div>
        </section>
    );
}
