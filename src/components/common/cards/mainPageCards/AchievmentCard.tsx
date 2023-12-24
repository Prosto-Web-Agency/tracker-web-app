import Image from "next/image";
import { TRank, Ranks } from "@/components/common/cards/RankComponent";
import TRIcon from "@/components/common/icon";
import classNames from "classnames";

export type TAchievCard = {
    image: string
    name: string
    achieveName: TRank['rank'];
}

export default function AchievmentCard({image, name, achieveName}: TAchievCard) {
    return (
        <div className="w-full min-w-[230px] pt-2 pb-6 h-full flex flex-col justify-between items-center">
            <div className="flex flex-col items-center gap-2">
                <Image className="rounded-[50px] w-[90px] h-[90px] object-cover" width={90} height={90} src={image ?? '/crown.svg'} alt='person' />
                <div className="text-white text-center text-16_700 py-2">
                    <h5>Поздравляем</h5>
                    <p>{name}</p>
                </div>
            </div>

            <div className="bg-white relative w-[250px] h-[50px] rounded-full text-17_500 flex justify-center items-center px-9">
                <div className="absolute left-2">
                    <TRIcon
                        iconName={achieveName}
                        edgeLength={40}
                    />
                </div>

                <h4 className={classNames(
                    "text-text-m-bold text-black",
                    "md:text-text-s"
                )}>
                    { Ranks[achieveName] }
                </h4>
            </div>
        </div>
    )
}
