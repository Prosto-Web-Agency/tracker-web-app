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
                    ? <div className="w-full pl-6 flex flex-col bg-orange-class text-white">
                        <div className="w-full flex">
                            <div>
                                {text}
                            </div>
                            <div>
                                {created_at}
                            </div>
                        </div>

                    </div>
                    : <div className="w-full pr-6 flex flex-col bg-bg-gray text-white">
                        <div className="w-full flex">
                            <div>
                                {text}
                            </div>
                            <div>
                                {created_at}
                            </div>
                        </div>

                    </div>
            }
        </>

    )
}