import Image from "next/image";

export type TAchievCard = {
    image: string
    name: string
    achieveName: string
}

export default function AchievmentCard({image, name, achieveName}: TAchievCard) {
    return (
        <div className="w-full min-w-[230px] pt-2 pb-6 h-full flex flex-col justify-between items-center">
            <div className="flex flex-col items-center gap-2">
                <Image width={90} height={90} src={image ?? '/crown.svg'} alt='person' />
                <div className="text-white text-center text-16_700 py-2">
                    <h5>Поздравляем</h5>
                    <p>{name}</p>
                </div>
            </div>

            <div className="bg-white w-full h-[50px] rounded-full text-17_500 flex justify-center items-center px-9">
                {achieveName}
            </div>
        </div>
    )
}