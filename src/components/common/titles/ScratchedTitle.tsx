import React from 'react';

interface ScratchedTitleProps {
  title: string;
  className?: string;
}

const ScratchedTitle: React.FC<ScratchedTitleProps> = ({
  title,
  className,
}) => {
  return <p className={'line-through ' + className}>{title}</p>;
};

export default ScratchedTitle;
