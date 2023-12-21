import type { TMetrics } from "@/models/charts";

export default function MetricsComponent({ metrics }: { metrics: TMetrics }) {
    return (
        <div className="bg-white h-[189px] big_screen_h:h-[calc(30vh-48px)] ss_lg:h-[144px] ss_lg:w-full ss_lg:p-4 sx_lg:h-[300px] rounded-6 p-6 pt-3">
            <h4 className="text-heading-ss-bold ss_lg:text-text-sm-bold">
                Метрики
            </h4>

            <div>

            </div>
        </div>
    )
}
