import Image from 'next/image';
import ModalComponent from '@/components/common/modal';
import { validHeaderValue } from '@/utils/validNewHeader';
import { useState } from 'react';
import { Modal } from '@mui/material';

type TNew = {
  header?: string;
  text: string;
  images: { photo_url: string }[];
};

export default function NewsCard({ header, text, images }: TNew) {
  const [nameOfOpenImage, setNameOfOpenImage] = useState('');

  return (
    <div className="w-full pb-4 gap-4 border-b-[0.5px] border-black duration-100 hover:scale-[1.002] scale-1 flex flex-col s_lg:pb-2 s_lg:gap-2">
      <h5 className="text-heading-ss s_lg:text-text-m-bold">
        {validHeaderValue(header)}
      </h5>

      <p className="text-text-m" style={{ whiteSpace: 'pre-wrap' }}>
        {text}
      </p>

      {images && images.length ? (
        <div className="flex items-center gap-2 w-full overflow-x-auto no-scrollbar h-[135px] px-2">
          {images
            ? images.map(({ photo_url }, indexOfImage) => (
                <div key={photo_url} style={{ position: 'unset' }}>
                  <Image
                    onClick={() => setNameOfOpenImage(photo_url + indexOfImage)}
                    className="min-w-[200px] h-[125px] object-cover rounded-2 cursor-pointer hover:scale-105 transition-transform"
                    width={110}
                    height={65}
                    src={photo_url}
                    alt={photo_url}
                  />

                  <Modal
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    open={photo_url + indexOfImage === nameOfOpenImage}
                    onClose={() => setNameOfOpenImage('')}
                  >
                    <Image
                      className="w-auto h-[90%] object-contain rounded-2"
                      onClick={() => setNameOfOpenImage('')}
                      width={2100}
                      height={1150}
                      key={photo_url}
                      src={photo_url}
                      alt={photo_url}
                    />
                  </Modal>
                </div>
              ))
            : null}
        </div>
      ) : null}
    </div>
  );
}
