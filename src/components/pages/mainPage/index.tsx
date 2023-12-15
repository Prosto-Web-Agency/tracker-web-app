'use client'

import RanksTopUser from "@/components/common/fields/mainField/RanksTopUser";
import ChatSmallComponent from "@/components/common/fields/mainField/ChatSmallComponent";
import ListOfInsightCards from "@/components/common/fields/mainField/ListOfInsightCards";
import NewsField from "@/components/common/fields/mainField/NewsField";
import RateField from "@/components/common/fields/mainField/RateField";
import { useEffect } from "react";
import { getListOfUsersInsights, getListOfTopUsers } from "@/store/thunks/trakerThunk";
import { useDispatch, useSelector } from "react-redux";
import { storage } from '@/utils/localStorage';
import { LOGIN_ACCOUNT, TEST_TOKEN, TEST_USER, TOKEN } from '@/consts/profile';

export default function MainPage() {
    const dispatch = useDispatch();

    //@ts-ignore
    const { listOfTopUsers, listOfUserInsights } = useSelector(state => state.mainPage)

    useEffect(() => {
        // @ts-ignore
        dispatch(getListOfUsersInsights())
        //@ts-ignore
        dispatch(getListOfTopUsers())
        // todo: разобраться, зачем я тут импортнул getUserDataBySlack
        // //@ts-ignore
        // dispatch(getUserDataBySlack('lunivilen'))

        // todo: переделать установление тестового токена
        storage.set(LOGIN_ACCOUNT, TEST_USER);
        storage.set(TOKEN, TEST_TOKEN);
    }, [dispatch]);

    return (
        <section className="w-full overflow-hidden">
            <div className="min-h-[calc(100vh-90px)] relative w-full bg-bg-gray rounded-9 p-10 max-w-[1400px] mx-auto s_lg:rounded-t-[0px] s_lg:pt-0 s_lg:p-6 pb-3 s_lg:pb-12">
                <div className="h-[432px] big_screen_h:h-[calc(65vh-130px)] flex gap-6 s_lg:flex-col-reverse s_lg:h-auto">
                    <ListOfInsightCards listOfUserInsights={listOfUserInsights} />
                    <NewsField />
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
