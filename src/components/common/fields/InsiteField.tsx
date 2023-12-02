import InsaitCard from "../cards/InsaitCard";

export default function InsaitField() {
    return (
        <div className="bg-white w-[384px] h-full rounded-6 flex flex-col gap-4 pb-0 p-6 s_lg:w-full s_lg:h-[192px] s_lg:bg-transparent s_lg:p-0">
            <h3 className="text-heading-s s_lg:hidden pl-3">Ваши инсайты</h3>
            <div className="h-full w-full rounded-t-6 overflow-y-scroll scroll-hidden flex flex-col gap-4 s_lg:rounded-t-[0px] s_lg:overflow-y-hidden s_lg:w-screen s_lg:ml-[-24px] s_lg:pl-6 s_lg:overflow-x-scroll s_lg:flex-row">

                <InsaitCard header='Insait' name="Name" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium veritatis soluta, repudiandae molestiae ut perspiciatis.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium veritatis soluta, repudiandae molestiae ut perspiciatis.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium veritatis soluta, repudiandae molestiae ut perspiciatis." />
                <InsaitCard header='Insait' name="Name" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium veritatis soluta, repudiandae molestiae ut perspiciatis.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium veritatis soluta, repudiandae molestiae ut perspiciatis.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium veritatis soluta, repudiandae molestiae ut perspiciatis." />
                <InsaitCard header='Insait' name="Name" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium veritatis soluta, repudiandae molestiae ut perspiciatis.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium veritatis soluta, repudiandae molestiae ut perspiciatis.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium veritatis soluta, repudiandae molestiae ut perspiciatis." />
                <InsaitCard header='Insait' name="Name" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium veritatis soluta, repudiandae molestiae ut perspiciatis.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium veritatis soluta, repudiandae molestiae ut perspiciatis.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium veritatis soluta, repudiandae molestiae ut perspiciatis." />
                

            </div>
        </div>
    )
}