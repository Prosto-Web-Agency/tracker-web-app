type TNew = {
    header?: string;
    text: string
}

export default function NewsCard({ header, text }: TNew) {
    function validHeaderValue(header?: string) {
        if (!header) {
            return "***";
        } else if (header.length > 100) {
            return header.slice(0, 100) + '...';
        }

        return header;
    }
    return (
        <div className="w-full pb-4  gap-4  border-b-[0.5px] border-black duration-100 hover:scale-[1.002] scale-1 flex flex-col s_lg:pb-2 s_lg:gap-2">
            <h5 className="text-heading-ss s_lg:text-text-m-bold">
                {validHeaderValue(header)}
            </h5>
            <p>
                {text}
            </p>
        </div>
    )
}
