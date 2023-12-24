import React from 'react';
import ModalComponent from '../index';
import TRIcon from '../../icon';
import { Ranks } from '../../cards/RankComponent';

interface ModalHeadlinerProps {
  open: boolean;
  onClose: () => void;
}

const ModalHeadliner: React.FC<ModalHeadlinerProps> = ({ open, onClose }) => {
  return (
    <ModalComponent open={open} onClose={onClose}>
      <div className="w-full flex justify-center relative bg-white items-center py-2 h-[82px] rounded-full">
        <div className="absolute left-2">
          <TRIcon iconName={'headliner'} edgeLength={68} />
        </div>

        <h4 className="text-heading-s text-black">{Ranks['headliner']}</h4>
      </div>

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
          X3 Гипотезы или действия на доработку REC&apos;s или Traker принятых
          онлайн-форумом
        </li>
      </ul>
    </ModalComponent>
  );
};

export default ModalHeadliner;
