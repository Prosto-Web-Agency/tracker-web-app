import Image from "next/image";

type TModal = {
    open?: boolean;
    onClose?: () => void;
    children: React.ReactNode
}

export default function ModalComponent({ open, onClose, children }: TModal) {
    return (
        <div onClick={onClose}
            className={`p-10 w-screen h-screen bg-tr04 z-[100] backdrop-blur-sm fixed top-0 left-0 ${open ? 'flex' : 'hidden'} justify-center items-center`}
        >
            <div className="flex flex-col gap-10 h-auto min-h-[300px] w-[600px] max-w-[600px] min-w-[330px] bg-orange-class px-5 pt-4 pb-6 text-white">
                {children}
            </div>
        </div>
    )
}
