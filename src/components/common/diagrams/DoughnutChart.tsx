'use client'

import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

//@ts-ignore
export function DoughnutChart({ data, name, plugins }) {
    return (
        <div className='h-[125px] ss_lg:h-[100px] flex justify-center flex-col items-center'>
            <div className='flex justify-center h-full'>
                <Doughnut data={data} plugins={[plugins]} />
            </div>

            <h4 className='flex w-full justify-center pt-2 ss_lg:text-11_400'>
                {name}
            </h4>
        </div>
    )

}
