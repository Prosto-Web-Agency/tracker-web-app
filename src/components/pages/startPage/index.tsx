'use client'

import PrimaryButton from '@/components/common/buttons/primary';
import React, {useEffect, useState} from 'react';
import { useRouter } from "next/navigation";
import {storage} from "@/utils/localStorage";
import {LOGIN, TOKEN} from "@/consts/profile";
import {useDispatch, useSelector} from "react-redux";
import Image from "next/image";
import Link from "next/link";
import SecondaryButton from "@/components/common/buttons/secondary";
import TRIcon from "@/components/common/icon";
import {TUserDataState} from "@/store/reducers/userReducer";
import {useAppSelector} from "@/hooks/store";
import {getListOfTopUsers, getListOfUsersInsights, getNews, getRankUpdateList} from "@/store/thunks/trakerThunk";
import {getUserSubscriptionsTasksData} from "@/store/thunks/userThunk";

const StartPage = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const { userData, isUserPaidSubscription } = useAppSelector(state => state.user);
    // @ts-ignore
    const { isUserAuth, isAuthCheck } = useSelector(state => state.user);
    const [step, setStep] = useState(0);

    function handleGoToAuth() {
        router.push('https://auth.recscommunity.ru/login?service=1');
    }

    function handleGoToBot() {
        router.push('https://t.me/RecsTraker_bot');
    }

    function handleGoToSubscription() {
        router.push('/subscription');
    }

    function handleGoToMain() {
        // @ts-ignore
        dispatch(getListOfUsersInsights())
        //@ts-ignore
        dispatch(getListOfTopUsers())
        // @ts-ignore
        dispatch(getNews());
        // @ts-ignore
        dispatch(getUserSubscriptionsTasksData());
        //@ts-ignore
        dispatch(getRankUpdateList());
        router.push('/');
    }

    useEffect(() => {
        const searchParams = new URL(window.location.href).searchParams;

        const token = searchParams.get('token');
        const login = searchParams.get('login');

        if (token) storage.set(TOKEN, token);
        if (login) storage.set(LOGIN, login);
    }, [])

    useEffect(() => {
        if (userData) {
            setStep(2);
        } else if (isUserAuth) {
            setStep(1);
        }
    }, [isUserAuth, userData])

    return (
        <section className="w-full overflow-hidden">
            <div className="min-h-[calc(100vh-90px)] flex flex-col items-center gap-12 justify-center relative w-full bg-bg-gray rounded-9 p-10 max-w-[1400px] mx-auto s_lg:rounded-t-[0px] s_lg:pt-0 s_lg:p-6 pb-3 s_lg:pb-12">
                <div className="flex flex-col items-center gap-6">
                    <Link href={'/'} className="flex items-center gap-2 px-6 ss_lg:hidden">
                        <Image className="md:h-[27px] md:w-[27px]" height={48} width={48} src={'/logo.svg'} alt='RECs' />
                        <h1 className="RECsText text-heading-m md:text-text-m-bold">
                            Rec’s Traker
                        </h1>
                    </Link>

                    <div className="flex gap-8 ss_lg:flex-col">
                        <SecondaryButton size="small" className="px-12 whitespace-nowrap" text={'Шаг 1'} onClick={() => {}} />
                        <SecondaryButton bg={step < 1 ? 'bg-white text-black' : ''} size="small" className="px-12 whitespace-nowrap" text={'Шаг 2'} onClick={() => {}} />
                        <SecondaryButton bg={step < 2 ? 'bg-white text-black' : ''} size="small" className="px-12 whitespace-nowrap" text={'Шаг 3'} onClick={() => {}} />
                    </div>
                </div>

                <div className="w-full flex flex-col justify-between items-center relative max-w-[560px] min-h-[240px] gap-6 pt-12 pb-10 px-12 bg-white rounded-4">
                    {
                        (step === 0 && isAuthCheck) ? (
                            <>
                                <p className="text-text-m-bold text-center">
                                    Вам необходимо авторизоваться, чтобы создать
                                    профиль в системе Rec’s community
                                </p>

                                <PrimaryButton text="Авторизоваться" onClick={handleGoToAuth} />
                            </>
                        ) : null
                    }

                    {
                        (step === 1 && isAuthCheck) ? (
                            <>
                                <p className="text-text-m-bold text-center">
                                    Вам необходимо авторизоваться, чтобы создать
                                    профиль в системе Rec’s community
                                </p>

                                <p className="text-text-m-bold text-center">
                                    Для этого зарегистрируйся в боте и напиши &quot;Авторизация&quot;,
                                    после чего напиши свой логин и пароль от Rec’s community
                                </p>

                                <PrimaryButton text="Перейти в бота" onClick={handleGoToBot} />
                            </>
                        ) : null
                    }

                    {
                        (step === 2 && isAuthCheck) ? (
                            <>
                                <p className="text-text-m-bold text-center">
                                    Последний шаг - оплатить подписку <br/>
                                    И дождаться пока ее примет Recs
                                </p>

                                {
                                    isUserPaidSubscription ? (
                                        <PrimaryButton text="Перейти на главную" onClick={handleGoToMain} />
                                    ) : (
                                        <PrimaryButton text="Выбрать подписку" onClick={handleGoToSubscription} />
                                    )
                                }
                            </>
                        ) : null
                    }

                    {
                        !isAuthCheck ? (
                            <div className="flex justify-center items-center w-full min-h-[210px]">
                                <TRIcon iconName="loader" edgeLength={48} className="animate-spin" />
                            </div>
                        ) : null
                    }
                </div>
            </div>
        </section>
    );
};

export default StartPage;
