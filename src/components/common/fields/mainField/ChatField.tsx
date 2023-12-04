'use client'

import { useEffect, useState } from "react";
import NewsCard from "../../cards/mainPageCards/NewsCard";

const ws = new WebSocket(`ws://v2224385.hosted-by-vdsina.ru/ws/chat/?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMSIsImV4cCI6MTcwMTY5MDcxOSwic3ViIjoiYWNjZXNzIn0.iM2-HJ5mYdW2RsXYvHsioCFD3GYoAMYfs5lWMYZD88Q`)

export default function ChatField() {
    const [messages, setMessages] = useState<string>('')
    const [userMessage, setUserMessage] = useState<string>('')

    const sendMessage = () => {
        ws.send(JSON.stringify({'message': userMessage}))
    }

    useEffect(() => {
        ws.addEventListener('message', (e) => {
            console.log(e)
            setMessages(e.data.message)
        })
    }, [])
    return (
        <div className="min-w-[282px] px-4 w-[390px] rounded-6 lg:w-full h-[300px] bg-white overflow-hidden">
            <h3 className="mt-3 ml-4 text-heading-s s_lg:text-heading-ss-bold">
                Чат
            </h3>

            <div className="overflow-y-scroll pb-12 s_lg:pb-8 flex flex-col gap-4 scroll-hidden h-[230px] w-full s_lg:gap-2">
                <NewsCard header="Название новости" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, dolores." />
                <NewsCard header="Название новости" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, dolores." />
                <NewsCard header="Название новости" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, dolores." />
            </div>
            <div className="h-[50px] mt-1 w-full">
                <input onChange={(e) => setUserMessage(e.currentTarget.value)} value={userMessage} type="text" />
                <button onClick={sendMessage}>Отправить</button>
            </div>
        </div>
    )
}