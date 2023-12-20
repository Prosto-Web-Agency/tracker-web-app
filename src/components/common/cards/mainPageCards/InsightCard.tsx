import {TInsightCard} from "@/models/traker";
import TRIcon from "@/components/common/icon";

export type TInsightCardComponent = Omit<TInsightCard, "login" | "is_anon"> & {
    open?: boolean;
    setModalDataInsight?: any;
}

type TInsight = {
    setModalData: any;
    login: string | null;
}

export default function InsightCard({ first_name, text, setModalData, login }: TInsightCardComponent & TInsight ) {
    return (
        <div className="h-[192px] cursor-pointer w-[330px] min-w-[330px] bg-orange-class px-5 pt-4 pb-6 text-white border-2 duration-100 hover:border-0 border-white">
            <div
                className="flex gap-2 items-center pb-3 hover:underline transition"
                onClick={(event) => {
                    event.stopPropagation();
                    setModalData(login);
                }}
            >
                <div className="flex justify-center items-center w-[36px] h-[36px] rounded-10 bg-bg-gray">
                    <TRIcon iconName={'emptyProfile'} edgeLength={18} />
                </div>

                <h4 className="text-text-m-bold">
                    {first_name}
                </h4>
            </div>

            <p className="h-[86px] overflow-hidden text-12_500">
                {text}
            </p>
        </div>
    )
}
