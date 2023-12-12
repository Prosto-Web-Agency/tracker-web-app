import Image from "next/image";
import TRIcon from "../icon";

export type TAchieveOfficeCard = {
    image: string
    name: string
}

type TRank = {
    rank: "adviser" | "ambassador" | "expert" | "headliner" | "resident";
}

enum Ranks {
    adviser = 'Эдвайзер',
    ambassador = 'Амбассадор',
    expert = 'Эксперт',
    headliner = 'Хедлайнер',
    resident = 'Резидент'
}

export default function RankComponent({ rank }: TRank) {
    return (
        <div className="w-full flex justify-center bg-white items-center pr-6 h-[71px] rounded-full border-2 border-white">
            <TRIcon iconName={rank} edgeLength={32} />
            <h4 className="text-heading-ss-bold text-black">
                { Ranks[rank] }
            </h4>
        </div>
    )
}