'use client'

import PrimaryButton from '@/components/common/buttons/primary';
import React from 'react';
import {useRouter} from "next/navigation";

const StartPage = () => {
    const router = useRouter();

    function handleGoToAuth() {
        router.push('https://recs-login-front.vercel.app/login?service=1');
    }

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
