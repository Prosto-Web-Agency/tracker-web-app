'use client'

import React, {useEffect, useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import BaseSecondaryCard from "@/components/common/cards/BaseSecondaryCard";
import {getUserSubscriptionsData, getUserSubscriptionsReportsData} from "@/store/thunks/userThunk";
import type { TUserSubscriptionsArray } from "@/models/userData";
import SubscriptionCard from "@/components/common/userSubscription/subscriptionCard";
import {TUserSubscriptionsReportArray} from "@/models/userData";

export type TListOfNewsData = { news_data: { title: string, post_text: string, photo_content?: { photo_url: string }[] }};

export default function UserSubscriptions() {
    const dispatch = useDispatch();
    // @ts-ignore
    const { userSubscriptionsReports }: { userSubscriptionsReports: TUserSubscriptionsReportArray } = useSelector(state => state.user)

    useEffect(() => {
        // @ts-ignore
        dispatch(getUserSubscriptionsData());
        // @ts-ignore
        dispatch(getUserSubscriptionsReportsData());
    }, [dispatch]);

    return (
        <div className="bg-white rounded-6 relative min-h-[500px] h-full w-[calc(100%-384px)] p-6 pt-4 pb-6 overflow-hidden s_lg:w-full s_lg:h-[305px]">
            <h3 className="text-heading-ss-bold pb-2">
                Ваши подписки
            </h3>

            <div className="flex justify-center items-center w-full h-full">
                {
                    userSubscriptionsReports.length ? (
                        <div className="flex flex-col overflow-y-auto overflow-x-visible w-full h-full">
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
                    ) : (
                        <div className="flex w-[400px]">
                            <BaseSecondaryCard>
                                <p className="text-white text-text-m-bold px-3 py-6 text-center">
                                    Здесь будут действия людей, <br/>
                                    на которых вы подписаны
                                </p>
                            </BaseSecondaryCard>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
