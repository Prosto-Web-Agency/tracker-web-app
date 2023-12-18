'use client'

import BasePrimaryCard from "@/components/common/cards/BasePrimaryCard"
import BaseSecondaryCard from "@/components/common/cards/BaseSecondaryCard"
import ScratchedTitle from "@/components/common/titles/ScratchedTitle"
import {setUserSubscriptionFetch} from "@/store/thunks/userThunk";
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/navigation";
import {useEffect} from "react";
import {TUserCommonData} from "@/models/userData";
import {storage} from "@/utils/localStorage";
import {SUBSCRIPTION} from "@/consts/profile";

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
        dispatch(setUserSubscriptionFetch(true))
    };

    useEffect(() => {
        if (subscription !== isUserSubscribed) {
            router.push('/');
        }
    }, [isUserSubscribed]);

    return (
        <section className="flex gap-6 bg-bg-gray p-10 s_lg:rounded-[0px] rounded-9 min-h-[calc(100vh-90px)] lg:flex-col relative mx-auto max-w-[1400px] w-full overflow-hidden">
            <div className="flex flex-col gap-6 w-[30%] lg:w-full h-[calc(100vh-162px)] relative">
                <BasePrimaryCard title="TRAKERstart" className="min-h-[calc(50%-12px)] justify-between">
                    <ul className="flex flex-col gap-3 list-disc px-3">
                        <li className="w-full pb-3 text-15_600 border-b-[0.5px] border-black">
                            ОНБОРДИНГ самой эффективной формы трекеринга личного прогресса и Баланса
                        </li>
                        <li className="w-full pb-3 text-15_600 border-b-[0.5px] border-black">
                            Курс по эффективному тайм-менеджменту
                        </li>
                        <li className="w-full pb-3 text-15_600 border-b-[0.5px] border-black">
                            Личная умная визитка на платформе Bcard’s
                        </li>
                    </ul>

                    <div className="flex cursor-pointer hover:opacity-80" onClick={handleSubscribe}>
                        <BaseSecondaryCard>
                            <div className="flex flex-col gap-2">
                                <p className="text-13_500 text-white">Навсегда</p>
                                <div className="flex gap-2">
                                    <ScratchedTitle title="390р. " className="text-heading-s text-white" />
                                    <p className="text-heading-s text-white">Free</p>
                                </div>
                            </div>
                        </BaseSecondaryCard>
                    </div>
                </BasePrimaryCard>

                <BasePrimaryCard title="TRAKERbot" className="min-h-[calc(50%-12px)] justify-between">
                    <ul className="flex flex-col gap-3 list-disc px-3">
                        <li className="w-full pb-3 text-15_600">
                            Автоматический TRAKER-бот с RECомендациями от AI и экспертов
                        </li>
                    </ul>

                    <div className="flex cursor-pointer hover:opacity-80" onClick={handleSubscribe}>
                        <BaseSecondaryCard>
                            <div className="flex flex-col gap-2">
                                <p className="text-13_500 text-white">Навсегда</p>
                                <div className="flex gap-2">
                                    <ScratchedTitle title="390р. " className="text-heading-s text-white" />
                                    <p className="text-heading-s text-white">90р.</p>
                                </div>
                            </div>
                        </BaseSecondaryCard>
                    </div>
                </BasePrimaryCard>
            </div>

            <div className="w-[calc(70%/3)] lg:w-full h-[calc(100vh-162px)]">
                <BasePrimaryCard title="smarTraker" className="min-h-[50%] justify-between">
                    <ul className="flex flex-col gap-3 list-disc px-3">
                        <li className="w-full pb-3 text-15_600">
                            Подбор от Ai индивидуальной фокус-группы для Трекеринга, повышения эффективности и Баланса
                        </li>
                        <li className="w-full pb-3 text-15_600">
                            База данных UKNO с Алгоритмом подбора на основе Ai Контактов, Знаний, Инструментов по рекомендации
                        </li>
                        <li className="w-full pb-3 text-15_600">
                            TRAKER-STAT индивидуальная статистика с Рейтингом
                        </li>
                        <li className="w-full pb-3 text-15_600">
                            Чекап с Психологом и Коучем постановка задач и развития результатов на месяц, после вторая встреча уже платная рекомендовано 1 раз в месяц клиентам
                        </li>
                    </ul>

                    <div className="flex cursor-pointer hover:opacity-80" onClick={handleSubscribe}>
                        <BaseSecondaryCard>
                            <div className="flex flex-col gap-2">
                                <div className="flex flex-col">
                                    <p className="text-13_500 text-white">Месяц</p>
                                    <div className="flex gap-2">
                                        <ScratchedTitle title="890р. " className="text-heading-s text-white" />
                                        <span className="text-heading-s text-white">
                                            490р.
                                        </span>
                                    </div>
                                </div>

                                <div className="flex flex-col">
                                    <p className="text-13_500 text-white">Год</p>
                                    <div className="flex gap-2">
                                        <ScratchedTitle title="8900р. " className="text-heading-s text-white" />
                                        <span className="text-heading-s text-white">
                                            3900р.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </BaseSecondaryCard>
                    </div>
                </BasePrimaryCard>
            </div>

            <div className="w-[calc(70%/3)] lg:w-full h-[calc(100vh-162px)]">
                <BasePrimaryCard title="База RЕСомендаций" className="min-h-[50%] justify-between">
                    <ul className="flex flex-col gap-3 list-disc px-3">
                        <li className="w-full pb-3 text-15_600">
                            Обратная связь от психолога и коуча
                        </li>
                        <li className="w-full pb-3 text-15_600">
                            TRAKER - STATmax Расширенная индивидуальная статистика с Детальным Рейтингом и Рекомендациями на основе Ai
                        </li>
                        <li className="w-full pb-3 text-15_600">
                            Отбор в Эксперты и подключение монетизации за Сессии с Кандидатов в Резиденты
                        </li>
                        <li className="w-full pb-3 text-15_600">
                            Подключение личной визитки Bcards к Базе данных UKNO и получение заказов B2B по рекомендациям
                        </li>
                        <li className="w-full pb-3 text-15_600">
                            Чек-ап сессия с Психологом или Коучем
                        </li>
                    </ul>

                    <div className="flex cursor-pointer hover:opacity-80" onClick={handleSubscribe}>
                        <BaseSecondaryCard>
                            <div className="flex flex-col gap-2">
                                <div className="flex flex-col">
                                    <p className="text-13_500 text-white">Сессия отбора</p>
                                    <span className="text-heading-s text-white">
                                        4 900р.
                                    </span>
                                </div>

                                <div className="flex flex-col">
                                    <p className="text-13_500 text-white">Месяц</p>
                                    <div className="flex gap-2">
                                        <ScratchedTitle title="19900р. " className="text-heading-s text-white" />
                                        <span className="text-heading-s text-white">
                                            13 900р.
                                        </span>
                                    </div>
                                </div>

                                <div className="flex flex-col">
                                    <p className="text-13_500 text-white">Год</p>
                                    <div className="flex gap-2">
                                        <ScratchedTitle title="89900р. " className="text-heading-s text-white" />
                                        <span className="text-heading-s text-white">
                                            69 900р.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </BaseSecondaryCard>
                    </div>
                </BasePrimaryCard>
            </div>

            <div className="w-[calc(70%/3)] lg:w-full h-[calc(100vh-162px)]">
                <BaseSecondaryCard title="Резиденство в REC's" className="min-h-[50%] justify-between">
                    <ul className="flex flex-col gap-3 list-disc px-3">
                        <li className="w-full pb-3 text-15_600 text-white">
                            Обратная связь от психолога и коуча
                        </li>
                        <li className="w-full pb-3 text-15_600 text-white">
                            TRAKER - STATmax Расширенная индивидуальная статистика с Детальным Рейтингом и Рекомендациями на основе Ai
                        </li>
                        <li className="w-full pb-3 text-15_600 text-white">
                            Отбор в Эксперты и подключение монетизации за Сессии с Кандидатов в Резиденты
                        </li>
                        <li className="w-full pb-3 text-15_600 text-white">
                            Подключение личной визитки Bcards к Базе данных UKNO и получение заказов B2B по рекомендациям
                        </li>
                        <li className="w-full pb-3 text-15_600 text-white">
                            Чек-ап сессия с Психологом или Коучем
                        </li>
                    </ul>

                    <div className="flex cursor-pointer hover:opacity-80" onClick={handleSubscribe}>
                        <BasePrimaryCard>
                            <div className="flex flex-col gap-2">
                                <div className="flex flex-col">
                                    <p className="text-13_500 text-black">Сессия отбора</p>
                                    <span className="text-heading-s text-transparent bg-clip-text bg-gradient-to-r from-[#E01D31] to-[#FEA50F]">
                                        4 900р.
                                    </span>
                                </div>

                                <div className="flex flex-col">
                                    <p className="text-13_500 text-black">Месяц</p>
                                    <div className="flex gap-2">
                                        <ScratchedTitle title="19900р. " className="text-heading-s text-black" />
                                        <span className="text-heading-s text-transparent bg-clip-text bg-gradient-to-r from-[#E01D31] to-[#FEA50F]">
                                            13 900р.
                                        </span>
                                    </div>
                                </div>

                                <div className="flex flex-col">
                                    <p className="text-13_500 text-black">Год</p>
                                    <div className="flex gap-2">
                                        <ScratchedTitle title="89900р. " className="text-heading-s text-black" />
                                        <span className="text-heading-s text-transparent bg-clip-text bg-gradient-to-r from-[#E01D31] to-[#FEA50F]">
                                            69 900р.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </BasePrimaryCard>
                    </div>
                </BaseSecondaryCard>
            </div>
        </section>
    )
}
