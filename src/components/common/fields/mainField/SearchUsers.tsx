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
    const { searchUsers } = useSelector(state => state.mainPage)

    const handleChange = (text: string) => {
        setText(text)
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
                    : <div className="bg-white p-6 rounded-4 flex flex-col gap-6 mt-6 min-h-[100px] max-h-[200px] overflow-y-scroll w-full absolute">
                        {
                            //@ts-ignore
                            searchUsers.map((e, index) => (
                                <div className="w-full h-9 px-3 flex justify-between" key={e.first_name + index}>
                                    <div className="flex items-center gap-3">
                                        <Image
                                            className="hover:scale-105 active:scale-[1.1] scale-1 duration-300"
                                            width={30}
                                            height={30}
                                            src={'/delete/Avatar.png'}
                                            alt="search"
                                        />
                                        {e.first_name}
                                    </div>

                                    <div>
                                        <Image
                                            className="hover:scale-105 active:scale-[1.1] scale-1 duration-300"
                                            width={30}
                                            height={30}
                                            src={'/add.svg'}
                                            alt="search"
                                        />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
            }

        </div>

    )
}