import type {TInsightCard} from "@/models/traker";
import TRIcon from "@/components/common/icon";
import Image from "next/image";
import React from "react";

export type TInsightCardComponent = Omit<TInsightCard, "login" | "is_anon"> & {
    open?: boolean;
    setModalDataInsight?: any;
}

type TInsight = {
    setModalData: any;
    login: string | null;
}

function InsightCard({ first_name, text, setModalData, login, image_url, rank }: TInsightCardComponent & TInsight ) {
    return (
        <div className="h-[192px] cursor-pointer w-[330px] min-w-[330px] bg-orange-class px-5 pt-4 pb-6 text-white border-2 duration-100 hover:border-0 border-white">
            <div
                className="flex gap-2 items-center pb-3 hover:underline transition"
                onClick={(event) => {
                    event.stopPropagation();
                    setModalData(login);
                }}
            >
                <div className="flex items-end pb-1 pr-1 relative">
                    <div className="absolute z-10 bottom-1 right-1">
                        <TRIcon iconName={rank} edgeLength={12} />
                    </div>

                    {
                        image_url ? (
                            <Image
                                className="w-[36px] h-[36px] object-cover rounded-6"
                                height={36}
                                width={36}
                                src={image_url}
                                alt="avatar"
                            />
                        ) : (
                            <Image
                                width={36}
                                height={36}
                                className={'w-[36px] h-[36px] object-cover rounded-10'}
                                src={'/empty-user-icon.jpeg'}
                                alt={'empty profile'}
                            />
                        )
                    }
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

export default React.memo(InsightCard);
