import { Slider } from '@mui/material';
import Image from 'next/image';
import classNames from 'classnames';

export type TSliderBalance = {
  name: string;
  image: string;
  setData?: any;
  value?: number;
};

export default function SliderBalance({
  name,
  image,
  setData,
  value = 0,
}: TSliderBalance) {
  return (
    <div
      className={classNames(
        'flex gap-8 items-center pl-6',
        'lg:flex-col lg:items-start lg:gap-2 lg:pl-0',
      )}
    >
      <div
        className={classNames(
          'flex text-18 justify-end font-bold w-[230px] items-center gap-4',
          'lg:justify-start',
        )}
      >
        <p>{name}</p>
        <Image height={22} width={24} src={image} alt="RECs" />
      </div>

      <div className="w-full flex items-center mt-1">
        <Slider
          aria-label={name}
          defaultValue={value}
          valueLabelDisplay="auto"
          step={1}
          min={0}
          max={10}
          //@ts-ignore
          onChange={(e) => setData(e.target.value)}
        />
      </div>
    </div>
  );
}
