// import React, { useEffect, useRef, useState } from "react";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Filler,
// } from "chart.js";
// import { Line } from "react-chartjs-2";

// import Image from "next/image";
// import classNames from "classnames";
// import { externalTooltipHandler } from "./externalTooltipHandler";

// ChartJS.register(
//   CategoryScale, // x-axis
//   LinearScale, // y-axis
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Filler
// );

// function getGradient() {
//   const canvas = document.getElementById("canvas") as HTMLCanvasElement;

//   if (canvas) {
//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;
//     const gradient = ctx.createLinearGradient(0, 0, 0, 400);
//     gradient.addColorStop(0, "rgba(161, 88, 255, 0.52)");
//     gradient.addColorStop(1, "rgba(78, 79, 255, .03)");

//     return gradient;
//   }
// }

// const options = {
//   responsive: false,
//   plugins: {
//     legend: true,
//     tooltip: {
//       enabled: false,
//       external: externalTooltipHandler,
//     },
//   },
//   interaction: {
//     intersect: false,
//     mode: "index",
//   },
//   scales: {
//     y: {
//       display: false,
//     },
//     x: {
//       display: false,
//     },
//   },
// };

// const LABELS: Array<string> = [];
// LABELS.length = 30;
// LABELS.fill("Mar 7, 2023, 12:");

// const POINTS = [
//   9, 10, 12, 19, 10, 8, 10, 17, 16, 24, 34, 22, 25, 23, 27, 9, 10, 12, 19, 10,
//   8, 10, 17, 16, 24, 34, 22, 25, 23, 27,
// ];

// const CHART_DATASET = () => ({
//   labels: LABELS,
//   datasets: [
//     {
//       data: POINTS,
//       fill: "start",
//       backgroundColor: getGradient(),
//       hoverBorderWidth: 0.1,
//       borderColor: "#9D5AFF",
//       borderWidth: 1,
//       tension: 0.5,
//       pointRadius: 0.1,
//     },
//   ],
// });

// type ChartComponentProps = {
//   size?: "small" | "big" | "large";
//   tabs: TChartTabs;
//   tabsPosition?: 'above' | 'onTopOfGraph'
// };

// /* eslint-disable  @typescript-eslint/no-explicit-any */
// export function ChartComponent({ tabs, size = "big", tabsPosition = 'above' }: ChartComponentProps) {
//   const [chartData, setChartData] = useState<any>({ datasets: [] });
//   const [chartOptions, setChartOptions] = useState<any>({});
//   const [chartWidth, setChartWidth] = useState<string>("");
//   const [chartHeight, setChartHeight] = useState<string>("");
//   const lineContainerRef = useRef<HTMLElement | null>(null);

//   const { setIsLocked } = useLockScroll();

//   useEffect(() => {
//     () => {
//       setIsLocked(false);
//     };
//   }, []);

//   const lockScroll = () => {
//     setIsLocked(true);
//   };

//   const unlockScroll = () => {
//     setIsLocked(false);
//   };

//   useEffect(() => {
//     if (lineContainerRef && lineContainerRef.current) {
//       const height =
//         lineContainerRef.current?.offsetHeight > 350
//           ? 350
//           : lineContainerRef.current.offsetHeight - 70;
//       setChartWidth((lineContainerRef.current.offsetWidth + "px").trim());
//       setChartHeight((height + "px").trim());
//     }

//     setTimeout(() => {
//       setChartData(CHART_DATASET());
//       setChartOptions(options);
//     }, 500);

//     window.addEventListener("resize", () => {
//       if (lineContainerRef && lineContainerRef.current) {
//         setChartWidth("");

//         const height =
//           lineContainerRef.current?.offsetHeight > 350
//             ? 350
//             : lineContainerRef.current?.offsetHeight - 70;
//         setTimeout(() => {
//           if (!lineContainerRef.current) return;
//           setChartWidth((lineContainerRef.current.offsetWidth + "px").trim());
//           setChartHeight((height + "px").trim());
//         }, 500);
//       }
//     });
//   }, []);

//   return (
//     <section className="flex h-full w-full flex-col">
//       <section className={classNames('overflow-x-scroll pb-4 px-4 -mx-4', {
//         'flex md:hidden': tabsPosition === 'above',
//         'hidden': tabsPosition === 'onTopOfGraph'
//       })}>
//         <Slider tabs={tabs} />
//       </section>
//       <section
//         ref={lineContainerRef}
//         className={classNames(
//           "relative flex h-[210px] w-full shrink items-end justify-center rounded-3 bg-secondary md:h-full",
//           {
//             "md:max-h-[645px]": size === "large",
//             "md:max-h-[568px]": size === "big",
//             "max-h-[246px]": size === "small",
//           }
//         )}
//       >
//         <section className={classNames('absolute left-4 top-4 z-30 w-full justify-between overflow-x-scroll pr-8', {
//           'hidden md:flex': tabsPosition === 'above',
//           'flex': tabsPosition === 'onTopOfGraph'
//         })}>
//           <Slider tabs={tabs} tabClassName="!px-[12px] !py-[8px] md:!px-[16px] md:!py-[12px]" />
//         </section>
//         <CloseIcon className="absolute right-4 top-4" onClick={() => ""} />

//         <section className="absolute z-10 h-full w-chart overflow-hidden">
//           <Image
//             className="pointer-events-none w-full"
//             src="/chartBackground.svg"
//             alt="chart"
//             width={1360}
//             height={1000}
//           />
//         </section>
//         <div className="z-20 flex h-full w-full flex-col justify-end overflow-hidden rounded-3">
//           {chartHeight && chartWidth && (
//             <Line
//               onTouchStart={lockScroll}
//               onTouchEnd={unlockScroll}
//               id={"canvas"}
//               width={chartWidth}
//               height={chartHeight}
//               data={chartData}
//               options={chartOptions}
//               className=""
//             />
//           )}
//         </div>
//       </section>
//     </section>
//   );
// }
