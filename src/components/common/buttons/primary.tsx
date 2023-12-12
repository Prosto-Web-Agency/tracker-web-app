import React from 'react';
import TRIcon, { TRIcons } from '../icon';

interface TRIcons {
    [key: string]: React.ReactNode;
}

interface PrimaryButtonProps {
    text: string;
    onClick: () => void;
    className?: string;
    leftIcon?: keyof typeof TRIcons;
    rightIcon?: keyof typeof TRIcons;
    edgeLength?: number;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ text, onClick, className, edgeLength, leftIcon, rightIcon }) => {
    const TRIcons: TRIcons = {
        // Define your TRIcons here
    };

    return (
        <button className={`h-[50px] w-full rounded-4 bg-white ${className}`} onClick={onClick}>
            {leftIcon && <TRIcon edgeLength={edgeLength} iconName={leftIcon}/>}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E01D31] to-[#FEA50F]">{text}</span>
            {rightIcon && <TRIcon edgeLength={edgeLength} iconName={rightIcon}/>}
        </button>
    );
};

export default PrimaryButton;
