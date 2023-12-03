import NewsCard from "../cards/NewsCard";

export default function ChatField() {
    return (
        <div className="min-w-[282px] px-4 w-[390px] rounded-6 lg:w-full h-[300px] bg-white overflow-hidden">
            <h3 className="mt-3 ml-4 text-heading-s s_lg:text-heading-ss-bold">
                Чат
            </h3>

            <div className="overflow-y-scroll pb-12 s_lg:pb-8 flex flex-col gap-4 scroll-hidden h-[230px] w-full s_lg:gap-2">
                <NewsCard header="Название новости" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, dolores." />
                <NewsCard header="Название новости" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, dolores." />
                <NewsCard header="Название новости" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, dolores." />
            </div>
            <div className="h-[50px] mt-1 w-full">
                <input type="text" />
            </div>
        </div>
    )
}