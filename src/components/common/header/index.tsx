import Image from "next/image";
import Link from "next/link";

export default function Header({ title, isUnAuth }: { title?: string, isUnAuth?: boolean }) {

    return (
        <header className="bg-transparent w-full h-[100px] bg-black sm:h-[75px]">
            <div className="mx-auto w-full max-w-[1400px] h-full flex justify-between items-center">
                <div className="flex items-center gap-2 px-6">
                    <Image className="md:h-[27px] md:w-[27px]" height={48} width={48} src={'/logo.svg'} alt='RECs' />
                    <h1 className="RECsText text-heading-m md:text-text-m-bold">
                        Rec’s Tracker
                    </h1>
                </div>
            </div>
        </header>
    )
}