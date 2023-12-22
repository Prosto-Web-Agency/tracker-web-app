'use client'

import BasePrimaryCard from "@/components/common/cards/BasePrimaryCard"
import BaseSecondaryCard from "@/components/common/cards/BaseSecondaryCard"
import ScratchedTitle from "@/components/common/titles/ScratchedTitle"
import {setUserSubscriptionPaymentFetch} from "@/store/thunks/userThunk";
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/navigation";
import {useEffect} from "react";
import {TUserCommonData} from "@/models/userData";
import {storage} from "@/utils/localStorage";
import {SUBSCRIPTION} from "@/consts/profile";
import PrimaryButton from "@/components/common/buttons/primary";

export default function SubscriptionPage() {
    const dispatch = useDispatch();
    const router = useRouter();
    const subscription = Boolean(storage.get(SUBSCRIPTION));

    const { isUserSubscribed }: {
        isUserSubscribed: boolean
        //@ts-ignore
    } = useSelector(state => state.user);

    function handleSubscribe() {
        // @ts-ignore
        dispatch(setUserSubscriptionPaymentFetch(true))
        setTimeout(() => router.push('/'), 1000);
    }

    // useEffect(() => {
    //     if (Boolean(storage.get(SUBSCRIPTION)) !== isUserSubscribed) {
    //         router.push('/');
    //     }
    // }, [isUserSubscribed]);

    return (
        <section className="flex justify-center gap-6 bg-bg-gray p-10 s_lg:rounded-[0px] rounded-9 min-h-[calc(100vh-90px)] lg:flex-col relative mx-auto max-w-[1400px] w-full overflow-hidden">
            <div className="w-[35%] lg:w-full h-[calc(100vh-172px)]">
                <BasePrimaryCard title="SMART TRAKER " className="min-h-[50%] justify-between">
                    <ul className="flex flex-col gap-3 list-disc px-3">
                        <li className="w-full max-w-[80%] mx-auto pb-3 text-15_600">
                            TRAKER BOT – это удобный в использовании бот в Telegram, который помогает создавать ежедневные отчеты. Систематический трекинг дает анализ действий, результатов и состояния.
                        </li>
                        <li className="w-full max-w-[80%] mx-auto pb-3 text-15_600">
                            TRAKER SUPPORT - команда помогающих специалистов предлагает всестороннюю поддержку от практикующих коучей и психологов. Эти специалисты доступны для поддержки в сложных ситуации. Они помогут найти точки роста участникам, предоставляя своевременную и профессиональную помощь
                        </li>
                        <li className="w-full max-w-[80%] mx-auto pb-3 text-15_600">
                            Общайтесь с участниками сообщества в чате, изучайте опыт успешных людей, и получайте поддержку широкого круга профессионалов
                        </li>
                        <li className="w-full max-w-[80%] mx-auto pb-3 text-15_600">
                            Надежный VPN-сервис без рекламы и технических проблем для безопасного доступа в интернет
                        </li>
                    </ul>

                    <div className="flex cursor-pointer hover:opacity-80" onClick={handleSubscribe}>
                        <BaseSecondaryCard>
                            <div className="flex flex-col gap-2">
                                <div className="flex flex-col">
                                    <p className="text-13_500 text-white">Месяц</p>
                                    <div className="flex gap-14">
                                        <ScratchedTitle title="890р. " className="text-heading-s text-white" />
                                        <span className="text-heading-s text-white">
                                            490р.
                                            {'    '}
                                            <span className="text-text-m-bold">
                                                до нового года
                                            </span>
                                        </span>
                                    </div>
                                </div>

                                <div className="flex flex-col">
                                    <p className="text-13_500 text-white">Год</p>
                                    <div className="flex gap-14">
                                        <ScratchedTitle title="8900р. " className="text-heading-s text-white" />
                                        <span className="text-heading-s text-white">
                                            890р.
                                            {'    '}
                                            <span className="text-text-m-bold">
                                                до нового года
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </BaseSecondaryCard>
                    </div>

                    <PrimaryButton text={'Купить'} onClick={() => {}} />
                </BasePrimaryCard>
            </div>
        </section>
    )
}
