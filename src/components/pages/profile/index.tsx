'use client';

import RanksComponent from '@/components/common/fields/officeField/RanksComponent';
import DiagramsFieldOffice from '@/components/common/fields/officeField/DiagramsField';
import GraphFieldOffice from '@/components/common/fields/officeField/GrapgFieldOffice';
import MetricsComponent from '@/components/common/fields/officeField/MetricsField';
import UserCard from '@/components/common/fields/officeField/UserCard';
import { getCharts, getDiagrams, getMetrics } from '@/store/thunks/officeThunk';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserPersonalData } from '@/store/thunks/userThunk';
import { useRouter } from 'next/navigation';
import HoverGradientButton from '@/components/common/buttons/hoverGradient';
import type { TUserDataState } from '@/store/reducers/userReducer';
import type { TUserCharts } from '@/models/charts';
import { TMetrics, TUserDiagrams } from '@/models/charts';
import classNames from 'classnames';

function PersonalOffice() {
  const dispatch = useDispatch();
  const router = useRouter();

  const {
    charts,
    metrics,
    diagrams,
  }: {
    charts: TUserCharts | null;
    metrics: TMetrics | null;
    diagrams: TUserDiagrams | null;
    //@ts-ignore
  } = useSelector((state) => state.officePage);

  const { userData }: { userData: TUserDataState } = useSelector(
    //@ts-ignore
    (state) => state.user,
  );

  useEffect(() => {
    //@ts-ignore
    dispatch(getCharts());
    //@ts-ignore
    dispatch(getDiagrams());
    //@ts-ignore
    dispatch(getMetrics());
    //@ts-ignore
    dispatch(getUserPersonalData());
  }, []);

  function handleEditUserData() {
    router.push('/profile/edit');
  }

  return (
    <section className="min-h-[screen] mx-auto max-w-[1400px] w-full overflow-hidden bg-bg-gray rounded-9 sx_lg:rounded-[0]">
      <div className="w-full sx_lg:max-w-[600px] sx_lg:flex sx_lg:flex-col gap-6 min-h-[calc(100vh-90px)] relative grid grid-cols-3 sx_lg:grid-cols-2 sx_lg:rounded-t-9 s_lg: p-6 sx_lg:pb-6 max-w-[1400px] mx-auto s_lg:rounded-t-[0px] s_lg:pt-0 s_lg:p-6 ss_lg:p-4 ss_lg:gap-4">
        <div className="row-span-3 flex flex-col gap-6">
          <UserCard userData={userData} />
          <HoverGradientButton
            text={'Редактировать'}
            onClick={handleEditUserData}
          />
          <RanksComponent userRank={userData?.rank_name ?? 'empty'} />
        </div>

        <div
          className={classNames(
            'row-span-3 flex flex-col gap-6 min-w-[384px]',
            'lg:min-w-full',
          )}
        >
          {diagrams ? (
            <DiagramsFieldOffice diagrams={diagrams} />
          ) : (
            <div className="bg-white rounded-6 h-[680px] sx_lg:h-[740px] p-6 pt-3 ss_lg:h-auto">
              <h4 className="text-heading-ss-bold">Диаграммы отчёта</h4>
            </div>
          )}

          {metrics ? (
            <MetricsComponent metrics={metrics} />
          ) : (
            <div className="bg-white h-[300px] rounded-6 p-6 pt-3">
              <h4 className="text-heading-ss-bold ss_lg:text-text-sm-bold">
                Метрики
              </h4>
            </div>
          )}
        </div>

        <div
          className={classNames(
            'col-start-3 col-end-4 row-start-1 row-end-4 flex flex-col gap-6 min-w-[384px]',
            'lg:min-w-full',
          )}
        >
          {charts ? (
            <>
              <GraphFieldOffice
                type={'chartProductive'}
                color={'#6ABDDB'}
                name="LIFE-BALANCE / NON LIFE-BALANCE"
                params={{
                  data: charts.lifeBalance.dots,
                  label: charts.lifeBalance?.date,
                }}
                param2={{
                  data: charts.nonLifeBalance.dots,
                  label: charts.nonLifeBalance?.date,
                }}
                color2={'#E5302E'}
                average={charts.lifeBalance?.avg[0]?.toFixed(2) ?? '0'}
                elementId={'productivityChart'}
              />

              <GraphFieldOffice
                type={'chartRelax'}
                color={'#F6CC56'}
                name="Эмоциональное состояние"
                params={{
                  data: charts.emotional.dots,
                  label: charts.emotional.date,
                }}
                average={charts.emotional?.avg[0]?.toFixed(2) ?? '0'}
                elementId={'emotionalChart'}
              />

              <GraphFieldOffice
                type={'chartEmotional'}
                color={'#97C263'}
                name="Оценка дня"
                params={{
                  data: charts.dayReports.dots,
                  label: charts.dayReports.date,
                }}
                average={charts.dayReports?.avg[0]?.toFixed(2) ?? '0'}
                elementId={'holidaysChart'}
              />
            </>
          ) : (
            <>
              <div className="bg-white flex-1 rounded-6 p-6 pt-3">
                <h4 className="text-heading-ss-bold">
                  LIFE-BALANCE / NON LIFE-BALANCE
                </h4>
              </div>
              <div className="bg-white flex-1 rounded-6 p-6 pt-3">
                <h4 className="text-heading-ss-bold">
                  LIFE-BALANCE / NON LIFE-BALANCE
                </h4>
              </div>
              <div className="bg-white flex-1 rounded-6 p-6 pt-3">
                <h4 className="text-heading-ss-bold">
                  LIFE-BALANCE / NON LIFE-BALANCE
                </h4>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default React.memo(PersonalOffice);
