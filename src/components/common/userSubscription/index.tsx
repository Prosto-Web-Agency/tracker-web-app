'use client'

import React, {useEffect, useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import BaseSecondaryCard from "@/components/common/cards/BaseSecondaryCard";
import {getUserSubscriptionsData, getUserSubscriptionsReportsData} from "@/store/thunks/userThunk";
import type { TUserSubscriptionsArray } from "@/models/userData";
import SubscriptionCard from "@/components/common/userSubscription/subscriptionCard";

export type TListOfNewsData = { news_data: { title: string, post_text: string, photo_content?: { photo_url: string }[] }};

export default function UserSubscriptions() {
    const dispatch = useDispatch();
    // @ts-ignore
    const { userSubscriptions }: { userSubscriptions: TUserSubscriptionsArray } = useSelector(state => state.user)

    useEffect(() => {
        // @ts-ignore
        dispatch(getUserSubscriptionsData());
        // @ts-ignore
        dispatch(getUserSubscriptionsReportsData());
    }, [dispatch])

    return (
        <div className="bg-white rounded-6 relative h-full w-[calc(100%-384px)] p-6 pt-4 pb-6 overflow-hidden s_lg:w-full s_lg:h-[305px]">
            <h3 className="text-heading-ss-bold pb-2">
                Ваши подписки
            </h3>

            <div className="flex justify-center items-center w-full h-full">
                {
                    userSubscriptions ? (
                        <div className="flex flex-col overflow-y-auto overflow-x-visible w-full h-full">
                            {
                                userSubscriptions.map(({ tg_id_streamer, streamer_name, image_url, streamer_is_anon, streamer_login }, index) => (
                                    <SubscriptionCard
                                        key={streamer_name + index}
                                        tg_id_streamer={123132}
                                        streamer_name={streamer_name}
                                        image_url={image_url}
                                        streamer_is_anon={'false'}
                                        streamer_login={streamer_login}
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
