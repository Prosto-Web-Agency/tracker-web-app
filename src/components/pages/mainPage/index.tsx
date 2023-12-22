'use client'

import RanksTopUser from "@/components/common/fields/mainField/RanksTopUser";
import ChatSmallComponent from "@/components/common/fields/mainField/ChatSmallComponent";
import ListOfInsightCards from "@/components/common/fields/mainField/ListOfInsightCards";
import NewsField from "@/components/common/fields/mainField/NewsField";
import RateField from "@/components/common/fields/mainField/RateField";
import { useEffect } from "react";
import {getListOfUsersInsights, getListOfTopUsers, getRankUpdateList} from "@/store/thunks/trakerThunk";
import { useDispatch, useSelector } from "react-redux";
import SearchUsers from "@/components/common/fields/mainField/SearchUsers";
import UserSubscriptions from "@/components/common/userSubscription";
import classNames from "classnames";
import {useAppDispatch, useAppSelector} from "@/hooks/store";

export default function MainPage() {
    const dispatch = useDispatch();
    const { listOfTopUsers, listOfUserInsights } = useAppSelector(state => state.mainPage)

    useEffect(() => {
        // @ts-ignore
        dispatch(getListOfUsersInsights())
        //@ts-ignore
        dispatch(getListOfTopUsers())
    }, [dispatch]);

    return (
        <section className="w-full">
            <div className={classNames(
                "min-h-[calc(100vh-90px)] relative w-full bg-bg-gray rounded-9 p-10 max-w-[1400px] mx-auto",
                "lg:rounded-[0px] lg:p-4 lg:py-6 lg:gap-6 lg:flex lg:flex-col"
            )}>
                <div className={classNames(
                    "max-h-[900px] flex lg:flex-col gap-6 w-full relative",
                    "lg:h-auto lg:max-h-fit"
                )}>
                    <div className="flex flex-col gap-6">
                        <SearchUsers />
                        <ListOfInsightCards listOfUserInsights={listOfUserInsights} />
                    </div>

                    <div className={classNames(
                        "flex flex-col min-h-[700px] relative gap-6 w-full max-w-[calc(100%-420px)]",
                        "lg:min-h-auto lg:h-auto lg:max-w-full lg:min-h-0"
                    )}>
                        <NewsField />
                        <UserSubscriptions />
                    </div>
                </div>

                <div className={classNames(
                    "flex h-[340px] lg:flex-col gap-6 mt-6",
                    "lg:mt-0 lg:h-auto"
                )}>
                    <RateField rateData={listOfTopUsers} />
                    <RanksTopUser />
                    <ChatSmallComponent />
                </div>
            </div>
        </section>
    )
}
