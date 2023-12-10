'use client'

import React from "react";
import { ChartComponent } from "./Chart";
import classNames from "classnames";

export type TChartTabs = {
    [key: string]: string; // label => value
};

type TChartContainer = {
    size: 'small' | 'big' | 'large';
    tabs: TChartTabs;
    tabsPosition?: 'above' | 'onTopOfGraph'
};

export function ChartContainer({ size = 'big', tabs, tabsPosition }: TChartContainer) {
  return (
    <section className={classNames("relative mr-auto backdrop-blur-bg ml-auto flex md:h-screen w-full shrink items-start", {
        ['md:max-h-[645px]']: size === 'large',
        ['md:max-h-[568px]']: size === 'big',
        ['max-h-[246px]']: size === 'small',
    })}>
      <ChartComponent tabs={tabs} size={size} tabsPosition={tabsPosition} />
    </section>
  );
}
