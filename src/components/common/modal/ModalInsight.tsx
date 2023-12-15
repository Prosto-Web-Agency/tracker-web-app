import Image from "next/image"
import { TInsightCardComponent } from "../cards/mainPageCards/InsightCard"

export default function ModalInsight({ first_name, text, open, setModalDataInsight }: TInsightCardComponent) {
    return (
        <div onClick={() => setModalDataInsight({
            name: '',
            text: '',
            open: false,
        })}
            className={`p-10 w-screen h-screen bg-tr04 z-[100] backdrop-blur-sm fixed top-0 left-0 ${open ? 'flex' : 'hidden'} justify-center items-center`}
        >
            <div className="h-auto min-h-[300px] max-h-[90%] w-[600px] max-w-[600px] min-w-[330px] bg-orange-class px-5 pt-4 pb-6 text-white">
                <div className="w-full flex justify-between pb-3">
                    <h4 className="text-heading-ss-bold flex justify-between">
                        {first_name}
                    </h4>

                    <Image
                        className="cursor-pointer"
                        height={27}
                        width={27}
                        src={'/close.svg'}
                        alt='person'
                    />
                </div>

                {/*<div className="py-3 flex gap-1 items-center">*/}
                {/*    <Image*/}
                {/*        className="rounded-4 h-[27px] w-[27px] object-cover"*/}
                {/*        height={27}*/}
                {/*        width={27}*/}
                {/*        src={'/delete/person.jpeg'}*/}
                {/*        alt='person'*/}
                {/*    />*/}
                {/*</div>*/}

                <p className="h-auto text-text-m h-full max-h-[90%] overflow-y-auto">
                    {text}
                </p>
            </div>
        </div>

    )
}
