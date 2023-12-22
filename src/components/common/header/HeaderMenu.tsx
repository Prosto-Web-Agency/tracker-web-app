'use client'

import Link from "next/link";
import { motion } from "framer-motion";
import { TABS } from ".";
import { TTabs } from ".";
import Image from "next/image";
import TRIcon from "@/components/common/icon";
import React from "react";

const headerVariants = {
    hidden: {
        x: '50vw',
    },
    visible: {
        x: '0vw',
        transition: {
            duration: 1,
        }
    },
}

export default function HeaderMenu() {
    //@ts-ignore
    const { userData }: { userData: TUserDataState } = useSelector(state => state.user);

    return (
        <div className="w-screen h-screen bg-tr04 z-[100] backdrop-blur-sm fixed top-0 left-0">
            <motion.div
                className="w-[170px] h-auto rounded-l-6 text-white rounded-b-6 bg-white px-4 py-6 absolute s_lg:top-16 top-16 right-5 z-[100] overflow-hidden"
                variants={headerVariants}
                initial='hidden'
                animate='visible'
            >
                <div className="flex flex-col items-end gap-6 text-15_600">
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
                                    <TRIcon iconName={'emptyProfile'} />
                                </div>
                            )
                        }
                    </Link>

                    {
                        TABS.map(({ link, title }: TTabs) => (
                            <Link className="bg-orange-class w-[110px] flex justify-center items-center py-2" key={link + title} href={`${link}`}>
                                {title}
                            </Link>
                        ))
                    }
                </div>
            </motion.div>
        </div>

    )
}
