'use client'

import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import HeaderMenu from "./HeaderMenu";
import classNames from "classnames";
import {TUserDataState} from "@/store/reducers/userReducer";
import {useSelector} from "react-redux";
import TRIcon from "@/components/common/icon";
import PrimaryButton from "@/components/common/buttons/primary";
import {logout} from "@/utils/logout";
import {useRouter} from "next/navigation";

export type TTabs = {
    link: string
    title: string
}

export const TABS: TTabs[] = [
    {
        link: '/',
        title: 'Главная',
    },
    {
        link: '/subscription',
        title: 'Купить',
    },
    {
        link: 'https://t.me/RecsTraker_bot',
        title: 'Трекер',
    },
    {
        link: '/balance',
        title: 'Чекап',
    },
    {
        link: '/reports',
        title: 'Подписки'
    }
]

const path01Variants = {
    open: { d: 'M3.06061 2.99999L21.0606 21' },
    closed: { d: 'M0 9.5L24 9.5' },
}
const path02Variants = {
    open: { d: 'M3.00006 21.0607L21 3.06064' },
    closed: { d: 'M0 14.5L24 14.5' },
}
const path03Variants = {
    open: { d: 'M0 0L0 0', opacity: 0 },
    closed: { d: 'M0 19.5L24 19.5', opacity: 1 },
}

export default function Header({ title, isUnAuth }: { title?: string, isUnAuth?: boolean }) {
    const router = useRouter();
    const [openMenu, setOpenMenu] = useState(false);
    const [activeTab, setActiveTab] = useState('Главная');
    const [isOpen, setOpen] = useState(false);
    const [isProfilePage, setProfilePage] = useState(false);
    //@ts-ignore
    const { userData }: { userData: TUserDataState } = useSelector(state => state.user);

    const path01Controls = useAnimation();
    const path02Controls = useAnimation();
    const path03Controls = useAnimation();

    const changeMenuState = async (e: boolean) => {
        setOpen(!isOpen);
        setOpenMenu(e)

        if (!isOpen) {
            path01Controls.start(path01Variants.open);
            path02Controls.start(path02Variants.open);
            path03Controls.start(path03Variants.open);
        } else {
            path01Controls.start(path01Variants.closed);
            path02Controls.start(path02Variants.closed);
            path03Controls.start(path03Variants.closed);
        }
    };

    useEffect(() => {
        TABS.map(({link, title}) => link === window.location.pathname && setActiveTab(title));

        if (window.location.pathname === '/profile') {
            setActiveTab('empty')
        } else if (window.location.pathname === '/balance/checkout') {
            setActiveTab('Чекап')
        }

        setProfilePage(window.location.pathname === '/profile');
    }, []);

    function handleLogout() {
        logout();
        router.push('/');
    }

    return (
        <>
            <header className="bg-transparent s_lg:bg-bg-gray w-full h-[90px] bg-black sm:h-[75px] overflow-hidden">
                <div className="mx-auto w-full max-w-[1400px] h-full flex justify-between items-center">
                    <Link href={'/'} className="flex items-center gap-2 px-6">
                        <Image className="md:h-[27px] md:w-[27px]" height={48} width={48} src={'/logo.svg'} alt='RECs' />
                        <h1 className="RECsText text-text-m-bold">
                            TRAKER STATS
                        </h1>
                    </Link>

                    <div className="flex gap-6 pr-6 items-center lg:hidden">
                        <div className="flex flex-row gap-6 items-center">
                            {
                                TABS.map(({ link, title }: TTabs) => (
                                    <Link
                                        className={classNames("flex gap-2 py-2 max-h-[36px] duration-300 hover:scale-[1.03] w-[135px] text-heading-ss-bold justify-center rounded-full bg-bg-gray hoveredMenu items-center", {
                                            ['activeMenu']: activeTab === title
                                        })}

                                        key={link + title}
                                        href={`${link}`}
                                    >
                                        {title}

                                        {
                                            title === 'Трекер' ? (
                                                <TRIcon iconName={'tg_gradient'} edgeLength={24} />
                                            ) : null
                                        }
                                    </Link>
                                ))
                            }
                        </div>

                        {
                            isProfilePage ? (
                                <PrimaryButton size={'small'} text={'Выйти'} onClick={handleLogout} />
                            ) : (
                                <Link href={'/profile'}>
                                    {
                                        userData?.image_url ? (
                                            <Image
                                                className="w-[48px] h-[48px] rounded-10 object-cover"
                                                height={48}
                                                width={48}
                                                src={userData.image_url}
                                                alt='person'
                                            />
                                        ) : (
                                            <div className="flex justify-center items-center w-[48px] h-[48px] rounded-10 bg-bg-gray">
                                                <Image
                                                    width={48}
                                                    height={48}
                                                    className={'w-[48px] h-[48px] object-cover rounded-20'}
                                                    src={'/empty-user-icon.jpeg'}
                                                    alt={'empty profile'}
                                                />
                                            </div>
                                        )
                                    }
                                </Link>
                            )
                        }
                    </div>


                    <button
                        onClick={() => changeMenuState(!openMenu)}
                        className="hidden h-[90px] z-[110] justify-center items-center pr-[30px] lg:flex">

                        <svg width='25' height='25' viewBox='0 0 24 24'>
                            <motion.path
                                {...path01Variants.closed}
                                animate={path01Controls}
                                transition={{ duration: 0.7 }}
                                stroke={`${!isOpen ? '#DF1A32' : '#DF1A32'}`}
                                strokeWidth='2'
                                strokeLinecap='round'
                            />
                            <motion.path
                                {...path02Variants.closed}
                                animate={path02Controls}
                                transition={{ duration: 0.7 }}
                                stroke={`${!isOpen ? '#DF1A32' : '#DF1A32'}`}
                                strokeWidth='2'
                                strokeLinecap='round'
                            />
                            <motion.path
                                {...path03Variants.closed}
                                animate={path03Controls}
                                transition={{ duration: 0.7 }}
                                stroke='#DF1A32'
                                strokeWidth='2'
                                strokeLinecap='round'
                            />
                        </svg>
                    </button>

                </div>
            </header>

            <>
                {
                    openMenu
                        ? <HeaderMenu />
                        : null
                }
            </>
        </>
    )
}
