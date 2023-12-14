import React from 'react';
import ModalComponent from '../index';
import TRIcon from '../../icon';
import { Ranks } from '../../cards/RankComponent';

interface ModalExpertProps {
    open: boolean;
    onClose: () => void;
}

const ModalExpert: React.FC<ModalExpertProps> = ({ open, onClose }) => {
    return (
        <ModalComponent open={open} onClose={onClose}>
            <div className="w-full flex justify-center relative bg-white items-center py-2 h-[82px] rounded-full">
                <div className="absolute left-2">
                    <TRIcon iconName={'expert'} edgeLength={68} />
                </div>

                <h4 className="text-heading-s text-black">
                    { Ranks['expert'] }
                </h4>
            </div>

            <ul className="flex flex-col gap-3 list-disc px-3">
                <li className="w-full pb-3 text-15_600 border-b-[0.5px] border-white">
                    30 день Трекинга подряд
                </li>
                <li className="w-full pb-3 text-15_600 border-b-[0.5px] border-white">
                    10 раз отработать запросы Резидентов публично из своей экспертности в разделе &quot;Публичная обратная связь&quot;
                </li>
            </ul>
        </ModalComponent>
    );
};

export default ModalExpert;
