'use client'

import { useEffect, useState } from "react"
import SearchUsersField from "../../textFields/SearchUsersField"
import Image from "next/image"
import { useDispatch, useSelector } from "react-redux"
import { getSearchUsersThunk } from "@/store/thunks/trakerThunk"
import { TUserSearchDataArray } from "@/models/userData";

export default function SearchUsers() {
    const dispatch = useDispatch();
    const [text, setText] = useState<string>("")
    //@ts-ignore
    const { searchUsers }: { searchUsers: TUserSearchDataArray } = useSelector(state => state.mainPage)

    const handleChange = (text: string) => {
        setText(text)

        //@ts-ignore
        dispatch(getSearchUsersThunk(text))
    }

    return (
        <div className="relative">
            <SearchUsersField
                onChange={(txt) => handleChange(txt)}
                placeholder="Поиск пользователей"
                value={text}
                type="text"
            />
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
                    : <div className="flex flex-col gap-2 bg-white rounded-4 mt-6 p-6 min-h-[100px] max-h-[240px] w-full absolute">
                        {
                            searchUsers.map(({ first_name, image_url, is_anon, rank_name }, index) => (
                                <div className={"flex items-center gap-2 w-full cursor-pointer hover:bg-bg-gray transition rounded-4"} key={first_name + index}>
                                    {
                                        image_url ? (
                                            <Image
                                                className="w-8 h-8 object-cover rounded-4 hover:scale-105 active:scale-[1.1] scale-1 duration-300"
                                                width={30}
                                                height={30}
                                                src={image_url}
                                                alt="image_url"
                                            />
                                        ) : (
                                            <div className="w-8 h-8 rounded-4 bg-bg-gray" />
                                        )
                                    }
                                    <p className={"text-13_600"}>
                                        {first_name}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
            }

        </div>

    )
}
