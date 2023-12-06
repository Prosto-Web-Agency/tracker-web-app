'use client'

import PersonField from "@/components/common/fields/officeField/PersonField";
import QUTextField from "@/components/common/textFields/QUTextField";
import Image from "next/image";
import { useState } from 'react';
import ImagePicker from "../imagePicker";

export default function ProfileSettingsComponent() {
    const [name, setName] = useState<string>('')
    const [surname, setSurname] = useState<string>('')
    const [telegram, setTelegram] = useState<string>('')
    const [inst, setInst] = useState<string>('')

    const [imgPicker, setImgPicker] = useState<boolean>(false)

    const handleChanges = () => {
        if (inst[0] !== '@') {
            setInst((prev) => ('@' + prev))
        }
        if (telegram[0] !== '@') {
            setTelegram((prev) => ('@' + prev))
        }
        console.log(name, surname, inst, telegram);
    }
    const clearForms = () => {
        setName('')
        setSurname('')
        setTelegram('')
        setInst('')
    }
    return (

        <div className="bg-white rounded-6 w-[588px] h-[441px] flex s_lg:bg-bg-gray s_lg:flex-col s_lg:w-full s_lg:h-full s_lg:p-6">
            <button onClick={() => setImgPicker(!imgPicker)} className="s_lg:bg-white s_lg:rounded-6 s_lg:flex">
                <Image className="s_lg:h-[225px] s_lg:w-[169px]" width={282} height={441} src={'/delete/manDl.png'} alt="man" />
                <Image className="duration-300 hover:scale-[1.05] absolute mt-[-430px] ml-[225px] s_lg:hidden" width={46} height={46} src={'/addPhotoLogo.svg'} alt="camera logo" />
                <div className="w-full h-full justify-center items-center hidden s_lg:flex">
                    <Image className="duration-300 hover:scale-[1.05]" width={46} height={46} src={'/addPhotoLogo.svg'} alt="camera logo" />
                </div>
            </button>

            <div className="w-[306px] text-15_600 p-6  h-[441px] flex flex-col justify-around s_lg:w-full s_lg:p-0 s_lg:pt-10 s_lg:h-auto s_lg:gap-4">
                <QUTextField type="text" placeholder="Имя" value={name} onChange={(name) => setName(name)} />
                <QUTextField type="text" placeholder="Фамилия" value={surname} onChange={(surname) => setSurname(surname)} />
                <QUTextField type="text" placeholder="Телеграм" value={telegram} onChange={(tg) => setTelegram(tg)} />
                <QUTextField type="text" placeholder="Инстаграм" value={inst} onChange={(inst) => setInst(inst)} />
                <button onClick={handleChanges} className="w-full py-4 text-white bg-orange-class-rounded rounded-4 duration-300 hover:scale-[1.05]">
                    Сохранить
                </button>
                <button onClick={clearForms} className="w-full py-4 duration-300 hover:scale-[1.05] rounded-4 coloredText">
                    Отменить
                </button>
            </div>

            <ImagePicker show={imgPicker} setImgPicker={setImgPicker}/>
        </div>
    )
}