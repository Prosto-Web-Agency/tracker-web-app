import Image from "next/image"
import PrimaryButton from "../buttons/primary"
import Link from "next/link";
import {TUserDataState} from "@/store/reducers/userReducer";
import {useDispatch, useSelector} from "react-redux";
import {TUserPopupData} from "@/models/userData";
import TRIcon from "@/components/common/icon";
import React, {useEffect} from "react";
import {getListOfTopUsers, getListOfUsersInsights, getSearchUsersThunk} from "@/store/thunks/trakerThunk";
import {getUserPopupData, subscribeOnUserByLogin} from "@/store/thunks/userThunk";

interface IModalUser {
    position: number;
    open?: boolean;
    setModalData?: any;
    login: string;
}

export default function ModalUser({
    open,
    setModalData,
    login
}: IModalUser) {
    const dispatch = useDispatch();

    //@ts-ignore
    const { userPopupData }: { userPopupData: TUserPopupData | null; } = useSelector(state => state.user);

    useEffect(() => {
        //@ts-ignore
        dispatch(getUserPopupData(login))
    }, [dispatch]);

    function handleSubscribeOnUser(login: string) {
            //@ts-ignore
            dispatch(subscribeOnUserByLogin(login))
    }

    return (
        <div
            onClick={() => setModalData({ position: 0, open: false, login: '' })}
            className={`p-10 w-screen h-screen bg-tr04 z-[100] backdrop-blur-sm fixed top-0 left-0 ${open ? 'flex' : 'hidden'} justify-center items-center`}
            >
            <div
                onClick={(e) => e.stopPropagation()}
                className="flex flex-col items-center justify-center gap-8 min-h-[300px] h-auto w-[500px] min-w-[330px] bg-gradient rounded-4 px-5 pt-4 pb-6 text-white"
            >
                {
                    userPopupData ? (
                        <>
                            <div className="flex w-full justify-between">
                                <h4 className="text-heading-s flex justify-between">
                                    Пользователь
                                </h4>

                                <div onClick={() => setModalData({ position: 0, open: false, login: '' })}>
                                    <Image
                                        className="w-[24px] h-[24px] object-cover"
                                        height={27}
                                        width={27}
                                        src={'/close.svg'}
                                        alt='person'
                                    />
                                </div>
                            </div>

                            <div className="py-3 flex flex-col items-center">
                                {
                                    userPopupData?.image_url ? (
                                        <Image
                                            className="rounded-[45px] h-[90px] w-[90px] object-cover"
                                            height={90}
                                            width={90}
                                            src={userPopupData?.image_url}
                                            alt='person'
                                        />
                                    ) : (
                                        <div className="flex justify-center items-center w-[90px] h-[90px] rounded-[45px] bg-bg-gray">
                                            <TRIcon iconName={'emptyProfile'} edgeLength={32} />
                                        </div>
                                    )
                                }

                                <p className="text-20_700 pt-3">
                                    {userPopupData?.first_name}
                                </p>

                                <p>
                                    {userPopupData?.hash_tag_header}
                                </p>

                                {
                                    userPopupData?.tg_username || userPopupData?.instagram ? (
                                        <div className="flex gap-2 pt-3">
                                            {
                                                userPopupData?.tg_username ? (
                                                    <Link href={`https://t.me/${userPopupData?.tg_username}`}>
                                                        <PrimaryButton
                                                            text=""
                                                            edgeLength={32}
                                                            leftIcon="tg"
                                                            className="px-6 rounded-6"
                                                            onClick={() => undefined}
                                                        />
                                                    </Link>
                                                ) : null
                                            }

                                            {
                                                userPopupData?.tg_username ? (
                                                    <Link href={`https://t.me/${userPopupData?.instagram}`}>
                                                        <PrimaryButton
                                                            text=""
                                                            edgeLength={32}
                                                            leftIcon="inst"
                                                            className="px-6 rounded-6"
                                                            onClick={() => undefined}
                                                        />
                                                    </Link>
                                                ) : null
                                            }
                                        </div>
                                    ) : null
                                }
                            </div>

                            {
                                userPopupData?.achievements ? (
                                    <div className="flex flex-col gap-3">
                                        {
                                            userPopupData.achievements.map(({ achievement_name }, index) => (
                                                <div
                                                    className="flex justify-center items-center w-full h-[50px] bg-white text-black rounded-6"
                                                    key={String(Math.random()) + index}
                                                >
                                                    {achievement_name}
                                                </div>
                                            ))
                                        }
                                    </div>
                                ) : null
                            }

                            <PrimaryButton
                                text="Подписаться"
                                onClick={() => {
                                    handleSubscribeOnUser(login);
                                    setModalData({position: '', open: false})
                                }}
                            />
                        </>
                    ) : (
                        <div className="flex justify-center items-center w-full h-full">
                            <TRIcon iconName="loader" edgeLength={48} className="animate-spin" />
                        </div>
                    )
                }
            </div>
        </div>

    )
}
