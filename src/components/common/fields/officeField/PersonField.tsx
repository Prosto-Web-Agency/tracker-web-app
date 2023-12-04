import Image from "next/image"

export default function PersonField() {
    return (
        <div className="flex w-full min-w-[364px] h-[265px] bg-white rounded-6 ss_lg:min-w-full">
            <div className="w-[193px]">
                <Image width={193} height={265} src={'/delete/man.png'} alt="man" />
                <div className="bg-orange-class absolute mt-[-50px] ml-13 text-white flex justify-center items-center py-2 px-5">
                    LVL: Ling
                </div>
            </div>
            <div className="flex flex-col justify-between p-6">
                <div className="text-heading-ss">
                    <p>Сергей</p>
                    <p>Анатолий</p>
                </div>
                <div className="text-text-sm">
                    <p>Tg: @skjbdfv</p>
                    <p>inst: @ssiofo</p>
                </div>
            </div>
        </div>
    )
}