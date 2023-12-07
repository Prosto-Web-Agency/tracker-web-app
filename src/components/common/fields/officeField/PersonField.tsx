import Image from "next/image"

export default function PersonField() {
    return (
        <div className="flex w-full min-w-[364px] h-[265px] bg-white rounded-6 ss_lg:min-w-full">
            <div className="w-[193px]">
                <Image className="w-[200px] h-[265px] object-cover rounded-4" width={193} height={265} src={'/delete/person.jpeg'} alt="man" />
                <div className="bg-orange-class absolute mt-[-50px] ml-13 text-white flex justify-center items-center py-2 px-5">
                    LVL: King
                </div>
            </div>
            <div className="flex flex-col justify-between p-6">
                <div className="text-heading-ss">
                    <p>Лев</p>
                    <p>Лавров</p>
                </div>
                <div className="text-text-sm">
                    <p>Tg: @Lion_arr</p>
                    <p>inst: @levlavrov</p>
                </div>
            </div>
        </div>
    )
}