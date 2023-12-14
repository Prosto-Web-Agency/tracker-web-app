'use client'

import PrimaryButton from '@/components/common/buttons/primary';
import { useRouter } from 'next/router';
import React from 'react';

const StartPage = () => {
    const router = useRouter();

    function handleGoToAuth() {
        router
    }

    return (
        <section className="w-full overflow-hidden">
            <div className="min-h-[calc(100vh-90px)] relative w-full bg-bg-gray rounded-9 p-10 max-w-[1400px] mx-auto s_lg:rounded-t-[0px] s_lg:pt-0 s_lg:p-6 pb-3 s_lg:pb-12">
                Вам нужно авторизоваться

                <PrimaryButton text="Авторизоваться" onClick={() => {}} />
            </div>
        </section>
    );
};

export default StartPage;
