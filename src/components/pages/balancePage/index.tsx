'use client';

import BalanceWebPage from './balanceGraph';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useAppSelector } from '@/hooks/store';
import { useEffect } from 'react';
import { getUserWheelData } from '@/store/thunks/WheelThunk';
import type { TReportCheckup } from '@/store/reducers/balanceWheelReducer';

export default function BalancePage() {
  const { balanceData } = useAppSelector((state) => state.balanceWheel);

  return (
    <div className="w-full min-h-[100vh] py-10 bg-bg-gray">
      {balanceData ? <BalanceWebPage /> : null}
    </div>
  );
}
