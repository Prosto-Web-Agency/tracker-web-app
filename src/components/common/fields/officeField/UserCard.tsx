import Image from "next/image"
import SecondaryButton from "../../buttons/secondary"
import {TUserCommonData} from "@/models/userData";
import TRIcon from "@/components/common/icon";
import React from "react";
import {useRouter} from "next/navigation";

type TUserCard = {
    userData: TUserCommonData | null;
};

export default function UserCard({ userData }: TUserCard) {
    const router = useRouter();

    function handleGoToInstagram() {
        router.push(`https://www.instagram.com/${userData?.instagram}`);
    }

    function handleGoToTelegram() {
        router.push(`https://t.me/${userData?.tg_username}`);
    }

    return (
        <div className="flex w-full min-w-[364px] h-[225px] big_screen_h:h-[calc(40vh-114px)] bg-white rounded-6 ss_lg:min-w-ful">
            {
                userData ? (
                    <>
                        <div className="w-[193px]">
                            <Image
                                className="w-[200px] h-[225px] big_screen_h:h-[calc(40vh-114px)] object-cover rounded-4"
                                width={193}
                                height={265}
                                src={userData.image_url}
                                alt="man"
                            />
                            <div className="bg-orange-class absolute mt-[-50px] ml-13 text-white flex justify-center items-center py-2 px-5">
                                LVL: King
                            </div>
                        </div>

                        <div className="flex flex-col justify-between p-6">
                            <div className="text-heading-ss">
                                <p>{userData.first_name}</p>
                                <p>{userData.surname}</p>
                            </div>
                            <div className="flex flex-col gap-1">
                                {
                                    userData.tg_username ? (
                                        <SecondaryButton
                                            size="small"
                                            className="flex gap-1 rounded-5 px-4 justify-center items-center h-10"
                                            onClick={handleGoToTelegram}
                                            leftIcon="tg_white"
                                            text={userData.tg_username}
                                        />
                                    ) : null
                                }
                                {
                                    userData.instagram ? (
                                        <SecondaryButton
                                            size="small"
                                            className="flex gap-1 rounded-5 px-4 justify-center items-center h-10"
                                            onClick={handleGoToInstagram}
                                            leftIcon="inst_white"
                                            text={userData.instagram}
                                        />
                                    ) : null
                                }
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="flex justify-center items-center w-full h-full">
                        <TRIcon iconName="loader" edgeLength={48} className="animate-spin" />
                    </div>
                )
            }
        </div>
    )
}
