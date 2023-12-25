'use client';

import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import TRIcon from '@/components/common/icon';
import classNames from 'classnames';
import useResponsive from '@/hooks/useResponsive';

//@ts-ignore
function DoughnutChart({ labels, data, name, colors, iconName }) {
  const { isMobile } = useResponsive();

  return (
    <div
      className={classNames(
        'h-[175px] flex justify-center flex-col items-center',
        'lg:h-[110px]',
      )}
    >
      <div
        className={classNames(
          'flex justify-center h-[125px] w-[125px] relative',
          'lg:h-[90px] lg:w-[90px]',
        )}
      >
        <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
          <TRIcon iconName={iconName} edgeLength={isMobile ? 24 : 40} />
        </div>

        <Doughnut
          data={{
            labels,
            datasets: [
              {
                data,
                backgroundColor: colors || [],
                borderColor: colors || [],
                borderWidth: 1,
              },
            ],
          }}
          options={{
            plugins: {
              legend: {
                display: false,
              },
              datalabels: {
                display: false,
              },
            },
          }}
        />
      </div>

      <h4 className="flex w-full text-13_600 max-w-[55%] text-center justify-center pt-2 ss_lg:text-11_400">
        {name}
      </h4>
    </div>
  );
}

export default React.memo(DoughnutChart);
