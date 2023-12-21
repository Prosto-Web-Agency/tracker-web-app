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

export type TDiagram = {
    data: string[];
    dots: number[];
}

export type TUserDiagrams = {
    lifeBalance: TDiagram;
    nonLifeBalance: TDiagram;
    workLifeBalance: TDiagram;
    notRealise: TDiagram;
}

export type TMetrics = {
    all_time_report: number,
    report_streak: number,
    task_amount: number,
    full_time: number
}
