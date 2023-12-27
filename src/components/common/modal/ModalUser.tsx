import Image from 'next/image';
import PrimaryButton from '../buttons/primary';
import Link from 'next/link';
import { setUserPopupData, TUserDataState } from '@/store/reducers/userReducer';
import { useDispatch, useSelector } from 'react-redux';
import { TUserPopupData } from '@/models/userData';
import TRIcon from '@/components/common/icon';
import React, { useEffect } from 'react';
import {
  getListOfTopUsers,
  getListOfUsersInsights,
  getSearchUsersThunk,
} from '@/store/thunks/trakerThunk';
import {
  getUserPopupData,
  subscribeOnUserByLogin,
} from '@/store/thunks/userThunk';
import { handleGetUserLink } from '@/utils/getUserLinks';
import { useAppSelector } from '@/hooks/store';

interface IModalUser {
  position: number;
  open?: boolean;
  setModalData?: any;
  login: string;
}

export default function ModalUser({ open, setModalData, login }: IModalUser) {
  const dispatch = useDispatch();

  const {
    userPopupData,
    userData,
  }: { userPopupData: TUserPopupData | null; userData: TUserDataState } =
    useAppSelector((state) => state.user);

  useEffect(() => {
    //@ts-ignore
    dispatch(getUserPopupData(login));
  }, [dispatch]);

  function handleSubscribeOnUser(login: string) {
    //@ts-ignore
    dispatch(subscribeOnUserByLogin(login));
  }

  function handleCloseModal() {
    dispatch(setUserPopupData(null));
    setTimeout(() => setModalData({ position: 0, open: false, login: '' }), 0);
  }

  return (
    <div
      onClick={handleCloseModal}
      className={`p-10 w-screen h-screen bg-tr04 z-[100] backdrop-blur-sm fixed top-0 left-0 ${
        open ? 'flex' : 'hidden'
      } justify-center items-center`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col items-center justify-center gap-8 min-h-[300px] h-auto w-[500px] min-w-[330px] bg-gradient rounded-4 px-5 pt-4 pb-6 text-white"
      >
        {userPopupData ? (
          <>
            <div className="flex w-full justify-between">
              <h4 className="text-heading-s flex justify-between">
                Пользователь
              </h4>

              <div
                onClick={() =>
                  setModalData({ position: 0, open: false, login: '' })
                }
              >
                <Image
                  className="w-[24px] h-[24px] object-cover cursor-pointer"
                  height={27}
                  width={27}
                  src={'/close.svg'}
                  alt="person"
                />
              </div>
            </div>

            <div className="py-3 flex flex-col items-center">
              {userPopupData?.image_url ? (
                <Image
                  className="rounded-[45px] h-[90px] w-[90px] object-cover"
                  height={90}
                  width={90}
                  src={userPopupData?.image_url ?? ''}
                  alt="person"
                />
              ) : (
                <div className="flex justify-center items-center w-[90px] h-[90px] rounded-[45px] bg-bg-gray">
                  <Image
                    width={90}
                    height={90}
                    className={'w-[90px] h-[90px] object-cover rounded-10'}
                    src={'/empty-user-icon.jpeg'}
                    alt={'empty profile'}
                  />
                </div>
              )}

              <div className="flex gap-2 items-end">
                <p className="text-20_700 pt-3 ">{userPopupData?.first_name}</p>

                <TRIcon iconName={userPopupData.rank} edgeLength={28} />
              </div>

              <p>{userPopupData?.hash_tag_header}</p>

              {userPopupData?.tg_username || userPopupData?.instagram ? (
                <div className="flex gap-2 pt-3">
                  {userPopupData?.tg_username ? (
                    <Link
                      href={handleGetUserLink(userPopupData?.instagram ?? '', 'tg')}
                    >
                      <PrimaryButton
                        text=""
                        edgeLength={32}
                        leftIcon="tg"
                        className="px-6 rounded-6"
                        onClick={() => undefined}
                      />
                    </Link>
                  ) : null}

                  {userPopupData?.tg_username ? (
                    <Link
                      href={handleGetUserLink(userPopupData?.instagram ?? '', 'inst')}
                    >
                      <PrimaryButton
                        text=""
                        edgeLength={32}
                        leftIcon="inst"
                        className="px-6 rounded-6"
                        onClick={() => undefined}
                      />
                    </Link>
                  ) : null}
                </div>
              ) : null}
            </div>

            {userPopupData?.achievements ? (
              <div className="flex flex-col gap-3">
                {userPopupData.achievements.map(
                  ({ achievement_name }, index) => (
                    <div
                      className="flex justify-center items-center w-full h-[50px] bg-white text-black rounded-6"
                      key={String(Math.random()) + index}
                    >
                      {achievement_name}
                    </div>
                  ),
                )}
              </div>
            ) : null}

            {userData?.login !== userPopupData.login ? (
              <PrimaryButton
                text={
                  userPopupData.is_subscribe ? 'Вы подписаны' : 'Подписаться'
                }
                onClick={() => {
                  handleSubscribeOnUser(login);
                  setModalData({ position: '', open: false });
                }}
              />
            ) : null}
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
