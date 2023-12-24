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
  ChartDataLabels,
);

export const dataFull = (data: any) => ({
  labels: [
    'Саморазвитие',
    'Отношения',
    'Карьера',
    'Отдых',
    'Окружение',
    'Доходы',
    'Творчество',
    'Здоровье',
  ],
  datasets: [
    {
      data: data,
      backgroundColor: 'transparent',
      borderColor: '#E73C2B',
      borderWidth: 1,
      fontSize: 10,
    },
  ],
});

export const options = {
  plugins: {
    datalabels: {
      backgroundColor: function (context: any) {
        return context.dataset.borderColor;
      },
      color: 'white',
      font: {
        weight: 'bold',
      },
      formatter: Math.round,
      padding: 8,
      borderRadius: 25,
    },
    legend: {
      display: false,
    },
    labels: [''],
  },
  elements: {
    point: {
      hoverRadius: 12,
      radius: 10,
    },
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
        color: [
          '#F4751D',
          'transparent',
          'transparent',
          'transparent',
          'transparent',
          'transparent',
          'transparent',
          'transparent',
          'transparent',
          'transparent',
        ],
      },
      angleLines: {
        color: '#F4751D',
      },
      ticks: {
        color: 'transparent',
      },
      pointLabels: {
        color: '#F4751D',
      },
      suggestedMin: 0,
      suggestedMax: 10,
    },
  },
};

export function WebGraph({ balanceData }: any) {
  return (
    <Radar
      // @ts-ignore
      options={options}
      data={dataFull(balanceData)}
    />
  );
}
