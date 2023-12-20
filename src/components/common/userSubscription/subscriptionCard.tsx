
import { useState } from "react";
import Image from "next/image";
import {TUserSubscriptionModal} from "@/models/userData";

export default function SubscriptionCard({ image_url, streamer_name }: TUserSubscriptionModal) {
    const [nameOfOpenImage, setNameOfOpenImage] = useState('');

    return (
        <div className="w-full py-4 gap-4 border-b-[0.5px] border-black duration-100 hover:scale-[1.002] scale-1 flex">
            {
                image_url ? (
                    <Image
                        className="min-w-[60px] h-[60px] object-cover rounded-10 cursor-pointer hover:scale-105 transition-transform"
                        width={60}
                        height={60}
                        src={image_url}
                        alt={image_url}
                    />
                ) : null
            }

            <div className="flex flex-col gap-2">
                <h5 className="text-text-sm-bold">
                    {streamer_name}
                </h5>

                <p className='text-text-sm' style={{ whiteSpace: 'pre-wrap' }}>
                    Владелец компании «Аброникс» (производство бутилированной воды «Славная»)
                    Александр Усенок рассказал, сколько стоит начать водный бизнес в Беларуси.
                </p>
            </div>
        </div>
    )
}
