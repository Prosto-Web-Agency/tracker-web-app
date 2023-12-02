export default function MainPage() {
    return (
        <section className="min-h-screen h-screen w-full">
            <div className="h-full w-full bg-bg-gray rounded-t-9 p-10 max-w-[1400px] mx-auto s_lg:p-6">
                <div className="h-[380px] flex gap-6 s_lg:flex-col-reverse s_lg:h-auto">
                    <div className="bg-white w-[384px] h-full rounded-6 p-6 s_lg:w-full s_lg:h-[192px] s_lg:bg-transparen">
                        <h3>Ваши инсайты</h3>
                    </div>
                    <div className="bg-white rounded-6 h-full w-[calc(100%-384px)] p-6 s_lg:w-full s_lg:h-[305px]">
                        <h3>Новости</h3>
                    </div>

                    <div className="">
                        <div>

                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}