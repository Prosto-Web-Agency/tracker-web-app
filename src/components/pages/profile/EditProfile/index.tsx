'use client'

import React, { useEffect, useState } from 'react';
import TRTextField from "@/components/common/textFields/TRTextField";
import Image from "next/image";
import ImagePicker from "../../imagePicker";
import SecondaryButton from "@/components/common/buttons/secondary";
import PrimaryButton from "@/components/common/buttons/primary";
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import classNames from "classnames";
import { TUserCommonData } from "@/models/userData";
import { editUserDataFetch } from "@/store/thunks/userThunk";
import TRIcon from "@/components/common/icon";
import { getUserPersonalData } from "@/store/thunks/userThunk";

export default function EditProfilePage() {
    // @ts-ignore
    const { userData }: { userData: TUserCommonData | null } = useSelector(state => state.user)
    // @ts-ignore
    const dispatch = useDispatch();

    const [name, setName] = useState<string>('')
    const [nameError, setNameError] = useState(false)
    const [surname, setSurname] = useState<string>('')
    const [telegram, setTelegram] = useState<string>('')
    const [inst, setInst] = useState<string>('')
    const [imgPicker, setImgPicker] = useState<boolean>(false)

    const handleChanges = () => {
        if (inst[0] && inst[0] !== '@') {
            setInst((prev) => ('@' + prev))
        }

        if (telegram[0] && telegram[0] !== '@') {
            setTelegram((prev) => ('@' + prev))
        }
    }

    const clearForms = () => {
        setName('');
        setSurname('');
        setTelegram('');
        setInst('');
    }

    useEffect(() => {
        //@ts-ignore
        dispatch(getUserPersonalData());
    }, [dispatch]);

    useEffect(() => {
        if (userData) {
            setName(userData.first_name)
            setSurname(userData.surname ?? '')
            setTelegram(userData.tg_username)
            setInst(userData.instagram)
        }
    }, [userData]);

    function handleSendRequest() {
        if (name) {
            // @ts-ignore
            dispatch(editUserDataFetch({
                first_name: name,
                surname: surname,
                tg_username: telegram,
                instagram: inst,
                login: ''
            }));
        } else if (!nameError) {
            setNameError(true);
            setTimeout(() => setNameError(false), 1000);
        }
    }

    return (

        <div className="bg-white rounded-6 w-[588px] h-[441px] flex s_lg:bg-bg-gray s_lg:flex-col s_lg:w-full s_lg:h-full s_lg:p-6">
            <button onClick={() => setImgPicker(!imgPicker)} className="s_lg:bg-white s_lg:rounded-6 s_lg:flex">
                {
                    userData ? (
                        <>
                            {
                                userData?.image_url ? (
                                    <Image
                                        className="w-[282px] h-[440px] rounded-4 s_lg:h-[225px] s_lg:w-[169px] object-cover"
                                        width={282}
                                        height={441}
                                        src={userData.image_url}
                                        alt="man"
                                    />
                                ) : null
                            }
                        </>
                    ) : (
                        <div className="flex w-[282px] h-[440px] border-4 border-white border-solid bg-bg-gray rounded-4 justify-center items-center">
                            <TRIcon iconName="loader" edgeLength={48} className="animate-spin" />
                        </div>
                    )
                }

                <Image
                    className="duration-300 hover:scale-[1.05] absolute mt-[-430px] ml-[225px] s_lg:hidden"
                    width={46}
                    height={46}
                    src={'/addPhotoLogo.svg'}
                    alt="camera logo"
                />

                <div className="w-full h-full justify-center items-center hidden s_lg:flex">
                    <Image
                        className="duration-300 hover:scale-[1.05]"
                        width={46}
                        height={46}
                        src={'/addPhotoLogo.svg'}
                        alt="camera logo"
                    />
                </div>
            </button>

            <div className="w-[306px] text-15_600 p-6  h-[441px] flex flex-col justify-around s_lg:w-full s_lg:p-0 s_lg:pt-10 s_lg:h-auto s_lg:gap-4">
                <div className={classNames('animate__animated', {
                    ['animate__shakeX']: nameError
                })}>
                    <TRTextField
                        type="text"
                        placeholder="Имя"
                        value={name}
                        onChange={(name) => setName(name)}
                    />
                </div>
                <TRTextField
                    type="text"
                    placeholder="Фамилия"
                    value={surname}
                    onChange={(surname) => setSurname(surname)}
                />
                <TRTextField
                    type="text"
                    placeholder="Ник телеграм"
                    value={telegram}
                    onChange={(tg) => {
                        setTelegram(tg);
                        handleChanges();
                    }}
                />
                <TRTextField
                    type="text"
                    placeholder="Ник Инстаграм"
                    value={inst}
                    onChange={(inst) => {
                        setTelegram(inst);
                        handleChanges();
                    }}
                />

                <SecondaryButton
                    text="Сохранить"
                    onClick={handleSendRequest}
                />

                <Link href="/profile">
                    <PrimaryButton
                        text="Закрыть"
                        onClick={clearForms}
                    />
                </Link>
            </div>

            <ImagePicker show={imgPicker} setImgPicker={setImgPicker}/>
        </div>
    )
}
