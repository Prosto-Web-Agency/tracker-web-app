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
    resident = 'Резидент',
    "new" = "Новичок",
    empty = "Участник"
}

type RankComponentProps = {
    rank: TRank['rank'];
    onClick: () => void;
    active: boolean;
}

enum smallRankColors {
    adviser = "linear-gradient(0deg, #CDC9C2, #CDC9C2), linear-gradient(339.03deg, rgba(255, 255, 255, 0) 52.79%, #FFFFFF 95.95%), linear-gradient(76.82deg, #576265 11.6%, #9EA1A1 25.31%, #848B8A 48.06%, #576265 55.72%, #576265 77.23%, #757A7B 85.34%, #576265 91.31%)",
    ambassador = "#FA8F11",
    expert = "#E3172B",
    headliner = "linear-gradient(0deg, #C2A75D, #C2A75D), linear-gradient(339.03deg, rgba(255, 255, 255, 0) 52.79%, #FFFFFF 95.95%), linear-gradient(76.82deg, #576265 11.6%, #9EA1A1 25.31%, #848B8A 48.06%, #576265 55.72%, #576265 77.23%, #757A7B 85.34%, #576265 91.31%)",
    resident = "#AA142F",
    "new" = "linear-gradient(90.18deg, #E01D31 0.78%, #FEA50F 100.48%)",
    empty = "linear-gradient(90.18deg, #E01D31 0.78%, #FEA50F 100.48%)"
}

export default function SmallRankComponent({ rank, onClick }: RankComponentProps) {
    return (
        <div
            className={`px-6 py-2 flex justify-center items-center h-[32px] min-h-[32px] rounded-full cursor-pointer`}
            style={{
                background: smallRankColors[rank]
            }}
            onClick={onClick}
        >
            {
                (rank !== 'new' && rank !== 'empty') ? (
                    <>
                        <h4 className="text-text-sm text-white">
                            { Ranks[rank] }
                        </h4>
                    </>
                ) : null
            }
        </div>
    )
}
