'use client'

import { useEffect, useState } from "react"
import SearchUsersField from "../../textFields/SearchUsersField"
import Image from "next/image"
import { useDispatch, useSelector } from "react-redux"
import { getSearchUsersThunk } from "@/store/thunks/trakerThunk"
import { TUserSearchDataArray } from "@/models/userData";
import SecondaryButton from "@/components/common/buttons/secondary";
import {subscribeOnUserByLogin, unsubscribeOnUserByLogin} from "@/store/thunks/userThunk";
import ModalComponent from "@/components/common/modal";

export default function SearchUsers() {
    const dispatch = useDispatch();
    const [text, setText] = useState<string>("");
    const [unsubscribeModal, setUnsubscribeModal] = useState({
        isOpen: false,
        login: ''
    });
    //@ts-ignore
    const { searchUsers }: { searchUsers: TUserSearchDataArray } = useSelector(state => state.mainPage)

    const handleChange = (text: string) => {
        setText(text)

        //@ts-ignore
        dispatch(getSearchUsersThunk(text))
    }

    function handleSubscribeOnUser(login: string, is_subscribe: boolean) {
        if (is_subscribe) {
            //@ts-ignore
            setUnsubscribeModal({
                isOpen: true,
                login
            });
        } else {
            //@ts-ignore
            dispatch(subscribeOnUserByLogin(login));
        }
    }

    function handleUnsubscribeOnUser(login: string) {
        //@ts-ignore
        dispatch(unsubscribeOnUserByLogin(login));
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
                            searchUsers.map(({
                                first_name,
                                image_url,
                                is_anon,
                                rank_name,
                                is_subscribe,
                                login
                            }, index) => (
                                <div
                                    className={"flex justify-between items-center gap-2 w-full cursor-pointer hover:bg-bg-gray transition rounded-4"}
                                    key={first_name + index}
                                >
                                    <div className="flex gap-2 items-center">
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

                                    <div className="h-[26px]">
                                        <SecondaryButton
                                            className="h-[26px]"
                                            bg={is_subscribe ? 'null' : ''}
                                            size={'none'}
                                            text={''}
                                            onClick={() => handleSubscribeOnUser(login, is_subscribe)}
                                            leftIcon={is_subscribe ? 'subscribedUser' : 'plusGradient'}
                                            edgeLength={26}
                                        />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
            }

            <ModalComponent open={unsubscribeModal.isOpen} onClose={() => {}}>
                <SecondaryButton
                    size={'small'}
                    text={'Отписаться'}
                    onClick={() => handleUnsubscribeOnUser(unsubscribeModal.login)}
                />
            </ModalComponent>
        </div>
    )
}
