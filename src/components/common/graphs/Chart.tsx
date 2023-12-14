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

const options = (color: string) => ({
  plugins: {
    legend: false,
    tooltip: {
      enabled: false,
      position: "nearest",
      external: (context: any) => externalTooltipHandler(context, color),
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

const CHART_DATASET = (color: string, elementId: string, data: Array<number>, labels: Array<string>) => ({
  labels,
  datasets: [
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
  ],
});

export function ChartComponent({ color, params, elementId }: { color: string, params: TChart, elementId: string }) {
  const [chartData, setChartData] = useState<any>({ datasets: [] });
  const [chartOptions, setChartOptions] = useState<any>({});

  useEffect(() => {
    setChartData(CHART_DATASET(color, elementId, params.data, params.label));
    setChartOptions(options(color));
  }, [color, elementId, params.data, params.label]);

  // useEffect(() => {
  //   setChartData(CHART_DATASET(color, elementId));
  // }, [LABELS]);

  return (
    <section className="relative flex h-full max-h-[574px] min-h-[210px] pb-[70px] w-full shrink items-end justify-center rounded-2 bg-secondary">
      <Line title={elementId} id={elementId} data={chartData} options={chartOptions} />
    </section>
  );
}
