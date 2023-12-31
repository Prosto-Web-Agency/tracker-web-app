'use client';

import DoughnutChart from '@/components/common/charts/diagrams/DoughnutChart';
import React from 'react';
import TRIcon from '@/components/common/icon';
import { TDiagram, TUserDiagrams } from '@/models/charts';
import { CHART_COLORS } from '@/consts/chart';
import classNames from 'classnames';

const DIAGRAMS_TITLE = [
  {
    name: 'Рабочие проекты',
    icon: 'projects',
  },
  {
    name: 'Work-Life Balance',
    icon: 'balance',
  },
  {
    name: 'Life сферы',
    icon: 'sphears',
  },
  {
    name: 'Потраченное время',
    icon: 'time',
  },
];

function DiagramsFieldOffice({ diagrams }: { diagrams: TUserDiagrams | null }) {
  return (
    <div className="bg-white rounded-6 h-[680px] sx_lg:h-[740px] p-6 pt-3 ss_lg:h-auto">
      <h4 className="text-heading-ss-bold">Диаграммы отчёта</h4>

      <div
        className={classNames(
          'w-full h-[400px] pt-[100px] justify-center items-center flex flex-wrap gap-10',
          'lg:flex-col lg:gap-[30px] lg:pt-10',
        )}
      >
        {diagrams ? (
          diagrams.lifeBalance?.data?.length ? (
            <>
              {Object.values(diagrams)?.map((diagram: TDiagram, index) => (
                <DoughnutChart
                  key={index + 'diagrams'}
                  colors={(diagram?.dots ?? []).map(
                    (_, id) => CHART_COLORS[index][id % 5],
                  )}
                  name={DIAGRAMS_TITLE[index].name}
                  iconName={DIAGRAMS_TITLE[index].icon}
                  labels={
                    (diagram?.data ?? []).length
                      ? diagram?.data ?? []
                      : (diagram?.dots ?? []).map((_, id) => String(id))
                  }
                  data={diagram?.dots ?? []}
                />
              ))}
            </>
          ) : (
            <TRIcon iconName={'chartDiagrams'} edgeLength={220} />
          )
        ) : (
          <div className="flex justify-center items-center w-full h-full">
            <TRIcon
              iconName="loader"
              edgeLength={48}
              className="animate-spin"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default React.memo(DiagramsFieldOffice, (prevProps, nextProps) => {
  if (
    nextProps !== null &&
    JSON.stringify(prevProps.diagrams) !== JSON.stringify(nextProps.diagrams)
  ) {
    return false;
  }

  return true;
});
