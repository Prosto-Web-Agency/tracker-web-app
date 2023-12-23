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
import classNames from "classnames";

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
        router.push('https://payform.ru/mi3eLnO/');
        // setTimeout(() => router.push('/'), 1000);
    }

    return (
        <section className={classNames(
            "flex justify-center gap-6 bg-bg-gray p-10 s_lg:rounded-[0px] rounded-9 min-h-[calc(100vh-90px)] lg:flex-col relative mx-auto max-w-[1400px] w-full overflow-hidden",
            "md:px-4 md:pb-[100px]"
        )}>
            <div className="w-[35%] lg:w-full min-h-[calc(100vh-172px)]">
                <BasePrimaryCard title="SMART TRAKER " className="min-h-[50%] justify-between">
                    <ul className="flex flex-col gap-3 list-disc px-3">
                        <li className={classNames(
                            "w-full max-w-[80%] mx-auto pb-3 text-15_600",
                            "md:max-w-[90%]"
                        )}>
                            TRAKER BOT – это удобный в использовании бот в Telegram, который помогает создавать ежедневные отчеты. Систематический трекинг дает анализ действий, результатов и состояния.
                        </li>
                        <li className={classNames(
                            "w-full max-w-[80%] mx-auto pb-3 text-15_600",
                            "md:max-w-[90%]"
                        )}>
                            TRAKER SUPPORT - команда помогающих специалистов предлагает всестороннюю поддержку от практикующих коучей и психологов. Эти специалисты доступны для поддержки в сложных ситуации. Они помогут найти точки роста участникам, предоставляя своевременную и профессиональную помощь
                        </li>
                        <li className={classNames(
                            "w-full max-w-[80%] mx-auto pb-3 text-15_600",
                            "md:max-w-[90%]"
                        )}>
                            Общайтесь с участниками сообщества в чате, изучайте опыт успешных людей, и получайте поддержку широкого круга профессионалов
                        </li>
                        <li className={classNames(
                            "w-full max-w-[80%] mx-auto pb-3 text-15_600",
                            "md:max-w-[90%]"
                        )}>
                            Надежный VPN-сервис без рекламы и технических проблем для безопасного доступа в интернет
                        </li>
                    </ul>

                    <div className="flex hover:opacity-80">
                        <BaseSecondaryCard>
                            <div className="flex flex-col gap-2">
                                <div className="flex flex-col">
                                    <p className="text-13_500 text-white">Месяц</p>
                                    <div className={classNames(
                                        "flex gap-14",
                                        "md:gap-4"
                                    )}>
                                        <ScratchedTitle title="890р. " className="text-heading-s text-white" />
                                        <span className="text-heading-s text-white">
                                            490р.
                                            {'    '}
                                            <span className={classNames(
                                                "text-text-m-bold",
                                                "md:text-text-sm"
                                            )}>
                                                до нового года
                                            </span>
                                        </span>
                                    </div>
                                </div>

                                <div className="flex flex-col">
                                    <p className="text-13_500 text-white">Год</p>
                                    <div className={classNames(
                                        "flex gap-14",
                                        "md:gap-4"
                                    )}>
                                        <ScratchedTitle title="8900р. " className="text-heading-s text-white" />
                                        <span className="text-heading-s text-white">
                                            890р.
                                            {'    '}
                                            <span className={classNames(
                                                "text-text-m-bold",
                                                "md:text-text-sm"
                                            )}>
                                                до нового года
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </BaseSecondaryCard>
                    </div>

                    <PrimaryButton text={'Купить'} onClick={handleSubscribe} />
                </BasePrimaryCard>
            </div>
        </section>
    )
}
