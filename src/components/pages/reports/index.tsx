'use client';

import BasePrimaryCard from '@/components/common/cards/BasePrimaryCard';
import React, { useEffect } from 'react';
import SearchUsers from '@/components/common/fields/mainField/SearchUsers';
import {
  getUserSubscriptionsData,
  getUserSubscriptionsReportsData,
  unsubscribeOnUserByLogin,
} from '@/store/thunks/userThunk';
import { useAppDispatch, useAppSelector } from '@/hooks/store';
import {
  TUserSubscriptionsArray,
  TUserSubscriptionsReportArray,
} from '@/models/userData';
import SubscriptionCard from '@/components/common/userSubscription/subscriptionCard';
import Image from 'next/image';
import SecondaryButton from '@/components/common/buttons/secondary';
import BaseSecondaryCard from '@/components/common/cards/BaseSecondaryCard';
import classNames from 'classnames';

export default function ReportsPage() {
  const dispatch = useAppDispatch();
  const {
    userSubscriptionsReports,
    userSubscriptions,
  }: {
    userSubscriptionsReports: TUserSubscriptionsReportArray;
    userSubscriptions: TUserSubscriptionsArray;
  } = useAppSelector((state) => state.user);

  useEffect(() => {
    // @ts-ignore
    dispatch(getUserSubscriptionsReportsData());
    // @ts-ignore
    dispatch(getUserSubscriptionsData());
  }, [dispatch]);

  function handleUnsubscribeOnUser(login: string) {
    //@ts-ignore
    dispatch(unsubscribeOnUserByLogin(login));
  }

  return (
    <section
      className={classNames(
        'w-full max-w-[1400px] mx-auto bg-bg-gray h-[calc(100%-90px)] p-10 rounded-t-9 flex gap-6',
        'lg:rounded-t-[0px] lg:flex-col lg:h-auto lg:px-4',
      )}
    >
      <div
        className={classNames(
          'flex flex-col gap-4 w-full flex-[33%] max-w-[380px] min-w-[290px]',
          'lg:max-w-full',
        )}
      >
        <SearchUsers />
        <BasePrimaryCard>
          {!!userSubscriptions.length && (
            <>
              {userSubscriptions.map((user, index) => (
                <div
                  className={
                    'flex justify-between items-center gap-1 w-full cursor-pointer hover:bg-bg-gray transition rounded-4 p-2'
                  }
                  key={user.streamer_name + index}
                >
                  <div className="flex gap-3 items-center">
                    {user.image_url ? (
                      <Image
                        className="w-9 h-9 object-cover rounded-5 hover:scale-105 active:scale-[1.1] scale-1 duration-300"
                        width={30}
                        height={30}
                        src={user.image_url}
                        alt="image_url"
                      />
                    ) : (
                      <div className="w-8 h-8 rounded-4 bg-bg-gray" />
                    )}

                    <p className={'text-13_600'}>{user.streamer_name}</p>
                  </div>
                  <div className="h-[26px]">
                    <SecondaryButton
                      className="h-[26px]"
                      bg={'null'}
                      size={'none'}
                      text={''}
                      onClick={() =>
                        handleUnsubscribeOnUser(user.streamer_login)
                      }
                      leftIcon={'subscribedUser'}
                      edgeLength={26}
                    />
                  </div>
                </div>
              ))}
            </>
          )}
        </BasePrimaryCard>
      </div>

      <div className="flex-[67%]">
        <BasePrimaryCard>
          <div className={classNames('p-7 h-full overflow-hidden', 'lg:px-0')}>
            <h3 className="text-heading-ss-bold pb-2">Отчеты</h3>

            {userSubscriptionsReports.length ? (
              <div className="flex flex-col overflow-y-auto no-scrollbar overflow-x-hidden w-full h-full">
                {userSubscriptionsReports.map(
                  (
                    {
                      report_text,
                      first_name,
                      image_url,
                      login,
                      is_anon,
                      rank,
                    },
                    index,
                  ) => (
                    <SubscriptionCard
                      key={first_name + index}
                      report_text={report_text}
                      first_name={first_name}
                      image_url={image_url}
                      rank={rank}
                      is_anon={is_anon}
                      login={login}
                    />
                  ),
                )}
              </div>
            ) : (
              <div className="h-full flex justify-center items-center">
                <div className="flex w-[400px]">
                  <BaseSecondaryCard>
                    <p className="text-white text-text-m-bold px-3 py-6 text-center">
                      Здесь будут действия людей, <br />
                      на которых вы подписаны
                    </p>
                  </BaseSecondaryCard>
                </div>
              </div>
            )}
          </div>
        </BasePrimaryCard>
      </div>
    </section>
  );
}
