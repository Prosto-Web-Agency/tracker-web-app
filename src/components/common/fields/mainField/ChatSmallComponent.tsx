'use client'

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import ChatTextField from "../../textFields/ChatTextField";
import classNames from "classnames";
import TRIcon from "@/components/common/icon";
import {storage} from "@/utils/localStorage";
import {TOKEN} from "@/consts/profile";
import ListOfChatMessages from "@/components/common/fields/mainField/ListOfChatMessages";
import CardHeader from "@/components/common/header/CardHeader";

export type TListOfChatMessages = {
    text: string;
    username: string;
    created_at: string;
    first_name: string;
    [key: string]: string;
}[];

export default function ChatSmallComponent() {
    const [messages, setMessages] = useState<TListOfChatMessages>([])
    const [userMessage, setUserMessage] = useState<string>('')
    const messagesContainerRef = useRef<HTMLDivElement>(null);
    const [fullScreen, setFullScreen] = useState<boolean>(false);
    const [hover, setHover] = useState(false);
    const [websocket, setWebsocket] = useState<WebSocket | null>(null);

    useEffect(() => {
        setWebsocket(new WebSocket(String(process.env.WEBSOCKET) + storage.get(TOKEN) ?? ''))

        return () => {
            if (websocket) {
                websocket.close();
            }
        }
    }, []);

    useEffect(() => {
        if (websocket) {
            websocket.onmessage = (message) => handleGetMessage(message);

            if (messagesContainerRef.current) {
                messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
            }
        }
    }, [websocket, messages]);

    const sendMessage = () => {
        if (websocket) {
            websocket.send(JSON.stringify({'message': userMessage}))
            setUserMessage('')
        }
    }

    function handleGetMessage(message: MessageEvent<any>) {
        const newMessages = JSON.parse(message.data);

        setMessages((prev) => {
            if (newMessages[0]?.text !== prev[0]?.text)
                return [...newMessages, ...prev];

            return [...prev];
        })
    }

    return (
        <>
            {
                fullScreen ?
                    (
                        <div className={classNames(
                            "w-full h-screen flex justify-center items-center bg-bg-gray py-10 px-5 z-[900] backdrop-blur-sm fixed top-0 left-0",
                            "md:mt-0 md:h-screen md:max-h-screen md:px-0"
                        )}>
                            <div className="flex flex-col min-w-[50%] relative w-[50%] px-10 pb-10 lg:pb-5 lg:px-0box-border rounded-6 lg:w-full h-full bg-white overflow-hidden">
                                <CardHeader title={'Чат'} iconName={'arrowLeft'} onIconClick={() => setFullScreen(false)} />

                                <div className="px-4 overflow-y-scroll flex flex-col-reverse gap-4 scroll-hidden w-full s_lg:gap-2">
                                    <ListOfChatMessages messages={messages} />
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
                    ) : (
                        <div
                            onClick={() => {
                                setFullScreen(true);
                                setHover(false);
                            }}
                            className="min-w-[282px] w-[390px] rounded-6 lg:w-full h-[300px] bg-white overflow-hidden relative"
                        >
                            <div
                                className="absolute z-30 w-full h-[50px] bg-white"
                                onMouseOver={() => setHover(true)}
                                onMouseLeave={() => setHover(false)}
                            >
                                <CardHeader
                                    title={'Чат'}
                                    size={'small'}
                                />
                            </div>

                            <div
                                onMouseOver={() => setHover(true)}
                                onMouseLeave={() => setHover(false)}
                                className={classNames('absolute flex justify-center items-center top-0 left-0 transition bg-black h-full w-full', {
                                ['opacity-20 z-40']: hover,
                                ['opacity-0 z-[-10]']: !hover
                            })}>
                                <p className="text-white text-heading-ss">Перейти в полноценный чат</p>
                            </div>

                            <div className="px-4 overflow-y-scroll pb-12 flex flex-col-reverse gap-4 scroll-hidden h-full w-full s_lg:gap-2">
                                {
                                    messages.length ? (
                                        <ListOfChatMessages messages={messages} />
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
