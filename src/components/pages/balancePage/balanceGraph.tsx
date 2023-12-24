'use client'

import { WebGraph } from "@/components/common/charts/WEB/webGraph";
import ListOfChatMessages from "@/components/common/fields/mainField/ListOfChatMessages";
import TRIcon from "@/components/common/icon";
import ChatTextField from "@/components/common/textFields/ChatTextField";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { getEnableChatsData } from "@/store/thunks/adminThunk";
import classNames from "classnames";
import PrimaryButton from "@/components/common/buttons/primary";
import {getLinkOnChatWithCoach, getLinkOnChatWithPsychologist} from "@/utils/chat";
import {getUserWheelData} from "@/store/thunks/WheelThunk";
import {useAppSelector} from "@/hooks/store";
import {useRouter} from "next/navigation";

export type TChatWith = "psychologist" | "coach";

function BalanceWebPage() {
    const dispatch = useDispatch();
    const router = useRouter();
    const { balanceData } = useAppSelector(state => state.balanceWheel);

    useEffect(() => {
        // @ts-ignore
        dispatch(getUserWheelData())
    }, []);

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

    function handleGoToCheckup() {
        router.push('/balance/checkout');
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
        <div className="w-full bg-bg-gray flex justify-center items-center">
            <div className="flex sx_lg:flex-col w-full sx_lg:h-auto justify-center sx_lg:items-center gap-10 h-[600px] md:px-6">
                <div className={classNames(
                    "bg-white rounded-6 h-[724px] md:h-[450px] w-[600px] md:w-full flex flex-col p-6",
                    "lg:w-full lg:h-auto"
                )}>
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

                    <div className="flex flex-col w-full h-[724px] pb-6 box-border md:h-[450px] minn:h-[300px] justify-center items-center">
                        {
                            balanceData ? (
                                <WebGraph balanceData={balanceData} />
                            ) : null
                        }

                        <PrimaryButton
                            text={'Пройти чекап заново'}
                            onClick={() => handleGoToCheckup()}
                        />
                    </div>
                </div>

                <div className={classNames(
                    "w-[350px] sx_lg:w-full h-[724px] md:w-full bg-white rounded-6",
                    "lg:w-full lg:max-w-[350px]"
                )}>
                    {
                        visible ? (
                            <div className="flex justify-center sx_lg:h-[350px] items-center w-full h-full">
                                <TRIcon iconName="loader" edgeLength={48} className="animate-spin" />
                            </div>
                        ) : (
                            <div className={classNames(
                                "w-[400px] h-full",
                                "lg:w-full"
                            )}>
                                <div className={classNames(
                                    "flex w-full h-[724px] relative flex-col px-2 pb-10 rounded-6 bg-white overflow-hidden",
                                    ""
                                )}>
                                    <div className="flex gap-4 w-full p-4 minn:flex-col">
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
