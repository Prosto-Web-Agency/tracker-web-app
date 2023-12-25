import Image from 'next/image';
import SecondaryButton from '../../buttons/secondary';
import { TUserCommonData } from '@/models/userData';
import TRIcon from '@/components/common/icon';
import React from 'react';
import { useRouter } from 'next/navigation';
import { TUserDataState } from '@/store/reducers/userReducer';
import SmallRankComponent from '@/components/common/cards/SmallRankComponent';
import { handleGetUserLink } from '@/utils/getUserLinks';
import classNames from "classnames";

type TUserCard = {
  userData: TUserDataState;
};

export default function UserCard({ userData }: TUserCard) {
  const router = useRouter();

  function handleGoToInstagram() {
    router.push(handleGetUserLink(userData?.instagram ?? '', 'inst'));
  }

  function handleGoToTelegram() {
    router.push(handleGetUserLink(userData?.tg_username ?? '', 'tg'));
  }

  return (
    <div className="relative overflow-hidden flex w-full h-[225px] big_screen_h:h-[calc(40vh-114px)] bg-white rounded-6 ss_lg:min-w-ful minn:h-full minn:flex-col">
      {userData ? (
        <>
          <div className={classNames(
              "w-[193px] relative flex justify-center items-center",
              "lg:w-full lg:h-[225px]"
          )}>
            {userData.image_url ? (
              <Image
                className="w-[200px] h-[180px] big_screen_h:h-[calc(40vh-114px)] object-cover rounded-4"
                width={193}
                height={265}
                src={userData.image_url}
                alt="man"
              />
            ) : (
              <div className="flex justify-center items-center w-[200px] h-[225px] relative big_screen_h:h-[calc(40vh-114px)] rounded-6 bg-bg-gray box-border border-4 border-solid border-gray">
                <div className="flex justify-center items-center w-full h-full rounded-10">
                  <Image
                    width={200}
                    height={225}
                    className={'w-full h-full object-cover rounded-6'}
                    src={'/empty-user-icon.jpeg'}
                    alt={'empty profile'}
                  />
                </div>
              </div>
            )}

            <div className="absolute z-10 bottom-4">
              <SmallRankComponent
                rank={userData.rank_name}
                onClick={() => {}}
                active={true}
              />
            </div>
          </div>

          <div className="flex flex-col gap-5 justify-between p-6 overflow-hidden">
            <div className="text-heading-ss">
              <p>{userData.first_name}</p>
              <p>{userData.surname}</p>
            </div>
            <div className="flex flex-col gap-1">
              {userData.tg_username ? (
                <SecondaryButton
                  size="small"
                  className="flex gap-1 rounded-5 px-4 justify-center items-center h-10"
                  onClick={handleGoToTelegram}
                  leftIcon="tg_white"
                  text={userData.tg_username}
                />
              ) : null}
              {userData.instagram ? (
                <SecondaryButton
                  size="small"
                  className="flex gap-1 rounded-5 px-4 justify-center items-center h-10"
                  onClick={handleGoToInstagram}
                  leftIcon="inst_white"
                  text={userData.instagram}
                />
              ) : null}
            </div>
          </div>
        </>
      ) : (
        <div className="flex justify-center items-center w-full h-full">
          <TRIcon iconName="loader" edgeLength={48} className="animate-spin" />
        </div>
      )}
    </div>
  );
}
