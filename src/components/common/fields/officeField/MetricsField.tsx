import type { TMetrics } from "@/models/charts";
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 40,
    borderRadius: 20,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: 'linear-gradient(90deg, #E12131 0%, #FEA310 100%)',
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: 'linear-gradient(90deg, #E12131 0%, #FEA310 100%)',
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
                <div className="relative">
                    <p className="absolute left-2 z-10 pt-2 text-text-m-bold text-white">
                        Все затреканное время
                    </p>

                    <BorderLinearProgress
                        variant="determinate"
                        value={(metrics.full_time / maxMetrics) * 100}
                    />
                </div>
                <div className="relative">
                    <p className="absolute left-2 z-10 pt-2 text-text-m-bold text-white">
                        Время потраченное на life balance
                    </p>

                    <BorderLinearProgress
                        variant="determinate"
                        value={(metrics.all_time_report / maxMetrics) * 100}
                    />
                </div>
                <div className="relative">
                    <p className="absolute left-2 z-10 pt-2 text-text-m-bold text-white">
                        Серия отчетов
                    </p>

                    <BorderLinearProgress
                        variant="determinate"
                        value={(metrics.report_streak / maxMetrics) * 100}
                    />
                </div>
                <div className="relative">
                    <p className="absolute left-2 z-10 pt-2 text-text-m-bold text-white">
                        Количество написанных отчетов
                    </p>

                    <BorderLinearProgress
                        variant="determinate"
                        value={(metrics.task_amount / maxMetrics) * 100}
                    />
                </div>
            </div>
        </div>
    )
}
