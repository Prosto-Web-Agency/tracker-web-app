'use client';

type BaseSecondaryCardProps = {
  title?: string | null;
  children: React.ReactNode;
  className?: string;
};

export default function BaseSecondaryCard({
  title,
  children,
  className,
}: BaseSecondaryCardProps) {
  return (
    <section
      className={`flex flex-col gap-6 w-full h-full p-4 bg-gradient rounded-4 ${className}`}
    >
      {title && (
        <div className="flex">
          <h2 className="rounded-5 text-16_700 px-4 py-2 bg-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E01D31] to-[#FEA50F]">
              {title}
            </span>
          </h2>
        </div>
      )}

      {children}
    </section>
  );
}
