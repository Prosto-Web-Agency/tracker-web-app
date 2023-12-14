import React, { useEffect } from 'react';
import TRIcon, { TRIcons } from '../icon';
import DatePickerComponent from '../datePickerComponent';

interface PrimaryButtonProps {
    text: string;
    onClick: () => void;
    className?: string;
    leftIcon?: keyof typeof TRIcons;
    rightIcon?: keyof typeof TRIcons;
    type?: "datePicker";
    edgeLength?: number;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ text, onClick, className, edgeLength, leftIcon, rightIcon, type }) => {
    const [title, setTitle] = React.useState<string>(text);

    useEffect(() => {
        setTitle(text);
    }, [text]);

    return (
        <button
            className={`flex justify-between items-center px-4 h-[50px] w-full rounded-4 bg-white ${className}`}
            onClick={onClick}
        >
            {leftIcon && <TRIcon edgeLength={edgeLength} iconName={leftIcon}/>}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E01D31] to-[#FEA50F]">
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
