import React from 'react';
import TRIcon, { TRIcons } from '../icon';

interface SecondaryButtonProps {
    text: string;
    onClick: () => void;
    className?: string;
    leftIcon?: keyof typeof TRIcons;
    rightIcon?: keyof typeof TRIcons;
    edgeLength?: number;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({
    text,
    onClick,
    className,
    edgeLength,
    leftIcon,
    rightIcon
}) => {
    return (
        <button
            className={`h-[50px] w-full rounded-4 bg-gradient ${className}`}
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
