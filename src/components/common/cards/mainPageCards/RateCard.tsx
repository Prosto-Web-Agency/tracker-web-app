import Image from "next/image"
import { useState } from "react"
import {TUserSmallData} from "@/models/userData";

export type TCardRate = TUserSmallData & {
    position: number
    open?: boolean
    setModalData?: any
}

export default function RateCard({
    first_name,
    surname,
    profile_image,
    task_count,
    position,
    setModalData
}: TCardRate) {
    const [modalDataUser, setModalDataUser] = useState({})

    const handleClick = (first_name: string, index: number) => {
        setModalDataUser({
            first_name,
            position: (String(index + 1)),
            open: true,
        })
        setModalData(modalDataUser)
    }

    return (
        <div
            className="w-full duration-100 cursor-pointer hover:border-2 border-white max-w-full h-[52px] items-center p-2 pr-5 rounded-full flex justify-between raiting-top-one"
            onClick={() => handleClick(first_name, position)}
        >
            <div className="flex h-[40px] justify-center items-center gap-2">
                {
                    profile_image ? (
                        <Image
                            className="rounded-10 max-h-[36px] min-h-[36px] min-w-[36px] object-cover"
                            width={36}
                            height={36}
                            src={profile_image}
                            alt='person'
                        />
                    ) : (
                        <div className="w-[36px] h-[36px] rounded-4 bg-bg-gray">

                        </div>
                    )
                }
                <Image
                    className="relative hidden visible"
                    width={9}
                    height={9}
                    src={'/crown.svg'}
                    alt='person'
                />

                <h5 className="flex items-center text-13_600 h-[34px] overflow-hidden overflow-ellipsis -webkit-line-clamp-2 clmp">
                    {first_name}
                    {surname}
                </h5>
            </div>

            <p className="text-heading-ss">
                {position}
            </p>
        </div>
    )
}
