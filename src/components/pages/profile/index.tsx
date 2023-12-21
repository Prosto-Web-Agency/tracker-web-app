'use client'

import RanksComponent from "@/components/common/fields/officeField/RanksComponent";
import DiagrammsPhoneField from "@/components/common/fields/officeField/DiagrammsPhoneField";
import DiagramsFieldOffice from "@/components/common/fields/officeField/DiagramsField";
import GraphFieldOffice from "@/components/common/fields/officeField/GrapgFieldOffice";
import MetricsComponent from "@/components/common/fields/officeField/MetricsField";
import UserCard from "@/components/common/fields/officeField/UserCard";
import SeccessGraphPhoneOffice from "@/components/common/fields/officeField/SuccessGraphOfficePhone";
import {
    getCharts,
    getDiagrams,
    getMetrics,
} from "@/store/thunks/officeThunk";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserPersonalData } from "@/store/thunks/userThunk";
import {useRouter} from "next/navigation";
import HoverGradientButton from "@/components/common/buttons/hoverGradient";
import type { TUserDataState } from "@/store/reducers/userReducer";
import type { TUserCharts } from "@/models/charts";
import {TMetrics, TUserDiagrams} from "@/models/charts";

export default function PersonalOffice() {
    const dispatch = useDispatch();
    const router = useRouter();

    const { charts, diagrams, metrics }: {
        charts: TUserCharts | null,
        diagrams: TUserDiagrams | null,
        metrics: TMetrics | null
    //@ts-ignore
    } = useSelector(state => state.officePage);

    //@ts-ignore
    const { userData }: { userData: TUserDataState } = useSelector(state => state.user);

    useEffect(() => {
        //@ts-ignore
        dispatch(getDiagrams())
        //@ts-ignore
        dispatch(getCharts())
        //@ts-ignore
        dispatch(getMetrics());
        //@ts-ignore
        dispatch(getUserPersonalData());
    }, [dispatch]);

    function handleEditUserData() {
        router.push('/profile/edit');
    }

    return (

        <section className="min-h-[screen] mx-auto max-w-[1400px] w-full overflow-hidden">
            <div className="w-full ss_lg:flex ss_lg:flex-col gap-6 min-h-[calc(100vh-90px)] relative bg-bg-gray grid grid-cols-3 sx_lg:grid-cols-2 rounded-9 sx_lg:rounded-[0] sx_lg:rounded-t-9 s_lg: p-6 sx_lg:pb-6 max-w-[1400px] mx-auto s_lg:rounded-t-[0px] s_lg:pt-0 s_lg:p-6 ss_lg:p-4 ss_lg:gap-4">
                <div className="row-span-3 flex flex-col gap-6">
                    <div className="w-full">
                        <UserCard userData={userData} />

                        <HoverGradientButton text={'Редактировать'} onClick={handleEditUserData} />
                    </div>

                    <div className="ss_lg:hidden">
                        <RanksComponent userRank={userData?.rank_name ?? "empty"} />
                    </div>
                </div>

                <div className="hidden gap-4 sm:grid-cols-1 ss_lg:grid grid-cols-2 w-full">
                    <div>
                        <RanksComponent userRank={userData?.rank_name ?? "empty"} />
                    </div>
                    <div className="flex flex-col gap-4">
                        <div>
                            <SeccessGraphPhoneOffice />
                        </div>
                        <div>
                            {
                                metrics ? (
                                    <MetricsComponent metrics={metrics}/>
                                ) : null
                            }
                        </div>
                    </div>
                </div>

                <div className="row-span-3 flex flex-col gap-6 min-w-[384px] ss_lg:hidden">
                    {/*<PrimaryButton text="" type="datePicker" onClick={() => {}} className="py-3" />*/}
                    {
                        diagrams ? (
                            <DiagramsFieldOffice diagrams={diagrams} />
                        ) : null
                    }

                    <div className="sx_lg:hidden">
                        {
                            metrics ? (
                                <MetricsComponent metrics={metrics}/>
                            ) : null
                        }
                    </div>

                </div>

                <div className="col-start-3 col-end-4 row-start-1 row-end-4 sx_lg:hidden flex flex-col gap-6 min-w-[384px]">
                    {/*<PrimaryButton text="" type="datePicker" onClick={() => {}} />*/}
                    {
                        charts ? (
                            <>
                                <GraphFieldOffice
                                    type={'chartProductive'}
                                    color={'#6ABDDB'}
                                    name="График продуктивности"
                                    params={{
                                        data: charts.lifeBalance.dots,
                                        label: charts.lifeBalance.date
                                    }}
                                    average={charts.lifeBalance.avg[0].toFixed(2)}
                                    elementId={'productivityChart'}
                                />
                                <GraphFieldOffice
                                    type={'chartEmotional'}
                                    color={'#97C263'}
                                    name="График отдыха"
                                    params={{
                                        data: charts.dayReports.dots,
                                        label: charts.dayReports.date
                                    }}
                                    average={charts.dayReports.avg[0].toFixed(2)}
                                    elementId={'holidaysChart'}
                                />
                                <GraphFieldOffice
                                    type={'chartRelax'}
                                    color={'#F6CC56'}
                                    name="Эмоциональное состояние"
                                    params={{
                                        data: charts.emotional.dots,
                                        label: charts.emotional.date
                                    }}
                                    average={charts.emotional.avg[0].toFixed(2)}
                                    elementId={'emotionalChart'}
                                />
                            </>
                        ) : null
                    }
                </div>
            </div>

            <div className="sx_lg:grid grid-cols-2 px-10 bg-bg-gray p-6 pt-0 hidden flex-col gap-6 row-span-3 min-w-[384px] ss_lg:hidden">
                {
                    metrics ? (
                        <MetricsComponent metrics={metrics}/>
                    ) : null
                }

                {
                    charts ? (
                        <>
                            <GraphFieldOffice
                                type={'chartProductive'}
                                color={'#6ABDDB'}
                                name="График продуктивности"
                                params={{
                                    data: charts.lifeBalance.dots,
                                    label: charts.lifeBalance.date
                                }}
                                average={charts.lifeBalance.avg[0].toFixed(2)}
                                elementId={'productivityChart'}
                            />
                            <GraphFieldOffice
                                type={'chartEmotional'}
                                color={'#97C263'}
                                name="График отдыха"
                                params={{
                                    data: charts.dayReports.dots,
                                    label: charts.dayReports.date
                                }}
                                average={charts.dayReports.avg[0].toFixed(2)}
                                elementId={'holidaysChart'}
                            />
                            <GraphFieldOffice
                                type={'chartRelax'}
                                color={'#F6CC56'}
                                name="Эмоциональное состояние"
                                params={{
                                    data: charts.emotional.dots,
                                    label: charts.emotional.date
                                }}
                                average={charts.emotional.avg[0].toFixed(2)}
                                elementId={'emotionalChart'}
                            />
                        </>
                    ) : null
                }
            </div>

            <div className="hidden ss_lg:block bg-bg-gray w-full px-4 pb-6">
                <DiagrammsPhoneField />
            </div>
        </section>
    )
}
