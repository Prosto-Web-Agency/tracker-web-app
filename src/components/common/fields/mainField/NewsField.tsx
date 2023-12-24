'use client';

import NewsCard from '../../cards/mainPageCards/NewsCard';
import React, { useEffect } from 'react';
import { getNews } from '@/store/thunks/trakerThunk';
import { useDispatch, useSelector } from 'react-redux';
import TRIcon from '@/components/common/icon';
import classNames from 'classnames';
import { useAppSelector } from '@/hooks/store';

export type TListOfNewsData = {
  news_data: {
    title: string;
    post_text: string;
    photo_content?: { photo_url: string }[];
  };
};

export default function NewsField() {
  const dispatch = useDispatch();

  const { listOfNews }: { listOfNews: TListOfNewsData[] } = useSelector(
    // @ts-ignore
    (state) => state.mainPage,
  );

  const { isUserPaidSubscription } = useAppSelector((state) => state.user);

  useEffect(() => {
    // @ts-ignore
    dispatch(getNews());
  }, [dispatch, isUserPaidSubscription]);

  return (
    <div
      className={classNames(
        'bg-white rounded-6 h-full w-full p-6 pt-4 pb-6 overflow-hidden',
        'lg:w-full lg:min-h-[300px] lg:h-[300px]',
      )}
    >
      <h3 className={classNames('text-heading-ss-bold pb-2', 'lg:')}>
        Новости
      </h3>

      <div
        className={classNames(
          'overflow-y-scroll pb-12 s_lg:pb-8 flex flex-col gap-4 scroll-hidden h-full w-full relative s_lg:gap-2',
          'lg:h-[350px]',
        )}
      >
        {listOfNews ? (
          <>
            {listOfNews.map(({ news_data }: TListOfNewsData) => (
              <NewsCard
                key={news_data.post_text}
                header={news_data.title}
                text={news_data.post_text}
                images={news_data.photo_content ?? []}
              />
            ))}
          </>
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
