'use client'

import RanksTopUser from "@/components/common/fields/mainField/RanksTopUser";
import ChatSmallComponent from "@/components/common/fields/mainField/ChatSmallComponent";
import ListOfInsightCards from "@/components/common/fields/mainField/ListOfInsightCards";
import NewsField from "@/components/common/fields/mainField/NewsField";
import RateField from "@/components/common/fields/mainField/RateField";
import { useEffect } from "react";
import { getListOfUsersInsights, getListOfTopUsers } from "@/store/thunks/trakerThunk";
import { useDispatch, useSelector } from "react-redux";
import SearchUsers from "@/components/common/fields/mainField/SearchUsers";
import UserSubscriptions from "@/components/common/userSubscription";
import classNames from "classnames";

export default function MainPage() {
    const dispatch = useDispatch();

    //@ts-ignore
    const { listOfTopUsers, listOfUserInsights } = useSelector(state => state.mainPage)

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
                "md:rounded-[0px] md:p-4 md:py-6"
            )}>
                <div className="max-h-[900px] flex md:flex-col gap-6 w-full relative">
                    <div className="flex flex-col gap-6">
                        <SearchUsers />
                        <ListOfInsightCards listOfUserInsights={listOfUserInsights} />
                    </div>

                    <div className={classNames(
                        "flex flex-col min-h-[700px] relative gap-6 w-full max-w-[calc(100%-420px)]",
                        "md:min-h-[950px] md:h-[950px] md:pb-10"
                    )}>
                        <NewsField />
                        <UserSubscriptions />
                    </div>
                </div>

                <div className="flex big_screen_h:h-[calc(35vh-40px)] lg:flex-col gap-6 mt-6">
                    <RateField rateData={listOfTopUsers} />
                    <RanksTopUser />
                    <ChatSmallComponent />
                </div>
            </div>
        </section>
    )
}
