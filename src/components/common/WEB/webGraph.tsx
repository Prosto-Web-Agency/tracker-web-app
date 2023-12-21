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
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
    ChartDataLabels
);


export const dataFull = (data: any) => ({
    labels: ['Саморазвитие', 'Отношения', 'Карьера', 'Отдых', 'Окружение', 'Доходы', 'Творчество', 'Здоровье'],
    datasets: [
        {
            data: data,
            backgroundColor: 'transparent',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
            fontSize: 10,
        },
    ],

});

export const options = {
    plugins: {
        datalabels: {
            backgroundColor: function(context) {
                return context.dataset.borderColor;
            },
            color: 'black',
            font: {
                weight: 'bold'
            },
            formatter: Math.round,
            padding: 8
        },
        legend: {
            display: false,
        },
    },
    aspectRatio: 4 / 3,
    elements: {
        point: {
            hoverRadius: 12,
            radius: 10
        }
    },
    scale: {
        ticks: {
            beginAtZero: true,
            max: 10,
            min: 0,
        },
    },
    scales: {
        r: {
            grid: {
                color: 'transparent'
            },
            angleLines: {
                color: 'linear-gradient(90deg, #E12131 0%, #FEA310 100%)'
            },
            ticks: {
                color: 'transparent'
            },
            pointLabels:{
                color: 'rgb(54, 162, 235)',
            },
            suggestedMin: 0,
            suggestedMax: 10
        }
    },
}

export function WebGraph({ balanceData }: any) {
    return (
        <Radar
            options={options}
            data={dataFull(balanceData)}
        />
    );
}
