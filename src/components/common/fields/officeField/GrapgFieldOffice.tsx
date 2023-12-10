import {ChartComponent} from "@/components/common/graphs/Chart";

export type TGraphField = {
    name: string
    params: []
}

export default function GraphFieldOffice({name, params}: TGraphField) {
    return (
        <div className="bg-white h-[230px] big_screen_h:h-[calc(33vh-58px)] sx_lg:h-[300px] rounded-6 p-6 pt-3">
            <h4 className="text-heading-ss-bold">
                {name}
            </h4>

            <div>
                <ChartComponent />
            </div>
        </div>
    )
}