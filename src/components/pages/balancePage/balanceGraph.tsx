'use client'

import { WebGraph } from "@/components/common/WEB/webGraph";
import ListOfChatMessages from "@/components/common/fields/mainField/ListOfChatMessages";
import CardHeader from "@/components/common/header/CardHeader";
import TRIcon from "@/components/common/icon";
import { TSliderBalance } from "@/components/common/slider/SliderBalance";
import ChatTextField from "@/components/common/textFields/ChatTextField";
import { TOKEN } from "@/consts/profile";
import { setSetBalance } from "@/store/reducers/balanceWheelReducer";
import { storage } from "@/utils/localStorage";
import { createTheme } from '@mui/material/styles';
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

const theme = createTheme({
    palette: {
        primary: {
            main: "#E12131",
        },
        secondary: {
            main: '#FEA310',
        },
    },
});

const BALANCE: TSliderBalance[] = [
    {
        name: "Саморазвитие",
        image: '/balance/education.svg'
    },
    {
        name: "Отношения",
        image: '/balance/education.svg'
    },
    {
        name: "Карьера",
        image: '/balance/education.svg'
    },
    {
        name: "Отдых",
        image: '/balance/education.svg'
    },
    {
        name: "Окружение",
        image: '/balance/education.svg'
    },
    {
        name: "Доходы",
        image: '/balance/education.svg'
    },
    {
        name: "Творчество",
        image: '/balance/education.svg'
    },
    {
        name: "Здоровье",
        image: '/balance/education.svg'
    }
]

export default function BalanceWebPage({ balanceData }: any) {
    const dispatch = useDispatch();
    const handleOpenSliders = () => {
        dispatch(setSetBalance(false))
    }

    const [messages, setMessages] = useState<any>([])
    const [userMessage, setUserMessage] = useState<string>('')
    const messagesContainerRef = useRef<HTMLDivElement>(null);
    const [websocket, setWebsocket] = useState<WebSocket | null>(null);
    const [visible, setVisible] = useState<boolean>(true);
    

    useEffect(() => {
        setWebsocket(new WebSocket(String(process.env.WEBSOCKET) + storage.get(TOKEN) ?? ''))
        if (messages.length !== 0) setVisible(false)
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
        if (messages.length !== 0) setVisible(false)
    }, [websocket, messages]);

    const sendMessage = () => {
        if (websocket) {
            websocket.send(JSON.stringify({ 'message': userMessage }))
            setUserMessage('')
        }
    }

    function handleGetMessage(message: MessageEvent<any>) {
        const newMessages = JSON.parse(message.data);
        //@ts-ignore
        setMessages((prev): any => {
            if (newMessages[0]?.text !== prev[0]?.text)
                return [...newMessages, ...prev];

            return [...prev];
        })
    }

    return (
        <div onClick={handleOpenSliders} className="w-full h-[calc(100%-90px)] bg-bg-gray flex justify-center items-center">
            <div className="flex sx_lg:flex-col w-full sx_lg:h-auto justify-center sx_lg:items-center gap-10 h-[600px] sx_lg:w-[600px] md:px-6">
                <div className="bg-white rounded-6 h-[600px] md:h-[450px] w-[600px] md:w-full flex flex-col p-6">
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

                    <div className="flex flex-col w-full h-[600px] md:h-[450px] minn:h-[300px] justify-center items-center">
                        <WebGraph balanceData={balanceData} />
                    </div>

                </div>

                <div className="w-[350px] sx_lg:w-full md:w-full sx_lg:min-h-[350px] sx_lg:max-h-[350px] bg-white h-full rounded-6">
                    {
                        visible
                            ? <div className="flex justify-center sx_lg:h-[350px] items-center w-full h-full">
                                <TRIcon iconName="loader" edgeLength={48} className="animate-spin" />
                            </div>
                            : <div className="w-full h-full">
                                <div className="flex w-full flex-col px-2 pb-10 lg:pb-5 h-full sx_lg:h-[350px] rounded-6 bg-white overflow-hidden">

                                    <div className="px-1 overflow-y-scroll flex flex-col-reverse gap-4 scroll-hidden w-full s_lg:gap-2">
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
                    }
                </div>
            </div>

        </div>

    )
}
