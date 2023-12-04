import Image from "next/image";

export type TAchieveOfficeCard = {
    image: string
    name: string
}

export default function AchieveOfficeCard({image, name}: TAchieveOfficeCard) {
    return (
        <div className="w-full flex justify-between items-center pr-6 h-[71px] rounded-full border-2 border-white">
            <Image className="" height={71} width={71} src='/delete/delete.png' alt='achieve'/>

            <h4 className="text-heading-ss-bold text-white">
                Назавние ачивки
            </h4>
        </div>
    )
}