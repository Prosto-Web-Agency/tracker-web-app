'use client'

import NewsCard from "../../cards/mainPageCards/NewsCard";
import React, {useEffect} from "react";
import {getNews} from "@/store/thunks/trakerThunk";
import {useDispatch, useSelector} from "react-redux";
import TRIcon from "@/components/common/icon";
import classNames from "classnames";

export type TListOfNewsData = { news_data: { title: string, post_text: string, photo_content?: { photo_url: string }[] }};

export default function NewsField() {
    const dispatch = useDispatch();
    // @ts-ignore
    const { listOfNews }: { searchUsers: TListOfNewsData[] } = useSelector(state => state.mainPage)

    useEffect(() => {
        // @ts-ignore
        dispatch(getNews());
    }, [dispatch])

    return (
        <div className={classNames(
            "bg-white rounded-6 h-full w-[calc(100%-384px)] p-6 pt-4 pb-6 overflow-hidden",
            "md:w-full md:min-h-[300px] md:h-[300px]"
        )}>
            <h3 className={classNames(
                "text-heading-ss-bold pb-2",
                "md:"
            )}>
                Новости
            </h3>

            <div className={classNames(
                "overflow-y-scroll pb-12 s_lg:pb-8 flex flex-col gap-4 scroll-hidden h-full w-full s_lg:gap-2",
                "md:h-[350px]"
            )}>
                {
                    listOfNews ? (
                        <>
                            {
                                listOfNews.map(({ news_data }: TListOfNewsData) => (
                                    <NewsCard
                                        key={news_data.post_text}
                                        header={news_data.title}
                                        text={news_data.post_text}
                                        images={news_data.photo_content ?? []}
                                    />
                                ))
                            }
                        </>
                    ) : (
                        <div className="flex justify-center items-center w-full h-full">
                            <TRIcon iconName="loader" edgeLength={48} className="animate-spin" />
                        </div>
                    )
                }
            </div>
        </div>
    )
}
