import React from 'react';
import ModalComponent from '../index';

interface ModalHeadlinerProps {
    open: boolean;
    onClose: () => void;
}

const ModalHeadliner: React.FC<ModalHeadlinerProps> = ({ open, onClose }) => {
    return (
        <ModalComponent open={open} onClose={onClose}>
            <ul className="flex flex-col gap-3 list-disc px-3">
                <li className="w-full pb-3 text-15_600 border-b-[0.5px] border-white">
                    Созданны 5X групп Бади внутри Рекса из Резидентов
                </li>
                <li className="w-full pb-3 text-15_600 border-b-[0.5px] border-white">
                    100 Верифицированных отчётов Резидентов
                </li>
                <li className="w-full pb-3 text-15_600 border-b-[0.5px] border-white">
                    В топ 100 по Суммарной оценке верификации Дней Трекера
                </li>
                <li className="w-full pb-3 text-15_600 border-b-[0.5px] border-white">
                    X3 Гипотезы или действия на доработку REC's или Traker принятых онлайн-форумом
                </li>
            </ul>
        </ModalComponent>
    );
};

export default ModalHeadliner;
