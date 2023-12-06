'use client'

import { useEffect, useState, useRef } from "react";
import NewsCard from "../../cards/mainPageCards/NewsCard";
import { storage } from "@/utils/localStorage";
import ChatCard, { TChatCard } from "../../cards/mainPageCards/ChatCard";
import ChatTextField from "../../textFields/ChatTextField";
import Image from "next/image";

const ws = new WebSocket(`ws://v2224385.hosted-by-vdsina.ru/ws/chat/?token=${storage.get('AccessToken')}`)

export default function ChatField() {
    const [messages, setMessages] = useState<object[]>([])
    const [userMessage, setUserMessage] = useState<string>('')
    const messagesContainerRef = useRef<HTMLDivElement>(null);

    const sendMessage = () => {
        ws.send(JSON.stringify({ 'message': userMessage }))
        setUserMessage('')
    }

    const normDate = (d: string) => {
        let date = new Date(d);
        let hours = date.getHours()
        let minutes = date.getMinutes().toString().split("")
        let newMinutes
        if (minutes.length === 1) {
            newMinutes = `0${minutes[0]}`
        } else newMinutes = date.getMinutes()
        return (hours + ":" + newMinutes)
    }

    useEffect(() => {
        ws.addEventListener('message', (e) => {
            let newMessages = JSON.parse(e.data)
            setMessages((prev) => {//@ts-ignore
                if (newMessages[0]?.text !== prev[0]?.text) {
                    //@ts-ignore
                    return [...newMessages, ...prev]
                } else return [...prev]
            })
        })

        if (messagesContainerRef.current) {
            messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
        }
    }, [messages])
    return (
        <div className="min-w-[282px] w-[390px] rounded-6 lg:w-full h-[300px] bg-white overflow-hidden">
            <h3 className="mt-3 ml-4 absolute text-heading-s s_lg:text-heading-ss-bold">
                Чат
            </h3>

            <div className="px-4 overflow-y-scroll pb-12 flex flex-col-reverse gap-4 scroll-hidden h-full w-full s_lg:gap-2">
                {
                    //@ts-ignore
                    messages.map((e, index) => (
                        //@ts-ignore
                        <ChatCard key={e.username + e.created_at + index} username={e.username} text={e.text} created_at={normDate(e.created_at)} />
                    ))
                }
            </div>
            <div className="mt-1 px-4 pt-2 rounded-t-3 flex h-[50px] relative bg-white bottom-12">
                <ChatTextField onChange={(mess) => setUserMessage(mess)} value={userMessage} type="text" />
                <button onClick={sendMessage} className="pl-2 flex">
                    <Image className="hover:scale-105 active:scale-[1.1] scale-1 duration-300" width={34} height={34} src={'/sendMessage.svg'} alt="send" />
                </button>
            </div>
        </div>
    )
}