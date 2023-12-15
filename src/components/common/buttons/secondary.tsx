'use client'

import React from 'react';
import TRIcon, { TRIcons } from '../icon';
import classNames from "classnames";

interface SecondaryButtonProps {
    text: string;
    onClick: () => void;
    className?: string;
    leftIcon?: keyof typeof TRIcons;
    rightIcon?: keyof typeof TRIcons;
    edgeLength?: number;
    size?: "small" | "default" | "big";
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({
    text,
    onClick,
    className,
    edgeLength,
    leftIcon,
    rightIcon,
    size = "default"
}) => {
    return (
        <button
            className={classNames(`w-full rounded-4 bg-gradient ${className}`, {
                ['h-10']: size === 'small',
                ['h-[50px]']: size === 'default',
                ['h-[60px]']: size === 'big'
            })}
            onClick={onClick}
        >
            {leftIcon && <TRIcon edgeLength={edgeLength} iconName={leftIcon}/>}
            <span className="text-white">
                {text}
            </span>
            {rightIcon && <TRIcon edgeLength={edgeLength} iconName={rightIcon}/>}
        </button>
    );
};

export default SecondaryButton;
