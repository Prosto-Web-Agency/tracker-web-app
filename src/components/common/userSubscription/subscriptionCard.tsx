
import React, { useState } from "react";
import Image from "next/image";
import type { TUserSubscriptionsReport } from "@/models/userData";
import TRIcon from "@/components/common/icon";

function SubscriptionCard({ report_text, first_name, image_url, login, is_anon, rank }: TUserSubscriptionsReport) {
    const [nameOfOpenImage, setNameOfOpenImage] = useState('');

    return (
        <div className="w-full py-4 gap-4 border-b-[0.5px] border-black duration-100 hover:scale-[1.002] scale-1 flex">
            <div className="flex h-[60px] pb-1 pr-1 relative">
                <div className="absolute z-10 bottom-[2px] right-[2px]">
                    <TRIcon iconName={rank} edgeLength={24} />
                </div>

                {
                    image_url ? (
                        <Image
                            className="min-w-[60px] h-[60px] object-cover rounded-10 cursor-pointer hover:scale-105 transition-transform"
                            width={60}
                            height={60}
                            src={image_url}
                            alt={image_url}
                        />
                    ) : (
                        <div className="flex justify-center items-center w-[60px] h-[60px] rounded-10 bg-bg-gray">
                            <Image
                                width={60}
                                height={60}
                                className={'min-w-[60px] min-h-[60px] object-cover rounded-10'}
                                src={'/empty-user-icon.jpeg'}
                                alt={'empty profile'}
                            />
                        </div>
                    )
                }
            </div>

            <div className="flex flex-col gap-2">
                <h5 className="text-text-sm-bold">
                    {first_name}
                </h5>

                <p className='text-text-sm' style={{ whiteSpace: 'pre-wrap' }}>
                    {report_text}
                </p>
            </div>
        </div>
    )
}

export default React.memo(SubscriptionCard);
