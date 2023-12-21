'use client';

import BasePrimaryCard from "@/components/common/cards/BasePrimaryCard";
import React, {useEffect} from "react";
import SearchUsers from "@/components/common/fields/mainField/SearchUsers";
import {getUserSubscriptionsData, getUserSubscriptionsReportsData} from "@/store/thunks/userThunk";
import {useAppDispatch, useAppSelector} from "@/hooks/store";
import {TUserSubscriptionsArray, TUserSubscriptionsReportArray} from "@/models/userData";
import SubscriptionCard from "@/components/common/userSubscription/subscriptionCard";
import Image from "next/image";

export default function ReportsPage() {
    const dispatch = useAppDispatch();
    const {
        userSubscriptionsReports,
        userSubscriptions
    } : {
        userSubscriptionsReports: TUserSubscriptionsReportArray,
        userSubscriptions: TUserSubscriptionsArray,
    } = useAppSelector(state => state.user)

    useEffect(() => {
        // @ts-ignore
        dispatch(getUserSubscriptionsReportsData());
        // @ts-ignore
        dispatch(getUserSubscriptionsData());
    }, [dispatch]);

    return (
        <section className='w-full max-w-[1400px] mx-auto bg-bg-gray h-[calc(100%-90px)] p-10 rounded-t-9 flex gap-6 s_lg:rounded-t-[0px] s_lg:flex-col'>
            <div className='flex flex-col gap-6 w-full flex-[33%] max-w-[380px] min-w-[290px] s_lg:max-w-full'>
                <SearchUsers/>
                <BasePrimaryCard>
                    {
                        userSubscriptions.length ? (
                            <>
                                {
                                    userSubscriptions.map((user, index) =>
                                        <div
                                            className={"flex flex-col justify-between items-start gap-1 w-full cursor-pointer hover:bg-bg-gray transition rounded-4 p-2"}
                                            key={user.streamer_name + index}
                                        >
                                            <div className="flex gap-3 items-center">
                                                {
                                                    user.image_url ? (
                                                        <Image
                                                            className="w-9 h-9 object-cover rounded-5 hover:scale-105 active:scale-[1.1] scale-1 duration-300"
                                                            width={30}
                                                            height={30}
                                                            src={user.image_url}
                                                            alt="image_url"
                                                        />
                                                    ) : (
                                                        <div className="w-8 h-8 rounded-4 bg-bg-gray" />
                                                    )
                                                }

                                                <p className={"text-13_600"}>
                                                    {user.streamer_name}
                                                </p>
                                            </div>
                                        </div>
                                    )
                                }
                            </>
                        ) : null
                    }
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
