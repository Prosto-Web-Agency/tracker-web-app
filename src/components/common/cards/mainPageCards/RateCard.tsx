import Image from 'next/image';
import React, { useState } from 'react';
import { TUserSmallData } from '@/models/userData';
import classNames from 'classnames';
import TRIcon from '@/components/common/icon';

export type TCardRate = TUserSmallData & {
  position: number;
  open?: boolean;
  isTop: boolean;
  setModalData: (login: string) => void;
};

export default function RateCard({
  first_name,
  image_url,
  login,
  task_count,
  position,
  isTop,
  rank,
  setModalData,
}: TCardRate) {
  return (
    <div
      className={classNames(
        'w-full duration-100 cursor-pointer hover:border-2 border-white max-w-full h-[52px] items-center p-2 pr-5 rounded-full flex justify-between',
        {
          ['bg-gradient']: isTop,
        },
      )}
      onClick={() => setModalData(login)}
    >
      <div className="flex h-[40px] px-3 gap-3 justify-center items-center">
        <p
          className={classNames('text-heading-ss', {
            ['text-white']: isTop,
          })}
        >
          {position}
        </p>

        <div className="flex h-[36px] pb-1 pr-1 relative">
          <div className="absolute z-10 bottom-[2px] right-[2px]">
            <TRIcon iconName={rank} edgeLength={12} />
          </div>

          {image_url ? (
            <Image
              className="rounded-10 max-h-[36px] min-h-[36px] min-w-[36px] object-cover"
              width={36}
              height={36}
              src={image_url}
              alt="person"
            />
          ) : (
            <div className="flex justify-center items-center w-[36px] h-[36px] rounded-10 bg-bg-gray">
              <Image
                width={36}
                height={36}
                className={'w-[36px] h-[36px] object-cover rounded-10'}
                src={'/empty-user-icon.jpeg'}
                alt={'empty profile'}
              />
            </div>
          )}
        </div>

        <Image
          className="relative hidden visible"
          width={9}
          height={9}
          src={'/crown.svg'}
          alt="person"
        />

        <h3
          className={classNames(
            'flex items-center text-13_600 h-[34px] overflow-hidden overflow-ellipsis -webkit-line-clamp-2 clmp',
            {
              ['text-white']: isTop,
            },
          )}
        >
          {first_name}
        </h3>
      </div>

      <p
        className={classNames('px-3 py-2 rounded-4 text-text-s', {
          ['text-black bg-white']: isTop,
          ['text-white bg-gradient']: !isTop,
        })}
      >
        {task_count}
      </p>
    </div>
  );
}
