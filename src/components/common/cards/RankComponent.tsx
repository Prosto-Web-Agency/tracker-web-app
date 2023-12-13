import TRIcon from "../icon";

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
        <div className="w-full flex justify-center relative bg-white items-center py-2 h-[82px] rounded-full">
            <div className="absolute left-2">
                <TRIcon iconName={rank} edgeLength={68} />
            </div>

            <h4 className="text-heading-s text-black">
                { Ranks[rank] }
            </h4>
        </div>
    )
}
