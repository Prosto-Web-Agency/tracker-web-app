'use client'

import Link from "next/link";
import { motion } from "framer-motion";
import { TABS } from ".";
import { TTabs } from ".";

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
        <motion.div
            className="w-[120px] rounded-l-6 text-white rounded-b-6 bg-[#C61F08] px-4 pt-14 pb-8 absolute s_lg:top-4 top-6 right-5 z-[10] overflow-hidden"
            variants={headerVariants}
            initial='hidden'
            animate='visible'
        >
            <div className="flex flex-col items-end gap-4 text-15_600">
                {
                    TABS.map(({link, title}: TTabs) => (
                        <Link href={`${link}`}>
                            {title}
                        </Link>
                    ))
                }
            </div>
        </motion.div>
    )
}
