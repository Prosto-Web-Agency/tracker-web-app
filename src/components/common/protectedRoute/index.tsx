'use client'

import { useRouter } from 'next/navigation';
import { useAppSelector } from "@/hooks/store";

interface ProtectedRoutePropsI {
    onlyUnAuth?: boolean;
    UnAuth?: boolean;
    children: React.ReactNode;
}

function ProtectedRoute({ onlyUnAuth = false, UnAuth = false, children }: ProtectedRoutePropsI) {
    //@ts-ignore
    const { isAuthChecked, data } = useAppSelector(state => state?.user?.user);
    const router = useRouter();

    // TODO: сплеш скрин приложения
    if (!isAuthChecked) {
        return (<></>);
    }

    if (!onlyUnAuth && !UnAuth && !data) {
        router.push('/login');

        return (<></>);
    }

    return (
        <>
            {children}
        </>
    );
}

export default ProtectedRoute;