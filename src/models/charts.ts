export type TChart = {
    avg: number[];
    date: string[];
    dots: number[];
}

export type TUserCharts = {
    lifeBalance: TChart;
    nonLifeBalance: TChart;
    emotional: TChart;
    dayReports: TChart;
}
