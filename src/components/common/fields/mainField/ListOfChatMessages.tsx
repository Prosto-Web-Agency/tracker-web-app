'use client'

import React from "react";
import ChatCard from "../../cards/mainPageCards/ChatCard";
import { normDate } from "@/utils/chat";
import type { TListOfChatMessages } from "@/components/common/fields/mainField/ChatSmallComponent";

export default function ListOfChatMessages({ messages }: { messages: TListOfChatMessages}) {
    return (
        <>
            {
                messages.map(({
                    username,
                    created_at,
                    first_name,
                    text
                }, index) => (
                    <ChatCard
                        key={username + created_at + index}
                        username={first_name}
                        text={text}
                        created_at={normDate(created_at)}
                    />
                ))
            }
        </>
    )
}
