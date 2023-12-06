import Image from "next/image"

export type TCardInsait = {
    header: string
    name: string
    text: string
    open?: boolean
    setModalDataInsait?: any
}

export default function InsaitCard({ header, name, text }: TCardInsait) {
    return (
        <div className="h-[192px] w-[330px] min-w-[330px] bg-orange-class px-5 pt-4 pb-6 text-white border-2 duration-100 hover:border-0 border-white">
            <h4 className="text-heading-ss-bold">
                {header}
            </h4>
            <div className="py-3 flex gap-1 items-center">
                <Image height={27} width={27} src={'/delete/person.png'} alt='person' />
                <p className="text-13_600">{name}</p>
            </div>
            <p className="h-[86px] overflow-hidden text-12_500">
                {text}
            </p>
        </div>
    )
}