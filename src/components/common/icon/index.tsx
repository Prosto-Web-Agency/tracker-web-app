import React from 'react';

export const TRIcons = {
    tg: '/icons/tg.svg',
    inst: '/icons/inst.svg',
    tg_white: '/icons/tg-white.svg',
    inst_white: '/icons/inst-white.svg',
    adviser: '/icons/ranks/adviser.svg',
    ambassador: '/icons/ranks/ambassador.svg',
    expert: '/icons/ranks/expert.svg',
    headliner: '/icons/ranks/headliner.svg',
    resident: '/icons/ranks/resident.svg',
    loader: '/icons/loader.svg',
    data: '/icons/data.svg',
    arrowLeft: '/icons/arrow-left.svg',
    emptyProfile: '/icons/empty-profile.svg',
    chartProductive: '/icons/chart-productive.svg',
    chartRelax: '/icons/chart-relax.svg',
    chartEmotional: '/icons/chart-emotional.svg',
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
            <img className={'w-full h-full object-contain'} src={TRIcons[iconName]} alt={iconName} {...rest} />
        </div>
    );
};

export default TRIcon;
