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


export const data = {
    labels: ['Саморазвитие', 'Отношения', 'Карьера', 'Отдых', 'Окружение', 'Доходы', 'Творчество', 'Здоровье'],
    datasets: [
        {
            label: '# of Votes',
            data: [1, 4, 5, 2, 7, 4, 8, 9],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
        },
    ],
};

export function WebGraph() {
    return <Radar data={data} />;
}
