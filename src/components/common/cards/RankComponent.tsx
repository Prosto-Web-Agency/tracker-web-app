import TRIcon from "../icon";
import classNames from "classnames";

export type TRank = {
    rank: "adviser" | "ambassador" | "expert" | "headliner" | "resident" | "new" | "empty";
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
    active: boolean;
}

export default function RankComponent({ rank, onClick, active }: RankComponentProps) {
    return (
        <div
            className={classNames("w-full flex justify-center relative bg-white items-center py-2 h-[82px] min-h-[82px] rounded-full cursor-pointer", {
                ['opacity-70 hover:opacity-80']: !active
            })}
            onClick={onClick}
        >
            {
                (rank !== 'new' && rank !== 'empty') ? (
                    <>
                        <div className="absolute left-2">
                            <TRIcon iconName={rank} edgeLength={68} />
                        </div>

                        <h4 className="text-heading-s text-black">
                            { Ranks[rank] }
                        </h4>
                    </>
                ) : null
            }
        </div>
    )
}
