import React from 'react';

export const TRIcons = {
    tg: '/icons/tg.svg',
    inst: '/icons/inst.svg',
}

interface TRIconProps {
    iconName: keyof typeof TRIcons;
    edgeLength?: number;
    className?: string;
}

const TRIcon: React.FC<TRIconProps> = ({ iconName, edgeLength = 24, className, ...rest }: TRIconProps) => {
    return (
        <div
            style={{
                height: edgeLength,
                width: edgeLength
            }}
            className={className}
        >
            <img src={TRIcons[iconName]} alt={iconName} {...rest} />
        </div>
    );
};

export default TRIcon;
