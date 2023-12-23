import Image from "next/image"
import {TUserDataState} from "@/store/reducers/userReducer";
import {useSelector} from "react-redux";
import {TRank} from "@/components/common/cards/RankComponent";
import TRIcon from "@/components/common/icon";

export type TChatCard = {
    username: string;
    text: string;
    created_at: string;
    rank: TRank['rank'];
    image: string | null;
}

export default function ChatCard({ username, text, created_at, rank, image }: TChatCard) {
    // @ts-ignore
    const { userData }: { userData: TUserDataState } = useSelector(state => state.user)

    return (
        <>
            {
                (userData && userData.first_name === username)
                    ? (
                        <div className="w-full flex flex-col pl-[20%] text-white">
                            <div className="w-full py-3 px-5 bg-orange-class flex justify-between">
                                <div className="text-17_400">
                                    {text}
                                </div>
                                <div className="text-11_400 w-[40px] flex justify-end items-end text-white opacity-70">
                                    {created_at}
                                </div>
                            </div>

                        </div>
                    ) : (
                        <div className="w-full pr-[20%] flex text-white">
                            <div className="flex items-end pb-1 pr-1 relative">
                                <div className="absolute z-10 bottom-1 right-1">
                                    <TRIcon iconName={rank} edgeLength={12} />
                                </div>

                                {
                                    image ? (
                                        <Image
                                            className="w-[32px] h-[32px] object-cover rounded-6"
                                            height={32}
                                            width={32}
                                            src={image}
                                            alt="avatar"
                                        />
                                    ) : (
                                        <div className="flex justify-center items-center w-[32px] h-[32px] rounded-10 bg-bg-gray">
                                            <Image
                                                width={32}
                                                height={32}
                                                className={'w-[32px] h-[32px] obj-cover rounded-10'}
                                                src={'/empty-user-icon.jpeg'}
                                                alt={'empty profile'}
                                            />
                                        </div>
                                    )
                                }
                            </div>

                            <div className="w-full py-3 rounded-5 px-5 bg-bg-gray flex flex-col">
                                <div className="coloredTextTwo pb-1 text-11_500">
                                    {username}
                                </div>
                                <div className="flex justify-between">
                                    <div className="text-17_400 text-black">
                                        {text}
                                    </div>
                                    <div className="text-11_400 flex justify-end items-end text-gray-400">
                                        {created_at}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
            }
        </>

    )
}
