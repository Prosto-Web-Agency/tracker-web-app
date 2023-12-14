'use client'

import { useRouter } from 'next/navigation';
import { useAppSelector } from "@/hooks/store";
import { useEffect } from 'react';

interface ProtectedRoutePropsI {
    onlyUnAuth?: boolean;
    UnAuth?: boolean;
    children: React.ReactNode;
}

function ProtectedRoute({ onlyUnAuth = false, UnAuth = false, children }: ProtectedRoutePropsI) {
    //@ts-ignore
    // const { isAuthChecked, data } = useAppSelector(state => state?.user?.user);
    const isAuthChecked = false;
    const router = useRouter();

    useEffect(() => {
        // Вот пользователь заходит, мы проверяем есть ли токен и логин
        // Если нет, то редиректим его на пасс с service=1
        // Если есть, то пропускаем его
        if (!isAuthChecked) {
            // Redirect to /start if not authenticated
            router.push('/start');
        }
    }, []);

    // TODO: сплеш скрин приложения
    if (!isAuthChecked) {
        return (<></>);
    }

    if (!onlyUnAuth && !UnAuth) {
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
