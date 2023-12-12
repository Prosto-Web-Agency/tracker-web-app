import Image from "next/image"
import SecondaryButton from "../../buttons/secondary"

export default function PersonField() {
    return (
        <div className="flex w-full min-w-[364px] h-[225px] big_screen_h:h-[calc(40vh-114px)] bg-white rounded-6 ss_lg:min-w-ful">
            <div className="w-[193px]">
                <Image className="w-[200px] h-[225px] big_screen_h:h-[calc(40vh-114px)] object-cover rounded-4" width={193} height={265} src={'/delete/person.jpeg'} alt="man" />
                <div className="bg-orange-class absolute mt-[-50px] ml-13 text-white flex justify-center items-center py-2 px-5">
                    LVL: King
                </div>
            </div>

            <div className="flex flex-col justify-between p-6">
                <div className="text-heading-ss">
                    <p>Лев</p>
                    <p>Лавров</p>
                </div>
                <div className="flex flex-col gap-1">
                    <SecondaryButton className="flex gap-1 rounded-5 px-4 justify-center items-center h-10" onClick={() => undefined} leftIcon="tg_white" text="tg" />
                    <SecondaryButton className="flex gap-1 rounded-5 px-4 justify-center items-center h-10" onClick={() => undefined} leftIcon="inst_white" text="inst" />
                </div>
            </div>
        </div>
    )
}