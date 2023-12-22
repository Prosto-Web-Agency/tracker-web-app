'use client'

import { WebGraph } from "@/components/common/WEB/webGraph";
import ListOfChatMessages from "@/components/common/fields/mainField/ListOfChatMessages";
import TRIcon from "@/components/common/icon";
import ChatTextField from "@/components/common/textFields/ChatTextField";
import { setSetBalance } from "@/store/reducers/balanceWheelReducer";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { getEnableChatsData } from "@/store/thunks/adminThunk";
import classNames from "classnames";
import PrimaryButton from "@/components/common/buttons/primary";
import {getLinkOnChatWithCoach, getLinkOnChatWithPsychologist} from "@/utils/chat";

export type TChatWith = "psychologist" | "coach";

function BalanceWebPage({ balanceData }: any) {
    const dispatch = useDispatch();
    const handleOpenSliders = () => {
        dispatch(setSetBalance(false))
    }

    const [chatWith, setChatWith] = useState<TChatWith>('psychologist');
    const [messages, setMessages] = useState<null | []>(null)
    const [userMessage, setUserMessage] = useState<string>('')
    const messagesContainerRef = useRef<HTMLDivElement>(null);
    const [websocket, setWebsocket] = useState<WebSocket | null>(null);
    const [visible, setVisible] = useState<boolean>(true);

    useEffect(() => {
        // @ts-ignore
        dispatch(getEnableChatsData());
    }, []);

    useEffect(() => {
        setWebsocket(new WebSocket(getLinkOnChatWithPsychologist()))

        if (messages) setVisible(false)

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

        if (messages) setVisible(false)
    }, [websocket, messages]);

    useEffect(() => {
        if (websocket && balanceData) {
            // При первом запуске отправляем данные life balance пользователя
            // websocket.send(JSON.stringify({
            //     "self_development": 9,
            //     "relationship": 6,
            //     "career": 9,
            //     "rest": 5,
            //     "environment": 8,
            //     "income": 3,
            //     "creation": 8,
            //     "health": 4
            // }))
        }
    }, [websocket, balanceData]);

    const sendMessage = () => {
        if (websocket) {
            websocket.send(JSON.stringify({ 'message': userMessage }));

            setUserMessage('')
        }
    }

    function handleGetMessage(message: MessageEvent<any>) {
        const newMessages = JSON.parse(message.data);
        setMessages((prev: any): any => {
            if (newMessages[0]?.text !== (prev ?? [])[0]?.text)
                return [...newMessages, ...(prev ?? [])];

            return [...(prev ?? [])];
        })
    }

    function handleChangeChat(chatWithValue: TChatWith) {
        if (chatWithValue === 'psychologist' && chatWith !== chatWithValue) {
            setChatWith(chatWithValue);
            setMessages([]);
            setVisible(false);
            setWebsocket(new WebSocket(getLinkOnChatWithPsychologist()));
        } else if (chatWithValue === 'coach' && chatWith !== chatWithValue) {
            setChatWith(chatWithValue);
            setMessages([]);
            setVisible(false);
            setWebsocket(new WebSocket(getLinkOnChatWithCoach()));
        }
    }

    return (
        <div
            // onClick={handleOpenSliders}
            className="w-full h-[calc(100%-90px)] bg-bg-gray flex justify-center items-center">
            <div className="flex sx_lg:flex-col w-full sx_lg:h-auto justify-center sx_lg:items-center gap-10 h-[600px] sx_lg:w-[600px] md:px-6">
                <div className="bg-white rounded-6 h-[700px] md:h-[450px] w-[600px] md:w-full flex flex-col p-6">
                    <div>
                        <div className="flex flex-col items-center px-6">
                            <div className="flex items-center gap-2">
                                <Image className="md:h-[27px] md:w-[27px]" height={48} width={48} src={'/logo.svg'} alt='RECs' />
                                <h1 className="RECsText text-heading-m md:text-text-m-bold">
                                    Rec’s Traker
                                </h1>
                            </div>

                            <h1 className="RECsText text-20 md:text-[15px] -bold">
                                Чекап
                            </h1>
                        </div>
                    </div>

                    <div className="flex flex-col w-full h-[750px] md:h-[450px] minn:h-[300px] justify-center items-center">
                        <WebGraph balanceData={balanceData} />
                    </div>
                </div>

                <div className="w-[350px] sx_lg:w-full h-[700px] md:w-full sx_lg:min-h-[350px] sx_lg:max-h-[350px] bg-white rounded-6">
                    {
                        visible ? (
                            <div className="flex justify-center sx_lg:h-[350px] items-center w-full h-full">
                                <TRIcon iconName="loader" edgeLength={48} className="animate-spin" />
                            </div>
                        ) : (
                            <div className="w-[400px] h-full">
                                <div className={classNames(
                                    "flex w-full h-[700px] relative flex-col px-2 pb-10 rounded-6 bg-white overflow-hidden",
                                    ""
                                )}>
                                    <div className="flex gap-4 w-full p-4">
                                        <PrimaryButton
                                            className={'text-text-s'}
                                            text={'Чат с психологом'}
                                            onClick={() => (handleChangeChat('psychologist'))}
                                            active={chatWith === 'psychologist'}
                                        />
                                        <PrimaryButton
                                            className={'text-text-s'}
                                            text={'Чат с коучем'}
                                            onClick={() => handleChangeChat('coach')}
                                            active={chatWith === 'coach'}
                                        />
                                    </div>

                                    <div className="h-full w-full overflow-y-scroll flex flex-col-reverse gap-4 scroll-hidden">
                                        <ListOfChatMessages messages={messages ?? []} />
                                    </div>

                                    <div className="rounded-t-3 relative flex pt-6 px-4 h-[50px] bg-white bottom-0">
                                        <ChatTextField
                                            onChange={(mess) => setUserMessage(mess)}
                                            value={userMessage}
                                            type="text"
                                        />

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
                        )
                    }
                </div>
            </div>

        </div>

    )
}

export default React.memo(BalanceWebPage);
