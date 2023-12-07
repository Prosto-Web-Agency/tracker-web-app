import Image from "next/image";

export type TAchieveOfficeCard = {
    image: string
    name: string
}

export default function AchieveOfficeCard({image, name}: TAchieveOfficeCard) {
    return (
        <div className="w-full flex justify-center bg-[#E3172B] items-center pr-6 h-[71px] rounded-full border-2 border-white">
            <h4 className="text-heading-ss-bold text-white">
                Эксперт
            </h4>
        </div>
    )
}