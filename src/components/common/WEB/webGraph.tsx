import React from 'react';
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);


export const dataFull = (data: any) => ({
    labels: ['Саморазвитие', 'Отношения', 'Карьера', 'Отдых', 'Окружение', 'Доходы', 'Творчество', 'Здоровье'],
    datasets: [
        {
            label: '',
            data: data,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
        },
    ],
});

export function WebGraph({balanceData}: any) {
    return <Radar data={dataFull(balanceData)} />;
}
