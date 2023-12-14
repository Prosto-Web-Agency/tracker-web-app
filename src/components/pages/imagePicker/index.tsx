'use client'

import React, { useState, useRef } from "react";

import ReactCrop, {
    centerCrop,
    makeAspectCrop,
    Crop,
    PixelCrop,
    convertToPixelCrop,
} from "react-image-crop";
import { canvasPreview } from "./canvasPreview";
import { useDebounceEffect } from "./useDubounceEffect";

import "react-image-crop/dist/ReactCrop.css";
import Image from "next/image";
import SecondaryButton from "@/components/common/buttons/secondary";

export type TImgPicker = {
    show: boolean
    setImgPicker: any
}

// This is to demonstate how to make and center a % aspect crop
// which is a bit trickier so we use some helper functions.
function centerAspectCrop(
    mediaWidth: number,
    mediaHeight: number,
    aspect: number,
) {
    return centerCrop(
        makeAspectCrop(
            {
                unit: "%",
                width: 90,
            },
            aspect,
            mediaWidth,
            mediaHeight,
        ),
        mediaWidth,
        mediaHeight,
    );
}

export default function ImagePicker({ show, setImgPicker }: TImgPicker) {
    const [imgSrc, setImgSrc] = useState("");
    const previewCanvasRef = useRef<HTMLCanvasElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);
    const hiddenAnchorRef = useRef<HTMLAnchorElement>(null);
    const blobUrlRef = useRef("");
    const [crop, setCrop] = useState<Crop>();
    const [completedCrop, setCompletedCrop] = useState<PixelCrop>();
    const [scale, setScale] = useState(1);
    const [rotate, setRotate] = useState(0);
    const [aspect, setAspect] = useState<number | undefined>(4 / 5);

    function onSelectFile(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.files && e.target.files.length > 0) {
            setCrop(undefined); // Makes crop preview update between images.
            const reader = new FileReader();
            reader.addEventListener("load", () =>
                setImgSrc(reader.result?.toString() || ""),
            );
            reader.readAsDataURL(e.target.files[0]);
        }
    }

    function onImageLoad(e: React.SyntheticEvent<HTMLImageElement>) {
        if (aspect) {
            const { width, height } = e.currentTarget;
            setCrop(centerAspectCrop(width, height, aspect));
        }
    }

    async function onDownloadCropClick() {
        const image = imgRef.current;
        const previewCanvas = previewCanvasRef.current;
        if (!image || !previewCanvas || !completedCrop) {
            throw new Error("Crop canvas does not exist");
        }

        // This will size relative to the uploaded image
        // size. If you want to size according to what they
        // are looking at on screen, remove scaleX + scaleY
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;

        const offscreen = new OffscreenCanvas(
            completedCrop.width * scaleX,
            completedCrop.height * scaleY,
        );
        const ctx = offscreen.getContext("2d");
        if (!ctx) {
            throw new Error("No 2d context");
        }

        ctx.drawImage(
            previewCanvas,
            0,
            0,
            previewCanvas.width,
            previewCanvas.height,
            0,
            0,
            offscreen.width,
            offscreen.height,
        );
        // You might want { type: "image/jpeg", quality: <0 to 1> } to
        // reduce image size
        const blob = await offscreen.convertToBlob({
            type: "image/png",
        });

        if (blobUrlRef.current) {
            URL.revokeObjectURL(blobUrlRef.current);
        }
        blobUrlRef.current = URL.createObjectURL(blob);
        // console.log(blobUrlRef);
        // console.log(blob);
        // console.log(image);
        // console.log(completedCrop);

        hiddenAnchorRef.current!.href = blobUrlRef.current;
        hiddenAnchorRef.current!.click();
    }

    useDebounceEffect(
        async () => {
            if (
                completedCrop?.width &&
                completedCrop?.height &&
                imgRef.current &&
                previewCanvasRef.current
            ) {
                // We use canvasPreview as it's much faster than imgPreview.
                canvasPreview(
                    imgRef.current,
                    previewCanvasRef.current,
                    completedCrop,
                    scale,
                    rotate,
                );
            }
        },
        100,
        [completedCrop, scale, rotate],
    );

    function handleToggleAspectClick() {
        if (aspect) {
            setAspect(undefined);
        } else {
            setAspect(3 / 5);

            if (imgRef.current) {
                const { width, height } = imgRef.current;
                const newCrop = centerAspectCrop(width, height, 3 / 5);
                setCrop(newCrop);
                // Updates the preview
                setCompletedCrop(convertToPixelCrop(newCrop, width, height));
            }
        }
    }

    return (
        <div className={`App w-full min-h-full ${show ? 'flex' : 'hidden'} backdrop-blur-sm bg-tr04 flex-col justify-center items-center absolute top-[80px] s_lg:top-[75px] left-0 p-6`}>
            <div className="w-[500px] min-h-[300px]  ss_lg:w-[300px]  bg-bg-gray rounded-6 flex justify-start gap-3 items-center flex-col">

                <div className="Crop-Controls w-full">


                    <div className="flex p-6 pb-2 items-center justify-between w-full">
                        <label htmlFor="add__photo">
                            <Image
                                className="duration-300 hover:scale-[1.05]"
                                width={60}
                                height={60}
                                src={'/addPhotoLogo.svg'}
                                alt="camera logo"
                            />
                        </label>
                        <input type="file" accept="image/*" id="add__photo" onChange={onSelectFile} className="w-[0px] h-[0px]" />
                        <button className="" onClick={() => setImgPicker(false)}>
                            <Image
                                className="duration-300 hover:scale-[1.05]"
                                width={30}
                                height={30}
                                src={'/closeRed.svg'}
                                alt="close"
                            />
                        </button>
                    </div>

                    {/* <div>
                    <label htmlFor="scale-input">Приближение: </label>
                    <input
                        id="scale-input"
                        type="number"
                        step="0.1"
                        value={scale}
                        disabled={!imgSrc}
                        onChange={(e) => setScale(Number(e.target.value))}
                    />
                </div> */}
                    {/* <div>
                    <label htmlFor="rotate-input">Rotate: </label>
                    <input
                        id="rotate-input"
                        type="number"
                        value={rotate}
                        disabled={!imgSrc}
                        onChange={(e) =>
                            setRotate(Math.min(180, Math.max(-180, Number(e.target.value))))
                        }
                    />
                </div> */}
                    {/* <div>
                    <button onClick={handleToggleAspectClick}>
                        Закрепить соотношение сторон: {aspect ? "да" : "нет"}
                    </button>
                </div> */}
                </div>
                <div className="">
                    {!!imgSrc && (
                        <ReactCrop
                            crop={crop}

                            onChange={(_, percentCrop) => setCrop(percentCrop)}
                            onComplete={(c) => setCompletedCrop(c)}
                            aspect={aspect}
                            // minWidth={400}
                            minHeight={100}

                        // circularCrop
                        >
                            <img
                                ref={imgRef}
                                alt="Crop me"
                                src={imgSrc}
                                style={{ transform: `scale(${scale}) rotate(${rotate}deg)` }}
                                onLoad={onImageLoad}
                            />
                        </ReactCrop>
                    )}
                </div>

                {!!completedCrop && (
                    <>
                        {/* <div>
                        <canvas
                            ref={previewCanvasRef}
                            style={{
                                border: "1px solid black",
                                borderRadius: '20px',
                                objectFit: "contain",
                                width: completedCrop.width,
                                height: completedCrop.height,
                            }}
                        />
                    </div> */}
                        {/* <div>
                            <button onClick={onDownloadCropClick}>Download Crop</button>
                            <a
                                href="#hidden"
                                ref={hiddenAnchorRef}
                                download
                                style={{
                                    position: "absolute",
                                    top: "-200vh",
                                    visibility: "hidden",
                                }}
                            >
                                Hidden download
                            </a>
                        </div> */}
                        <div className="w-full px-4 pb-4">
                            <SecondaryButton
                                text="Сохранить"
                                onClick={() => console.log('click')}
                            />
                        </div>

                    </>
                )}

            </div>
        </div>
    );
}