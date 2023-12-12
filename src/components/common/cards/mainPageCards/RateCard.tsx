import Image from "next/image"
import { useState } from "react"

export type TCardRate = {
    name: string
    position: number
    open?: boolean
    setModalData?: any
}

export default function RateCard({ 
    name, 
    position, 
    setModalData 
}: TCardRate) {
    const [modalDataUser, setModalDataUser] = useState({})

    const handleClick = (e: string, index: number) => {
        setModalDataUser({
            name: e,
            position: (String(index + 1)),
            open: true,
        })
        setModalData(modalDataUser)
    }

    return (
        <div
            className="w-full duration-100 hover:border-2 border-white max-w-full h-[52px] items-center p-2 pr-5 rounded-full flex justify-between raiting-top-one"
            onClick={() => handleClick(name, position)}
        >
            <div className="flex h-[40px] justify-center items-center gap-2">
                <Image 
                    className="rounded-10 max-h-[36px] min-w-[36px] object-cover" 
                    width={36} 
                    height={36} 
                    src={'/delete/person.jpeg'} 
                    alt='person' 
                />
                <Image 
                    className="relative hidden visible" 
                    width={9} 
                    height={9} 
                    src={'/crown.svg'} 
                    alt='person' 
                />
                <h5 className="text-13_600 h-[34px] overflow-hidden overflow-ellipsis -webkit-line-clamp-2 clmp">
                    {name}
                </h5>
            </div>
            <p className="text-heading-ss">
                {position}
            </p>
        </div>
    )
}