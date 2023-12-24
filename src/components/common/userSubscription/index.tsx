'use client'

import React, {useEffect, useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import BaseSecondaryCard from "@/components/common/cards/BaseSecondaryCard";
import {
    getUserSubscriptionsData,
    getUserSubscriptionsReportsData,
    getUserSubscriptionsTasksData
} from "@/store/thunks/userThunk";
import type { TUserSubscriptionsArray } from "@/models/userData";
import SubscriptionCard from "@/components/common/userSubscription/subscriptionCard";
import {TUserSubscriptionsReportArray, TUserSubscriptionsTaskArray} from "@/models/userData";
import classNames from "classnames";

export type TListOfNewsData = { news_data: { title: string, post_text: string, photo_content?: { photo_url: string }[] }};

function UserSubscriptions() {
    const dispatch = useDispatch();
    // @ts-ignore
    const { userSubscriptionsTasks } : { userSubscriptionsTasks: TUserSubscriptionsTaskArray; } = useSelector(state => state.user)

    useEffect(() => {
        // @ts-ignore
        dispatch(getUserSubscriptionsTasksData());
    }, [dispatch]);

    return (
        <div className={classNames(
            "bg-white rounded-6 relative min-h-[500px] h-full w-full p-6 pt-4 pb-6 overflow-hidden",
            "lg:min-h-[272px] lg:h-[272px] lg:w-full"
            )}>
            <h3 className="text-heading-ss-bold pb-2">
                Ваши подписки
            </h3>

            <div className="flex justify-center items-center w-full h-full">
                {
                    userSubscriptionsTasks.length ? (
                        <div className="flex flex-col overflow-y-auto no-scrollbar overflow-x-visible w-full h-full">
                            {
                                userSubscriptionsTasks.map(({
                                    result_task_text,
                                    first_name,
                                    image_url,
                                    login,
                                    is_anon,
                                    rank
                                }, index) => (
                                    <SubscriptionCard
                                        key={first_name + index}
                                        report_text={result_task_text}
                                        rank={rank}
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

export default React.memo(UserSubscriptions);
