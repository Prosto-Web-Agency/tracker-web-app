'use client'

import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { externalTooltipHandler } from "./externalTooltipHandler";
import {TChart} from "@/store/reducers/OfficeReducer";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler
);

function getGradient(color: string, elementId: string) {
  const canvas = document.getElementById(elementId) as HTMLCanvasElement;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const gradient = ctx.createLinearGradient(0, 0, 0, 170);
  gradient.addColorStop(0, color);
  gradient.addColorStop(1, color + '01');

  return gradient;
}

const options = (color: string, type?: 'chartProductive' | 'chartRelax' | 'chartEmotional') => ({
  plugins: {
    legend: {
      display: false
    },
    tooltip: {
      enabled: false,
      position: "nearest",
      external: (context: any) => externalTooltipHandler(context, color, type),
    },
    datalabels: {
      // display labels for this specific dataset
      display: false,
    },
  },
  interaction: {
    intersect: false,
    mode: "index",
  },
  hover: {
    mode: "y",
    intersect: true,
  },
  scales: {
    y: {
      display: false,
    },
    x: {
      display: false,
    },
  },
});

const CHART_DATASET = (color: string, elementId: string, data: Array<number>, labels: Array<string>, chart2?: TChart, color2?: string, elemtnId2?: string) => {
  const datasets = [
    {
      data,
      fill: "start",
      pointHoverBackgroundColor: color,
      pointHoverBorderColor: "rgba(255, 255, 255, 1)",
      backgroundColor: getGradient(color, elementId),
      hoverBorderWidth: 0.1,
      borderColor: color,
      borderWidth: 1,
      tension: 0.5,
      pointDotRadius: 1,
      pointDotStrokeWidth: 8,
      pointHitDetectionRadius: 20,
      pointRadius: 0.1,
    },
  ];

  if (chart2) {
    datasets.push({
      data: chart2.data,
      fill: "start",
      pointHoverBackgroundColor: color2 ?? '',
      pointHoverBorderColor: "rgba(255, 255, 255, 1)",
      backgroundColor: getGradient(color2 ?? '', elementId),
      hoverBorderWidth: 0.1,
      borderColor: color2 ?? '',
      borderWidth: 1,
      tension: 0.5,
      pointDotRadius: 1,
      pointDotStrokeWidth: 8,
      pointHitDetectionRadius: 20,
      pointRadius: 0.1,
    })
  }

  return {
    labels,
    datasets,
    datalabels: {
      display: false
    }
  }
};

function ChartComponent({
    color,
    params,
    param2,
    color2,
    elemtnId2,
    elementId,
    average,
    type
}: {
    color: string,
    params: TChart,
    param2?: TChart,
    color2?: string,
    elementId: string,
    elemtnId2?: string,
    average: string,
    type?: 'chartProductive' | 'chartRelax' | 'chartEmotional';
}) {
  const [chartData, setChartData] = useState<any>({ datasets: [] });
  const [chartOptions, setChartOptions] = useState<any>({});

  useEffect(() => {
    setChartData(CHART_DATASET(color, elementId, params.data, params.label, param2, color2, elemtnId2));
    setChartOptions(options(color, type));
  }, [color, elementId, params.data, params.label]);

  return (
    <section className="relative flex flex-col h-full max-h-[574px] min-h-[210px] pb-[70px] w-full shrink items-end justify-center rounded-2 bg-secondary">
      <Line title={elementId} id={elementId} data={chartData} options={{...chartOptions}} />

      <p className="absolute bottom-8 text-text-m-bold text-transparent bg-clip-text bg-gradient-to-r from-[#E01D31] to-[#FEA50F]">
        {average}
      </p>
    </section>
  );
}

export default React.memo(ChartComponent);
