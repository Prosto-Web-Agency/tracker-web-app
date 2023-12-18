'use client'

import React, { useEffect, useState, useRef } from "react";
import ChatCard from "../../cards/mainPageCards/ChatCard";
import Image from "next/image";
import ChatTextField from "../../textFields/ChatTextField";
import Header from "../../header";
import classNames from "classnames";
import TRIcon from "@/components/common/icon";
import {storage} from "@/utils/localStorage";
import {TOKEN} from "@/consts/profile";

const ws = new WebSocket(String(process.env.WEBSOCKET) + storage.get(TOKEN) ?? '');

export default function ChatSmallComponent() {
    const [messages, setMessages] = useState<{ text: string, [key: string]: string }[]>([])
    const [userMessage, setUserMessage] = useState<string>('')
    const messagesContainerRef = useRef<HTMLDivElement>(null);
    const [fullScreen, setFullScreen] = useState<boolean>(false);
    const [hover, setHover] = useState(false);

    const sendMessage = () => {
        ws.send(JSON.stringify({ 'message': userMessage }))
        setUserMessage('')
    }

    const normDate = (d: string) => {
        const date = new Date(d);
        let newMinutes;

        const [hours, minutes] = [date.getHours(), date.getMinutes().toString().split("")]

        if (minutes.length === 1) {
            newMinutes = `0${minutes[0]}`;
        } else {
            newMinutes = date.getMinutes();
        }

        return (hours + ":" + newMinutes);
    }

    function handleGetMessage(message: MessageEvent<any>) {
        const newMessages = JSON.parse(message.data);

        setMessages((prev) => {
            if (newMessages[0]?.text !== prev[0]?.text)
                return [...newMessages, ...prev];

            return [...prev];
        })
    }

    useEffect(() => {
        ws.onmessage = (message) => handleGetMessage(message);

        if (messagesContainerRef.current) {
            messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <>
            {
                fullScreen ?
                    (
                        <>
                            <div className="w-full h-[calc(100vh-80px)] max-h-[calc(100vh-80px)] mt-[80px] flex justify-center lg:mt-[75px] lg:h-[calc(100vh-75px)] items-cente lg:bg-white  bg-bg-gray py-10 px-5 z-[900] backdrop-blur-sm fixed top-0 left-0">
                                <div className="min-w-[50%] w-[50%] px-10 pb-10 lg:pb-5 lg:px-0 flex flex-col rounded-6 lg:w-full h-full bg-white overflow-hidden">
                                    <div className="text-heading-s relative s_lg:text-heading-ss-bold w-full min-h-[100px] lg:max-h-[70px] lg:min-h-[70px] h-[100px] flex justify-center items-center">
                                        <button className="absolute left-5" onClick={() => setFullScreen(false)}>
                                            <Image
                                                className="hover:scale-105 active:scale-[1.1] scale-1 duration-300"
                                                width={30}
                                                height={30}
                                                src={'/chevron_left.svg'}
                                                alt="send"
                                            />
                                        </button>

                                        <h3 className="bg-white p-2 rounded-4">
                                            Чат
                                        </h3>
                                    </div>

                                    <div className="px-4 overflow-y-scroll flex flex-col-reverse gap-4 scroll-hidden w-full s_lg:gap-2">
                                        {
                                            messages.map((e, index) => (
                                                <ChatCard
                                                    //@ts-ignore
                                                    key={e.username + e.created_at + index}
                                                    //@ts-ignore
                                                    username={e.first_name}
                                                    //@ts-ignore
                                                    text={e.text}
                                                    // @ts-ignore
                                                    created_at={normDate(e.created_at)}
                                                />
                                            ))
                                        }
                                    </div>

                                    <div className="rounded-t-3 relative flex pt-6 h-[50px] bg-white bottom-0">
                                        <ChatTextField onChange={(mess) => setUserMessage(mess)} value={userMessage} type="text" />
                                        <button onClick={sendMessage} className="pl-2 flex">
                                            <Image
                                                className="hover:scale-105 active:scale-[1.1] scale-1 duration-300"
                                                width={34}
                                                height={34}
                                                src={'/sendMessage.svg'}
                                                alt="send"
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div
                            onMouseOver={() => setHover(true)}
                            onMouseLeave={() => setHover(false)}
                            onClick={() => setFullScreen(true)}
                            className="min-w-[282px] w-[390px] cursor-pointer rounded-6 lg:w-full h-[300px] bg-white overflow-hidden relative"
                        >
                            <div className="mt-4 ml-4 absolute z-10 text-heading-s lg:w-screen flex justify-between s_lg:text-heading-ss-bold">
                                <h3 className="bg-white py-2 px-4 rounded-4">
                                    Чат
                                </h3>
                            </div>

                            <div className={classNames('absolute z-20 flex justify-center items-center top-0 left-0 transition bg-black h-full w-full', {
                                ['opacity-20']: hover,
                                ['opacity-0']: !hover
                            })}>
                                <p className="text-white text-heading-ss">Перейти в полноценный чат</p>
                            </div>

                            <div className="px-4 overflow-y-scroll pb-12 flex flex-col-reverse gap-4 scroll-hidden h-full w-full s_lg:gap-2">
                                {
                                    messages.length ? (
                                        <>
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
        </>

    )
}
