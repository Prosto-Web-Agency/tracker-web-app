export type TChatCard = {
    username: string
    text: string
    created_at: string
}

export default function ChatCard({ username, text, created_at }: TChatCard) {
    return (
        <>
            {
                username === 'seniorl'
                    ? <div className="w-full flex flex-col pl-[20%] text-white">
                        <div className="w-full py-3 px-5 bg-orange-class flex justify-between">
                            <div className="text-17_400">
                                {text}
                            </div>
                            <div className="text-11_400 w-[40px] flex justify-end items-end text-white opacity-70">
                                {created_at}
                            </div>
                        </div>

                    </div>
                    : <div className="w-full pr-[20%] flex flex-col text-white">
                        <div className="w-full py-3 rounded-6 px-5 bg-bg-gray flex flex-col">
                            <div className="coloredTextTwo pb-1 text-11_500">
                                {username}
                            </div>
                            <div className="flex justify-between">
                                <div className="text-17_400 text-black">
                                    {text}
                                </div>
                                <div className="text-11_400 flex justify-end items-end text-gray-400">
                                    {created_at}
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </>

    )
}