'use client'

import { useEffect, useState } from "react";
import NewsCard from "../../cards/mainPageCards/NewsCard";
import { storage } from "@/utils/localStorage";
import ChatCard, { TChatCard } from "../../cards/mainPageCards/ChatCard";
import { log } from "console";

const ws = new WebSocket(`ws://v2224385.hosted-by-vdsina.ru/ws/chat/?token=${storage.get('AccessToken')}`)

export default function ChatField() {
    const [messages, setMessages] = useState<[]>([])
    const [userMessage, setUserMessage] = useState<string>('')

    const sendMessage = () => {
        ws.send(JSON.stringify({ 'message': userMessage }))
    }

    const normDate = (d: string) => {
        let date = new Date(d);
        return (date.getHours() + ":" + date.getMinutes())
    }

    useEffect(() => {
        ws.addEventListener('message', (e) => {

            let newMessages = JSON.parse(e.data)
            console.log(newMessages);
            //@ts-ignore
            if (typeof(newMessages) === Object) {
                //@ts-ignore
                setMessages((prev) => ([...prev, {...newMessages}]))
                //@ts-ignore
            } else setMessages((prev) => ([...prev, ...newMessages]))
            
        })
    }, [])
    return (
        <div className="min-w-[282px] px-4 w-[390px] rounded-6 lg:w-full h-[300px] bg-white overflow-hidden">
            <h3 className="mt-3 ml-4 text-heading-s s_lg:text-heading-ss-bold">
                Чат
            </h3>

            <div className="overflow-y-scroll pb-12 s_lg:pb-8 flex flex-col gap-4 scroll-hidden h-[230px] w-full s_lg:gap-2">
                {
                    messages.map((e: any) => (
                        <ChatCard key={e.username + e.created_at} username={e.username} text={e.text} created_at={normDate(e.created_at)}/>
                    ))
                }
            </div>
            <div className="h-[50px] mt-1 w-full">
                <input onChange={(e) => setUserMessage(e.currentTarget.value)} value={userMessage} type="text" />
                <button onClick={sendMessage}>Отправить</button>
            </div>
        </div>
    )
}