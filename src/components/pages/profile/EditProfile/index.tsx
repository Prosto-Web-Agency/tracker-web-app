'use client';

import React, { useEffect, useState } from 'react';
import TRTextField from '@/components/common/textFields/TRTextField';
import ImagePicker from '../../imagePicker';
import SecondaryButton from '@/components/common/buttons/secondary';
import PrimaryButton from '@/components/common/buttons/primary';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import {
  editUserDataFetch,
  editUserImageFetch,
  getUserPersonalData,
} from '@/store/thunks/userThunk';
import TRIcon from '@/components/common/icon';
import type { TUserDataState } from '@/store/reducers/userReducer';
import { useRouter } from 'next/navigation';
import DeleteIcon from '@mui/icons-material/Delete';

export default function EditProfilePage() {
  const router = useRouter();
  const { userData }: { userData: TUserDataState } = useSelector(
    // @ts-ignore
    (state) => state.user,
  );
  // @ts-ignore
  const dispatch = useDispatch();

  const [name, setName] = useState<string>('');
  const [nameError, setNameError] = useState(false);
  const [surname, setSurname] = useState<string>('');
  const [telegram, setTelegram] = useState<string>('');
  const [inst, setInst] = useState<string>('');
  const [imageFile, setImage] = useState<string | File>('');
  const [isDataSaved, setDataSaved] = useState(false);

  useEffect(() => {
    if (userData) {
      setName(userData.first_name);
      setSurname(userData.surname ?? '');
      setTelegram(userData.tg_username ?? '');
      setInst(userData.instagram ?? '');
      setImage(userData.image_url ?? '');
    }
  }, [userData]);

  function removeImage(event: any) {
    event.stopPropagation();
    setImage('');

    // @ts-ignore
    dispatch(editUserImageFetch({ profile_image: imageFile ?? null })).then(
      () => {
        // @ts-ignore
        dispatch(getUserPersonalData());
      },
    );
  }

  async function handleSendRequest() {
    if (
      name !== userData?.first_name ||
      surname !== (userData?.surname ?? '') ||
      telegram !== (userData?.tg_username ?? '') ||
      inst !== userData?.instagram
    ) {
      dispatch(
        // @ts-ignore
        editUserDataFetch({
          first_name: name,
          surname: surname,
          tg_username: telegram,
          instagram: inst,
          is_anon: false,
        }),
      ).then(() => {
        setDataSaved(true);
        setTimeout(() => setDataSaved(false), 2000);
        // @ts-ignore
        dispatch(getUserPersonalData());
      });
    } else if (imageFile !== userData?.image_url) {
      // @ts-ignore
      dispatch(editUserImageFetch({ profile_image: imageFile ?? null })).then(
        () => {
          setDataSaved(true);
          setTimeout(() => setDataSaved(false), 2000);
          // @ts-ignore
          dispatch(getUserPersonalData());
        },
      );
    } else if (!nameError) {
      setNameError(true);
      setTimeout(() => setNameError(false), 1000);
    }
  }

  return (
    <div className="bg-white rounded-6 relative w-[588px] h-[441px] flex s_lg:bg-bg-gray s_lg:flex-col s_lg:w-full s_lg:h-full s_lg:p-6">
      <div className="w-[282px] h-[440px] bg-bg-gray border-4 border-white border-solid box-border rounded-4 relative">
        {userData ? (
          <>
            {userData.image_url ? (
              <div
                onClick={removeImage}
                className="absolute z-10 right-2 top-2 cursor-pointer"
              >
                <DeleteIcon sx={{ color: 'white' }} fontSize="large" />
              </div>
            ) : null}

            <ImagePicker
              profileImage={userData.image_url ?? ''}
              onSetImage={(uploadedImage) => {
                setImage(uploadedImage);
              }}
            />
          </>
        ) : (
          <div className="flex w-[282px] h-[440px] border-4 border-white border-solid bg-bg-gray rounded-4 justify-center items-center">
            <TRIcon
              iconName="loader"
              edgeLength={48}
              className="animate-spin"
            />
          </div>
        )}
      </div>

      <div className="w-[306px] text-15_600 p-6  h-[441px] flex flex-col justify-around s_lg:w-full s_lg:p-0 s_lg:pt-10 s_lg:h-auto s_lg:gap-4">
        <div
          className={classNames('animate__animated', {
            ['animate__shakeX']: nameError,
          })}
        >
          <TRTextField
            type="text"
            placeholder="Имя"
            value={name}
            onChange={(name) => setName(name)}
          />
        </div>
        <TRTextField
          type="text"
          placeholder="Фамилия"
          value={surname}
          onChange={(surname) => setSurname(surname)}
        />

        <TRTextField
          type="text"
          placeholder="Ник телеграм"
          value={telegram}
          onChange={(tg) => {
            if (tg.length > 0 && !tg.includes('@')) {
                setTelegram('@' + tg);
            } else setTelegram(tg);
          }}
        />

        <TRTextField
          type="text"
          placeholder="Ник Инстаграм"
          value={inst}
          onChange={(inst) => {
              if (inst.length > 0 && !inst.includes('@')) {
                  setInst('@' + inst);
              } else setTelegram(inst);
          }}
        />

        <SecondaryButton text="Сохранить" onClick={handleSendRequest} />

        <Link href="/profile">
          <PrimaryButton text="Назад" onClick={() => {}} />
        </Link>
      </div>

      <div
        className={classNames(
          'transition absolute -top-15 left-1/2 translate-x-[-50%] z-20 text-[#31BF1A] bg-[#E0EADC] px-6 py-2 rounded-4',
          {
            ['opacity-90']: isDataSaved,
            ['opacity-0']: !isDataSaved,
          },
        )}
      >
        сохранено
      </div>
    </div>
  );
}
