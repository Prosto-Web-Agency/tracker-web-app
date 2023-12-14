import Image from "next/image"
import PrimaryButton from "../buttons/primary"
import Link from "next/link";

interface IModalUser {
    name: string;
    position: string;
    tg_username: string;
    instagram: string;
    open?: boolean;
    setModalData?: any;
    userStatus: string;
    userAchievements: string[];
}

export default function ModalUser({
    name,
    tg_username,
    instagram,
    open,
    setModalData,
    userStatus,
    userAchievements
}: IModalUser) {

    return (
        <div
            onClick={() => setModalData({ name: '', position: '', open: false })}
            className={`p-10 w-screen h-screen bg-tr04 z-[100] backdrop-blur-sm fixed top-0 left-0 ${open ? 'flex' : 'hidden'} justify-center items-center`}
            >
            <div
                onClick={(e) => e.stopPropagation()}
                className="flex flex-col gap-8 h-auto w-[500px] max-w-[500px] min-w-[330px] bg-orange-class px-5 pt-4 pb-6 text-white"
             >
                <div className="flex w-full justify-between">
                    <h4 className="text-heading-s flex justify-between">
                        Пользователь
                    </h4>

                    <Image
                        onClick={() => setModalData({ name: '', position: '', open: false })}
                        className="w-[24px] h-[24px] object-cover"
                        height={27}
                        width={27}
                        src={'/close.svg'}
                        alt='person'
                    />
                </div>

                <div className="py-3 flex flex-col items-center">
                    <Image
                        className="rounded-[45px] h-[90px] w-[90px] object-cover"
                        height={90}
                        width={90}
                        src={'/delete/person.jpeg'}
                        alt='person'
                    />

                    <p className="text-20_700 pt-3">
                        {name}
                    </p>

                    <p>
                        {userStatus}
                    </p>

                    <div className="flex gap-2 pt-3">
                        <Link href={`https://t.me/${tg_username}`}>
                            <PrimaryButton
                                text=""
                                edgeLength={32}
                                leftIcon="tg"
                                className="px-6 rounded-6"
                                onClick={() => undefined}
                            />
                        </Link>
                        <Link href={`https://www.instagram.com/${instagram}`}>
                            <PrimaryButton
                                text=""
                                edgeLength={32}
                                leftIcon="inst"
                                className="px-6 rounded-6"
                                onClick={() => undefined}
                            />
                        </Link>
                    </div>
                </div>

                {
                    userAchievements ? (
                        <div className="flex flex-col gap-3">
                            {
                                userAchievements.map((achieve) => (
                                    <div
                                        className="flex justify-center items-center w-full h-[50px] bg-white text-black rounded-6"
                                        key={achieve}
                                    >
                                        {achieve}
                                    </div>
                                ))
                            }
                        </div>
                    ) : null
                }
                
                <PrimaryButton
                    text="Подписаться"
                    onClick={() => setModalData({ name: '', position: '', open: false })}
                />
            </div>
        </div>

    )
}