'use client'

import Script from "next/script";
import NewsCard from "../../cards/mainPageCards/NewsCard";
// import TelegramWidget from "../../TgWidget";
import Head from "next/head";
import MyDocument from "../../TgWidget";
import Headee from "../../TgWTwo";

export default function NewsField() {

    return (
        <div className="bg-white rounded-6 h-full w-[calc(100%-384px)] p-6 pt-4 pb-0 overflow-hidden s_lg:w-full s_lg:h-[305px]">
            <h3 className="text-rem-heading-xm s_lg:text-heading-ss-bold pb-2">
                Новости
            </h3>
            <div className="overflow-y-scroll pb-12 s_lg:pb-8 flex flex-col gap-4 scroll-hidden h-full w-full s_lg:gap-2">
                {/* <Head> */}
                {/* Дополнительные мета-теги, если необходимо */}
                {/* </Head>
                <TelegramWidget /> */}
                {/* <Script src="https://telegram.org/js/telegram-widget.js?22" /> */}
                {/* <Head>
                    <script async defer src="https://telegram.org/js/telegram-widget.js?22" type="text/javascript" data-telegram-post="durov/68" data-width="100%"></script>
                </Head> */}
                {/* <Headee /> */}
                {/* <MyDocument styles={'aaa'}  Type={'f'}/> */}
                {/* <Script async src="https://telegram.org/js/telegram-widget.js?22" data-telegram-post="durov/68" data-width="100%" /> */}
                {/* <script async src="https://telegram.org/js/telegram-widget.js?22" data-telegram-post="durov/68" data-width="100%"></script> */}
                <NewsCard header="Название новости" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, dolores." />
                <NewsCard header="Название новости" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, dolores." />
                <NewsCard header="Название новости" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, dolores." />
                <NewsCard header="Название новости" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, dolores." />
                <NewsCard header="Название новости" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, dolores." />
            </div>
        </div>
    )
}