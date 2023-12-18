'use client'

import React from 'react';
import ImageUploading, { type ImageListType } from 'react-images-uploading';
import Image from "next/image";

export default function ImagePicker({ onSetImage, profileImage}: { onSetImage: (image: File) => void, profileImage?: string | File }) {
    const [image, setImage] = React.useState<{
        url: string | null,
        imageFile: string | File
    }>({
        url: typeof profileImage === 'string' ? profileImage : '',
        imageFile: (profileImage && typeof profileImage !== 'string') ? profileImage : ''
    });

    const [imageList, setImageList] = React.useState<ImageListType>([]);
    const maxNumber = 1;

    const onChange = (imageList: ImageListType, addUpdateIndex: unknown) => {
        if (imageList[0].file) {
            onSetImage(imageList[0].file);
            setImage({
                url: imageList[0].data_url,
                imageFile: imageList[0].file
            });
        }
    };

    return (
        <div className="w-full h-full relative">
            <ImageUploading
                value={imageList}
                onChange={onChange}
                maxNumber={maxNumber}
                dataURLKey="data_url"
            >
                {({
                      imageList,
                      onImageUpload,
                      onImageRemoveAll,
                      onImageUpdate,
                      onImageRemove,
                      isDragging,
                      dragProps,
                  }) => (
                    <div className="upload__image-wrapper w-full h-full">
                        <button
                            className="w-full h-full"
                            style={isDragging ? { color: 'red' } : undefined}
                            onClick={onImageUpload}
                            {...dragProps}
                        >
                            {
                                image.url ?
                                    (
                                        <img
                                            className="object-cover h-full w-full rounded-4"
                                            src={image.url}
                                            alt="profile photo"
                                            width="107"
                                            height="107"
                                        />
                                    ) : (
                                        <div className="relative flex justify-center items-center w-full h-full">
                                            <Image
                                                src={'/icons/plus.svg'}
                                                alt={'plus'}
                                                height={22}
                                                width={22}
                                            />
                                        </div>
                                    )
                            }
                        </button>
                    </div>
                )}
            </ImageUploading>
        </div>
    );
}
