import type { TMetrics } from "@/models/charts";
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 40,
    borderRadius: 20,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: 'rgba(228, 41, 49, 0.1)',
        backgroundImage: 'linear-gradient(90deg, rgba(228, 41, 49, 0.3) 0%, rgba(251, 146, 23, 0.3) 100%)',
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundImage: 'linear-gradient(90deg, #E42931 0%, #FB9217 100%)',
    },
}));


export default function MetricsComponent({ metrics }: { metrics: TMetrics | null }) {
    return (
        <div className="bg-white h-[300px] rounded-6 p-6 pt-3">
            <h4 className="text-heading-ss-bold ss_lg:text-text-sm-bold">
                Метрики
            </h4>

            <div className='flex flex-col gap-4 pt-4'>
                {
                    metrics ? (
                        <>
                            {
                                [
                                    {
                                        title: 'Совершенных успехов',
                                        value: metrics.task_amount,
                                        amount: 'действий'
                                    },
                                    {
                                        title: 'Страйк (отчеты без пропуска)',
                                        value: metrics.all_time_report,
                                        amount: 'дней'
                                    },
                                    {
                                        title: 'Количество написанных отчетов',
                                        value: metrics.report_streak,
                                        amount: ''
                                    }
                                ].map(({ title, value, amount }) => (
                                    <div key={value + title} className="relative">
                                        <p className="absolute lg:text-text-s lg:pt-3 left-2 z-10 pt-2 text-text-m-bold text-white">
                                            {title}
                                        </p>

                                        <p className="absolute right-2 z-10 pt-2 text-text-m-bold text-white">
                                            {value}{' '}{amount}
                                        </p>

                                        <BorderLinearProgress
                                            variant="determinate"
                                            value={100}
                                        />
                                    </div>
                                ))
                            }
                        </>
                    ) : (
                        <>
                            п
                        </>
                    )
                }
            </div>
        </div>
    )
}
