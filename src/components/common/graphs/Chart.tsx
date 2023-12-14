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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler
);

function getGradient(color: string) {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;

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
      min: 1,
      max: 50,
      display: false,
    },
    x: {
      display: false,
    },
  },
});

let LABELS: Array<string> = [];
let POINTS: Array<number> = [];

const CHART_DATASET = (color: string) => ({
  labels: LABELS,
  datasets: [
    {
      data: POINTS,
      fill: "start",
      pointHoverBackgroundColor: color,
      pointHoverBorderColor: "rgba(255, 255, 255, 1)",
      backgroundColor: getGradient(color),
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

export function ChartComponent({ color, params }: { color: string, params: {label: [], data: []} }) {
  const [chartData, setChartData] = useState<any>({ datasets: [] });
  const [chartOptions, setChartOptions] = useState<any>({});

  useEffect(() => {
    setChartData(CHART_DATASET(color));
    setChartOptions(options(color));

    LABELS = [...params?.label]
    POINTS = [...params?.data]
  }, []);

  useEffect(() => {
    setChartData(CHART_DATASET(color));
  }, [LABELS]);

  return (
    <section className="relative flex h-full max-h-[574px] min-h-[210px] pb-[70px] w-full shrink items-end justify-center rounded-2 bg-secondary">
      <Line title="" id={"canvas"} data={chartData} options={chartOptions} />
    </section>
  );
}
