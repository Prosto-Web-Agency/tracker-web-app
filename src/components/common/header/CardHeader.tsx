'use client'

import React from "react";
import TRIcon, {TRIcons} from "@/components/common/icon";
import classNames from "classnames";

export type TCardHeader = {
    title: string;
    iconName?: keyof typeof TRIcons;
    size?: 'small' | 'default';
    onIconClick?: () => void;
};

export default function CardHeader({ iconName, title, size = 'default', onIconClick }: TCardHeader) {
    return (
        <div className={classNames("absolute flex items-center text-heading-s box-border", {
            ['justify-center w-[calc(100%-80px)] min-h-[80px] h-[80px] lg:max-h-[70px] bg-white']: size === 'default',
            ['justify-start w-full px-6 min-h-[50px] h-[50px] lg:max-h-[50px]']: size === 'small',
        })}>
            {
                iconName ? (
                    <div onClick={onIconClick} className="absolute left-0 cursor-pointer">
                        <TRIcon iconName={'arrowLeft'}/>
                    </div>
                ) : null
            }

            <h3
                className={"bg-white py-2 px-4 text-text-m-bold rounded-4"}>
                {title}
            </h3>
        </div>
    )
}
