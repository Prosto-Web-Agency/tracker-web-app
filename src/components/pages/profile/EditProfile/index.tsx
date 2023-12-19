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
import { editUserDataFetch, editUserImageFetch } from "@/store/thunks/userThunk";
import TRIcon from "@/components/common/icon";
import type { TUserDataState } from "@/store/reducers/userReducer";
import { compressImage } from "@/utils/compressImage";

export default function EditProfilePage() {
    // @ts-ignore
    const { userData }: { userData: TUserDataState } = useSelector(state => state.user)
    // @ts-ignore
    const dispatch = useDispatch();

    const [name, setName] = useState<string>('')
    const [nameError, setNameError] = useState(false)
    const [surname, setSurname] = useState<string>('')
    const [telegram, setTelegram] = useState<string>('')
    const [inst, setInst] = useState<string>('')
    const [imageFile, setImage] = useState<string | File>('');

    useEffect(() => {
        if (userData) {
            setName(userData.first_name)
            setSurname(userData.surname ?? '')
            setTelegram(userData.tg_username ?? '')
            setInst(userData.instagram ?? '')
            setImage(userData.image_url ?? '');
        }
    }, [userData]);

    async function handleSendRequest() {
        if (
            name !== userData?.first_name ||
            surname !== (userData?.surname ?? '') ||
            telegram !== (userData?.tg_username ?? '') ||
            inst !== userData?.instagram
        ) {
            // @ts-ignore
            dispatch(editUserDataFetch({
                first_name: name,
                surname: surname,
                tg_username: telegram,
                instagram: inst,
                is_anon: 0
            }));
        } else if (imageFile !== userData?.image_url) {
            // todo: переписать ручку
            // @ts-ignore
            dispatch(editUserImageFetch({ profile_image: imageFile ?? null }));
        } else if (!nameError) {
            setNameError(true);
            setTimeout(() => setNameError(false), 1000);
        }
    }

    return (

        <div className="bg-white rounded-6 w-[588px] h-[441px] flex s_lg:bg-bg-gray s_lg:flex-col s_lg:w-full s_lg:h-full s_lg:p-6">
            <div className="w-[282px] h-[440px] bg-bg-gray border-4 border-white border-solid box-border rounded-4">
                {
                    userData ? (
                        <>
                            {
                                <ImagePicker
                                    profileImage={userData.image_url ?? ''}
                                    onSetImage={(uploadedImage) => {
                                        setImage(uploadedImage)
                                    }}
                                />
                            }
                        </>
                    ) : (
                        <div className="flex w-[282px] h-[440px] border-4 border-white border-solid bg-bg-gray rounded-4 justify-center items-center">
                            <TRIcon iconName="loader" edgeLength={48} className="animate-spin" />
                        </div>
                    )
                }
            </div>

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
                        if (!tg.includes('@'))
                            setTelegram('@' + tg);
                        else setTelegram(tg);
                    }}
                />
                <TRTextField
                    type="text"
                    placeholder="Ник Инстаграм"
                    value={inst}
                    onChange={(inst) => {
                        if (!inst.includes('@'))
                            setTelegram('@' + inst);
                        else setTelegram(inst);
                    }}
                />

                <SecondaryButton
                    text="Сохранить"
                    onClick={handleSendRequest}
                />

                <Link href="/profile">
                    <PrimaryButton
                        text="Закрыть"
                        onClick={() => { }}
                    />
                </Link>
            </div>
        </div>
    )
}
