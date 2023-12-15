'use client'

import { useEffect, useState } from "react"
import SearchUsersField from "../../textFields/SearchUsersField"
import Image from "next/image"
import { useDispatch, useSelector } from "react-redux"
import { getSearchUsersThunk } from "@/store/thunks/trakerThunk"

export default function SearchUsers() {
    const dispatch = useDispatch();
    const [text, setText] = useState<string>("")
    //@ts-ignore
    const {searchUsers} = useSelector(state => state.mainPage)

    const handleChange = (text: string) => {
        setText(text)
        
        console.log(searchUsers);
        
        //@ts-ignore
        dispatch(getSearchUsersThunk(text))
    }

    return (
        <div className="relative">
            <SearchUsersField onChange={(txt) => handleChange(txt)} placeholder="Поиск пользователей" value={text} type="text" />
            <Image
                className="hover:scale-105 active:scale-[1.1] scale-1 duration-300 absolute top-4 right-6"
                width={30}
                height={30}
                src={'/SearchIcon.svg'}
                alt="search"
            />
            {
                text === ""
                    ? null
                    : <div className="bg-white rounded-4 mt-6 min-h-[100px] max-h-[200px] w-full absolute">
                        {
                            searchUsers.map((e: string) => (
                                <div>
                                    {e}
                                </div>
                            ))
                        }
                    </div>
            }

        </div>

    )
}