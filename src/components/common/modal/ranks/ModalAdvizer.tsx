import React from 'react';
import ModalComponent from '../index';
import TRIcon from '../../icon';
import { Ranks } from '../../cards/RankComponent';

interface ModalAdvizerProps {
    open: boolean;
    onClose: () => void;
}

const ModalAdvizer: React.FC<ModalAdvizerProps> = ({ open, onClose }) => {
    return (
        <ModalComponent open={open} onClose={onClose}>
            <div className="w-full flex justify-center relative bg-white items-center py-2 h-[82px] rounded-full">
                <div className="absolute left-2">
                    <TRIcon iconName={'adviser'} edgeLength={68} />
                </div>

                <h4 className="text-heading-s text-black">
                    { Ranks['adviser'] }
                </h4>
            </div>

            <ul className="flex flex-col gap-3 list-disc px-3">
                <li className="w-full pb-3 text-15_600 border-b-[0.5px] border-white">
                    180 деней Трекинга суммарно
                </li>
                <li className="w-full pb-3 text-15_600 border-b-[0.5px] border-white">
                    100 раз Отработать запросы Резидентов публично из своей экспертности в разделе &quot;Публичная обратная связь&quot;
                </li>
                <li className="w-full pb-3 text-15_600 border-b-[0.5px] border-white">
                    100 Зафиксированных инсайтов
                </li>
                <li className="w-full pb-3 text-15_600 border-b-[0.5px] border-white">
                    Формирование X1 группы Бади на 5 человек внутри Рекса из Резидентов
                </li>
            </ul>
        </ModalComponent>
    );
};

export default ModalAdvizer;
