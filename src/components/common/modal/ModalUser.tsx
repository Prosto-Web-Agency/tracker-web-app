import Image from "next/image"
import { TCardRate } from "../cards/mainPageCards/RateCard"

export default function ModalUser({ name, position, open, setModalData }: TCardRate) {
    return (
        <div onClick={() => setModalData({
            name: '',
            position: '',
            open: false,
        })}
            className={`p-10 w-screen h-screen bg-tr04 z-[100] backdrop-blur-sm fixed top-0 left-0 ${open ? 'flex' : 'hidden'} justify-center items-center`}
        >
            <div className="h-auto w-[600px] max-w-[600px] min-w-[330px] bg-orange-class px-5 pt-4 pb-6 text-white">
                
                <h4 className="text-heading-ss-bold flex justify-between">
                    Пользователь
                    <Image height={27} width={27} src={'/close.svg'} alt='person' />
                </h4>
                <div className="py-3 flex flex-col gap-1 items-center">
                    <Image height={90} width={90} src={'/delete/person.png'} alt='person' />
                    <p className="text-20_700">{name}</p>
                </div>
                <p className="h-auto text-12_500">
                    {position}
                </p>
            </div>
        </div>

    )
}