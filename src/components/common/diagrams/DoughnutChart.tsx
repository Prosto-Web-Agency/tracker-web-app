'use client'

import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

//@ts-ignore
export function DoughnutChart({data, name, plugins}) {
    return (
        <div className='ss_lg:h-[100px] ss_lg:flex justify-center flex-col items-center'>
            <Doughnut data={data} plugins={[plugins]} />
            <h4 className='flex w-full justify-center pt-2 ss_lg:text-11_400'>
                {name}
            </h4>
        </div>
    )

}
