'use client'

import Script from "next/script";
import NewsCard from "../../cards/mainPageCards/NewsCard";
// import TelegramWidget from "../../TgWidget";
import Head from "next/head";
import {useEffect} from "react";
import {getNews} from "@/store/thunks/trakerThunk";
import {useDispatch, useSelector} from "react-redux";

type TListOfNewsData = { news_data: { title: string, post_text: string }};

export default function NewsField() {
    const dispatch = useDispatch();
    // @ts-ignore
    const { listOfNews }: { searchUsers: TListOfNewsData[] } = useSelector(state => state.mainPage)

    useEffect(() => {
        // @ts-ignore
        dispatch(getNews());
    }, [])

    useEffect(() => {
        console.log(listOfNews)
    }, [listOfNews])

    return (
        <div className="bg-white rounded-6 h-full w-[calc(100%-384px)] p-6 pt-4 pb-0 overflow-hidden s_lg:w-full s_lg:h-[305px]">
            <h3 className="text-rem-heading-xm s_lg:text-heading-ss-bold pb-2">
                Новости
            </h3>

            <div className="overflow-y-scroll pb-12 s_lg:pb-8 flex flex-col gap-4 scroll-hidden h-full w-full s_lg:gap-2">
                {
                    listOfNews && listOfNews.map(({ news_data }: TListOfNewsData) => (
                        <NewsCard key={news_data.post_text} header={news_data.title} text={news_data.post_text} />
                    ))
                }
            </div>
        </div>
    )
}
