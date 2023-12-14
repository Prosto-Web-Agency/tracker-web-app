'use client'

import PrimaryButton from '@/components/common/buttons/primary';
import React, {useEffect} from 'react';
import { useRouter } from "next/navigation";
import {storage} from "@/utils/localStorage";
import {LOGIN, TOKEN} from "@/consts/profile";
import {useSelector} from "react-redux";

const StartPage = () => {
    const router = useRouter();
    // @ts-ignore
    const { isUserAuth } = useSelector(state => state.user)

    function handleGoToAuth() {
        router.push('https://recs-login-front.vercel.app/login?service=1');
    }

    useEffect(() => {
        const searchParams = new URL(window.location.href).searchParams;

        const token = searchParams.get('token');
        const login = searchParams.get('login');

        if (token) storage.set(TOKEN, token);
        if (login) storage.set(LOGIN, login);
    }, [])

    return (
        <section className="w-full overflow-hidden">
            <div className="min-h-[calc(100vh-90px)] relative w-full bg-bg-gray rounded-9 p-10 max-w-[1400px] mx-auto s_lg:rounded-t-[0px] s_lg:pt-0 s_lg:p-6 pb-3 s_lg:pb-12">
                Вам нужно авторизоваться

                <PrimaryButton text="Авторизоваться" onClick={handleGoToAuth} />
            </div>
        </section>
    );
};

export default StartPage;
