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
import Image from "next/image";

ChartJS.register(
    CategoryScale, // x-axis
    LinearScale, // y-axis
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler
);

enum Tabs {
  Price = "Price",
  TVL = "TVL",
  Volume = "Volume",
}

function getGradient() {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const gradient = ctx.createLinearGradient(0, 0, 0, 400);
  gradient.addColorStop(0, "rgba(161, 88, 255, 0.52)");
  gradient.addColorStop(1, "rgba(78, 79, 255, .03)");

  return gradient;
}

const options = {
  plugins: {
    legend: true,
    tooltip: {
      enabled: false,
      position: "nearest",
      external: externalTooltipHandler,
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
};

const LABELS: Array<string> = [];
LABELS.length = 29;
LABELS.fill("Mar 7, 2023, 12:");

const POINTS = [
  9, 10, 12, 19, 10, 8, 10, 17, 16, 24, 34, 22, 25, 23, 27, 9, 10, 12, 19, 10,
  8, 10, 17, 16, 24, 34, 22, 25, 23, 27,
];

const CHART_DATASET = () => ({
  labels: LABELS,
  datasets: [
    {
      data: POINTS,
      fill: "start",
      pointHoverBackgroundColor: "rgba(78, 79, 255, 1)",
      pointHoverBorderColor: "rgba(255, 255, 255, 1)",
      backgroundColor: getGradient(),
      hoverBorderWidth: 0.1,
      borderColor: "#9D5AFF",
      borderWidth: 1,
      tension: 0.5,
      pointDotRadius: 1,
      pointDotStrokeWidth: 8,
      pointHitDetectionRadius: 20,
      pointRadius: 0.1,
    },
  ],
});

export function ChartComponent() {
  const [chartData, setChartData] = useState<any>({ datasets: [] });
  const [chartOptions, setChartOptions] = useState<any>({});

  useEffect(() => {
    setChartData(CHART_DATASET());
    setChartOptions(options);
  }, []);

  return (
      <section className="relative flex h-full max-h-[574px] min-h-[210px] w-full shrink items-end justify-center rounded-2 bg-secondary">
        <Line id={"canvas"} data={chartData} options={chartOptions} />
        <section className="absolute -z-[1] h-full w-full overflow-hidden">
          <Image
              className="w-full"
              src="/chartBackground.svg"
              alt="chart"
              width={1000}
              height={1000}
          />
        </section>
      </section>
  );
}
