'use client'

import React, { useEffect } from 'react';
import TRIcon, { TRIcons } from '../icon';
import DatePickerComponent from '../datePickerComponent';
import classNames from "classnames";

interface PrimaryButtonProps {
    text: string;
    onClick: () => void;
    className?: string;
    leftIcon?: keyof typeof TRIcons;
    rightIcon?: keyof typeof TRIcons;
    type?: "datePicker";
    edgeLength?: number;
    size?: "small" | "default" | "big";
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
    text,
    onClick,
    className,
    edgeLength,
    leftIcon,
    rightIcon,
    type,
    size = "default"
}) => {
    const [title, setTitle] = React.useState<string>(text);

    useEffect(() => {
        setTitle(text);
    }, [text]);

    return (
        <button
            className={classNames(`flex justify-between items-center hover:bg-bg-gray transition px-4 w-full rounded-4 bg-white ${className}`, {
                ['h-10']: size === 'small',
                ['h-[50px]']: size === 'default',
                ['h-[60px]']: size === 'big'
            })}
            onClick={onClick}
        >
            {leftIcon && <TRIcon edgeLength={edgeLength} iconName={leftIcon}/>}
            <span className="text-transparent text-center w-full bg-clip-text bg-gradient-to-r from-[#E01D31] to-[#FEA50F]">
                {title}
            </span>
            {rightIcon && <TRIcon edgeLength={edgeLength} iconName={rightIcon}/>}
            {type === "datePicker" && (
                <DatePickerComponent
                    handleChangeDate={(date) => {
                        if (date) {
                            setTitle(date.format('MMMM YYYY'))
                        }
                    }}
                />
            )}
        </button>
    );
};

export default PrimaryButton;
