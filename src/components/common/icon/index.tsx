import React from 'react';

export const TRIcons = {
  tg: '/icons/tg.svg',
  inst: '/icons/inst.svg',
  tg_white: '/icons/tg-white.svg',
  tg_gradient: '/icons/tg_gradient.svg',
  inst_white: '/icons/inst-white.svg',
  adviser: '/icons/ranks/adviser.svg',
  ambassador: '/icons/ranks/ambassador.svg',
  expert: '/icons/ranks/expert.svg',
  headliner: '/icons/ranks/headliner.svg',
  resident: '/icons/ranks/resident.svg',
  new: '/icons/ranks/new.svg',
  empty: '/icons/ranks/empty.svg',
  loader: '/icons/loader.png',
  data: '/icons/data.svg',
  arrowLeft: '/icons/arrow-left.svg',
  emptyProfile: '/icons/empty-profile.svg',
  chartProductive: '/icons/chart-productive.svg',
  chartRelax: '/icons/chart-relax.svg',
  chartEmotional: '/icons/chart-emotional.svg',
  chartDiagrams: '/icons/chart-diagrams.svg',
  plusGradient: '/icons/plus-gradient.svg',
  subscribedUser: '/icons/subscribed-user.svg',
  projects: '/icons/metrics/projects.svg',
  balance: '/icons/metrics/balance.svg',
  sphears: '/icons/metrics/sphears.svg',
  time: '/icons/metrics/time.svg',
};

interface TRIconProps {
  iconName: keyof typeof TRIcons;
  edgeLength?: number;
  className?: string;
}

const TRIcon: React.FC<TRIconProps> = ({
  iconName,
  edgeLength = 24,
  className,
  ...rest
}: TRIconProps) => {
  return (
    <div
      style={{
        height: edgeLength,
        width: edgeLength,
        minHeight: edgeLength,
        minWidth: edgeLength,
      }}
      className={className}
    >
      <img
        className={'w-full h-full object-contain'}
        src={TRIcons[iconName]}
        alt={iconName}
        {...rest}
      />
    </div>
  );
};

export default TRIcon;
