import PersonField from "@/components/common/fields/officeField/PersonField";
import Image from "next/image";

export default function ProfileSettingsComponent() {
    return (
        <div className="bg-white rounded-6 w-[588px] h-[441px] flex">
            <button>
                <Image className="" width={282} height={441} src={'/delete/manDl.png'} alt="man" />
                <Image className="duration-300 hover:scale-[1.05] absolute mt-[-430px] ml-[225px]" width={46} height={46} src={'/addPhotoLogo.svg'} alt="camera logo" />
            </button>

            <div className="w-[306px] text-15_600 p-6 h-[441px] flex flex-col justify-around">
                <button className="w-full py-4 text-white bg-orange-class duration-300 hover:scale-[1.05]">
                    Сохранить
                </button>
                <button className="w-full py-4 duration-300 hover:scale-[1.05] coloredText">
                    Отменить
                </button>
            </div>
        </div>
    )
}