'use client'

import Header from '@/components/common/header'
import Image from "next/image";
import Link from "next/link";
import PrimaryButton from "@/components/common/buttons/primary";
import ProtectedRoute from "@/components/common/protectedRoute";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {checkUserAuth} from "@/store/thunks/userThunk";

export default function Guides() {
    const dispatch = useDispatch();

    useEffect(() => {
        // @ts-ignore
        dispatch(checkUserAuth());
    }, []);

    return (
        <ProtectedRoute>
            <div className='w-screen h-screen relative'>
                <Header />
                <section className="flex justify-center items-center">
                    <div className="flex justify-center items-center flex-col gap-10 min-h-[calc(100vh-90px)] relative w-full bg-bg-gray rounded-9 p-10 max-w-[1400px]">
                        <Link href={'/'} className="flex items-center gap-2 px-6">
                            <Image className="md:h-[27px] md:w-[27px]" height={48} width={48} src={'/logo.svg'} alt='RECs' />
                            <h1 className="RECsText text-heading-m md:text-text-m-bold">
                                Rec’s Traker
                            </h1>
                        </Link>

                        <div className="flex">
                            <PrimaryButton className="px-6" text={'Страница находится в разработке'} onClick={() => undefined} />
                        </div>
                    </div>
                </section>
            </div>
        </ProtectedRoute>
    )
}
