import React from 'react';
import ModalComponent from '../index';
import TRIcon from '../../icon';
import { Ranks } from '../../cards/RankComponent';

interface ModalAmbassadorProps {
    open: boolean;
    onClose: () => void;
}

const ModalAmbassador: React.FC<ModalAmbassadorProps> = ({ open, onClose }) => {
    return (
        <ModalComponent open={open} onClose={onClose}>
            <div className="w-full flex justify-center relative bg-white items-center py-2 h-[82px] rounded-full">
                <div className="absolute left-2">
                    <TRIcon iconName={'ambassador'} edgeLength={68} />
                </div>

                <h4 className="text-heading-s text-black">
                    { Ranks['ambassador'] }
                </h4>
            </div>

            <ul className="flex flex-col gap-3 list-disc px-3">
                <li className="w-full pb-3 text-15_600 border-b-[0.5px] border-white">
                    100 деней Трекинга суммарно
                </li>
                <li className="w-full pb-3 text-15_600 border-b-[0.5px] border-white">
                    50 раз Отработать запросы Резидентов публично из своей экспертности в разделе &quot;Публичная обратная связь&quot;
                </li>
                <li className="w-full pb-3 text-15_600 border-b-[0.5px] border-white">
                    30 Зафиксированных инсайтов
                </li>
                <li className="w-full pb-3 text-15_600 border-b-[0.5px] border-white">
                    Проити сессию ИПР с AG-Traker Assist и разработать план личностного роста
                </li>
                <li className="w-full pb-3 text-15_600 border-b-[0.5px] border-white">
                    Верификация 30 Отчётов Резидентов
                </li>
                <li className="w-full pb-3 text-15_600 border-b-[0.5px] border-white">
                    Посешение разбора по технологии ProRec&apos;s
                </li>
            </ul>
        </ModalComponent>
    );
};

export default ModalAmbassador;
