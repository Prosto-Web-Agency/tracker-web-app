import Image from "next/image"

export type TCardRate = {
    name: string
    position: string
    open?: boolean
    setModalData?: any
}

export default function RateCard({name, position}: TCardRate) {
    return (
        <div className="w-full max-w-[278px] xx_lg:max-w-full h-[52px] items-center p-2 pr-5 rounded-full flex justify-between raiting-top-one">
            <div className="flex h-[40px] justify-center items-center gap-2">
                <Image className="rounded-10 max-h-[36px] min-w-[36px] object-cover" width={36} height={36} src={'/delete/person.jpeg'} alt='person' />
                <Image className="relative hidden visible" width={9} height={9} src={'/crown.svg'} alt='person' />
                <h5 className="text-13_600">
                    {name}
                </h5>
            </div>
            <p className="text-heading-ss">
                {position}
            </p>
        </div>
    )
}