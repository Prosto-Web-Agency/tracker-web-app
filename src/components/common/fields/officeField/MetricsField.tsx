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


export default function MetricsComponent({ metrics }: { metrics: TMetrics }) {
    const maxMetrics = Math.max(...Object.values(metrics));

    return (
        <div className="bg-white h-[300px] rounded-6 p-6 pt-3">
            <h4 className="text-heading-ss-bold ss_lg:text-text-sm-bold">
                Метрики
            </h4>

            <div className='flex flex-col gap-4 pt-4'>
                {
                    [
                        {
                            title: 'Количество написанных отчетов',
                            value: metrics.task_amount,
                            amount: ''
                        },
                        {
                            title: 'Время потраченное на life balance',
                            value: metrics.all_time_report,
                            amount: 'ч'
                        },
                        {
                            title: 'Серия отчетов',
                            value: metrics.report_streak,
                            amount: ''
                        }
                    ].map(({ title, value, amount }) => (
                        <div key={value + title} className="relative">
                            <p className="absolute left-2 z-10 pt-2 text-text-m-bold text-white">
                                {title}
                            </p>

                            <p className="absolute right-2 z-10 pt-2 text-text-m-bold text-white">
                                {value}{amount}
                            </p>

                            <BorderLinearProgress
                                variant="determinate"
                                value={(value / maxMetrics) * 100}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
