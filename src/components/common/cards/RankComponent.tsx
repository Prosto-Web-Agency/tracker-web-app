import TRIcon from "../icon";
import ModalHeadliner from "../modal/ranks/ModalHeadliner";

export type TRank = {
    rank: "adviser" | "ambassador" | "expert" | "headliner" | "resident";
}

export enum Ranks {
    adviser = 'Эдвайзер',
    ambassador = 'Амбассадор',
    expert = 'Эксперт',
    headliner = 'Хедлайнер',
    resident = 'Резидент'
}

type RankComponentProps = {
    rank: TRank['rank'];
    onClick: () => void;
}

export default function RankComponent({ rank, onClick }: RankComponentProps) {
    return (
        <div
            className="w-full flex justify-center relative bg-white items-center py-2 h-[82px] min-h-[82px] rounded-full cursor-pointer"
            onClick={onClick}
        >
            <div className="absolute left-2">
                <TRIcon iconName={rank} edgeLength={68} />
            </div>

            <h4 className="text-heading-s text-black">
                { Ranks[rank] }
            </h4>
        </div>
    )
}
