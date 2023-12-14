'use client'

import { useEffect, useState, useRef } from "react";

import { storage } from "@/utils/localStorage";
import ChatCard from "../../cards/mainPageCards/ChatCard";
import Image from "next/image";
import ChatTextField from "../../textFields/ChatTextField";
import Header from "../../header";

const ws = new WebSocket(`wss://v2224385.hosted-by-vdsina.ru/ws/chat/?token=${storage.get('AccessToken')}`)

export default function ChatField() {
    const [messages, setMessages] = useState<object[]>([])
    const [userMessage, setUserMessage] = useState<string>('')
    const messagesContainerRef = useRef<HTMLDivElement>(null);
    const [fullScreen, setFullScreen] = useState<boolean>(true);

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
        <>
            {
                fullScreen
                //Тут нужно другой хедер с кнопкой назад
                    ? <> <div className="fixed top-0 right-0 w-screen z-[1000] bg-white"><Header /></div>

                        <div className="w-full h-[calc(100vh-80px)] mt-[80px] flex justify-center lg:mt-[75px] lg:h-[calc(100vh-75px)] items-cente lg:bg-white  bg-bg-gray py-10 px-5 z-[900] backdrop-blur-sm fixed top-0 left-0">
                            <div className="min-w-[50%] w-[50%] rounded-6 lg:w-full h-full bg-white overflow-hidden">
                                <div className="mt-3 ml-3 absolute text-heading-s w-[50%] lg:w-screen pr-15 flex justify-between s_lg:text-heading-ss-bold">
                                    <h3 className="bg-white p-2 rounded-4">
                                        Чат
                                    </h3>
                                    <button onClick={() => setFullScreen(false)}>
                                        <Image className="hover:scale-105 active:scale-[1.1] scale-1 duration-300" width={30} height={30} src={'/maximize.png'} alt="send" />
                                    </button>
                                </div>

                                <div className="px-4 overflow-y-scroll pb-12 flex flex-col-reverse gap-4 scroll-hidden h-full w-full s_lg:gap-2">
                                    {
                                        messages.map((e, index) => (
                                            <ChatCard
                                                //@ts-ignore
                                                key={e.username + e.created_at + index}
                                                //@ts-ignore
                                                username={e.username}
                                                //@ts-ignore
                                                text={e.text}
                                                // @ts-ignore
                                                created_at={normDate(e.created_at)}
                                            />
                                        ))
                                    }
                                </div>

                                <div className="mt-0 px-4 pt-2 rounded-t-3 flex h-[50px] relative bg-white bottom-12">
                                    <ChatTextField onChange={(mess) => setUserMessage(mess)} value={userMessage} type="text" />
                                    <button onClick={sendMessage} className="pl-2 flex">
                                        <Image className="hover:scale-105 active:scale-[1.1] scale-1 duration-300" width={34} height={34} src={'/sendMessage.svg'} alt="send" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </>
                    : <div className="min-w-[282px] w-[390px] rounded-6 lg:w-full h-[300px] bg-white overflow-hidden">
                        <div className="mt-3 ml-3 absolute text-heading-s w-[390px] lg:w-screen pr-20 flex justify-between s_lg:text-heading-ss-bold">
                            <h3 className="bg-white p-2 rounded-4">
                                Чат
                            </h3>
                            <button onClick={() => setFullScreen(true)}>
                                <Image className="hover:scale-105 active:scale-[1.1] scale-1 duration-300" width={30} height={30} src={'/maximize.png'} alt="send" />
                            </button>
                        </div>


                        <div className="px-4 overflow-y-scroll pb-12 flex flex-col-reverse gap-4 scroll-hidden h-full w-full s_lg:gap-2">
                            {
                                messages.map((e, index) => (
                                    <ChatCard
                                        //@ts-ignore
                                        key={e.username + e.created_at + index}
                                        //@ts-ignore
                                        username={e.username}
                                        //@ts-ignore
                                        text={e.text}
                                        // @ts-ignore
                                        created_at={normDate(e.created_at)}
                                    />
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
            }
        </>

    )
}