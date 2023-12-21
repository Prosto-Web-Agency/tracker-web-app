'use client'

import Link from "next/link";
import { motion } from "framer-motion";
import { TABS } from ".";
import { TTabs } from ".";
import Image from "next/image";

const headerVariants = {
    hidden: {
        y: '-50vh',
    },
    visible: {
        y: '0vh',
        transition: {
            duration: 1,
        }
    },
}

export default function HeaderMenu() {
    return (
        <div className="w-screen h-screen bg-tr04 z-[100] backdrop-blur-sm fixed top-0 left-0">
            <motion.div
                className="w-[170px] rounded-l-6 text-white rounded-b-6 bg-white px-4 py-6 absolute s_lg:top-16 top-16 right-5 z-[100] overflow-hidden"
                variants={headerVariants}
                initial='hidden'
                animate='visible'
            >
                <div className="flex flex-col items-end gap-6 text-15_600">
                    <Link href={'/profile'}>
                        <Image className="w-[48px] h-[48px] rounded-10" height={48} width={48} src={'/delete/person.jpeg'} alt='person' />
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
