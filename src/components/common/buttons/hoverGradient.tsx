'use client';

import React, { useEffect } from 'react';
import TRIcon, { TRIcons } from '../icon';

interface HoverGradientButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
  leftIcon?: keyof typeof TRIcons;
  rightIcon?: keyof typeof TRIcons;
  type?: 'datePicker';
  edgeLength?: number;
}

const HoverGradientButton: React.FC<HoverGradientButtonProps> = ({
  text,
  onClick,
  className,
  edgeLength,
  leftIcon,
  rightIcon,
  type,
}) => {
  const [title, setTitle] = React.useState<string>(text);

  useEffect(() => {
    setTitle(text);
  }, [text]);

  return (
    <button
      className={`w-full hoveredMenu duration-300 hover:scale-[1.03] flex justify-center items-center rounded-4 mt-6 ss_lg:mt-4 min-w-[364px] py-5 ss_lg:min-w-full bg-white text-heading-ss-bold ss_lg:py-3 ${className}`}
      onClick={onClick}
    >
      {leftIcon && <TRIcon edgeLength={edgeLength} iconName={leftIcon} />}
      {title}
      {rightIcon && <TRIcon edgeLength={edgeLength} iconName={rightIcon} />}
    </button>
  );
};

export default HoverGradientButton;
