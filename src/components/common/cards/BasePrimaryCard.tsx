'use client'

type BasePrimaryCardProps = {
    title?: string | null;
    children: React.ReactNode;
    className?: string;
}

export default function BasePrimaryCard({
    title,
    children,
    className
}: BasePrimaryCardProps) {
    return (
        <section className={`flex flex-col gap-6 w-full h-full p-4 bg-white rounded-5 ${className}`}>
            {title && (
                <div className="flex">
                    <h2 className="rounded-5 text-white text-16_700 px-4 py-2 bg-gradient">
                        {title}
                    </h2>
                </div>
            )}

            {children}
        </section>
    )
}