import TRIcon from "../icon";
import classNames from "classnames";
import useResponsive from "@/hooks/useResponsive";

export type TRank = {
    rank: "adviser" | "ambassador" | "expert" | "headliner" | "resident" | "new" | "empty";
}

export enum Ranks {
    adviser = 'Эдвайзер',
    ambassador = 'Амбассадор',
    expert = 'Эксперт',
    headliner = 'Хедлайнер',
    resident = 'Резидент',
    "new" = 'Участник',
    empty = 'Новичок'
}

type RankComponentProps = {
    rank: TRank['rank'];
    onClick: () => void;
    active: boolean;
}

export default function RankComponent({ rank, onClick, active }: RankComponentProps) {
    const { isMobile } = useResponsive();

    return (
        <div
            className={classNames("w-full flex justify-center relative bg-white items-center py-2 h-[82px] min-h-[82px] rounded-full cursor-pointer", {
                ['opacity-40 hover:opacity-80']: !active
            },
                "md:h-[42px] md:min-h-[42px]"
            )}
            onClick={onClick}
        >
            <div className="absolute left-2">
                <TRIcon
                    iconName={rank}
                    edgeLength={isMobile ? 40 : 68}
                />
            </div>

            <h4 className={classNames(
                "text-heading-s text-black",
                "md:text-text-s"
            )}>
                { Ranks[rank] }
            </h4>
        </div>
    )
}
