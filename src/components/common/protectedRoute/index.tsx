'use client'

import { useRouter } from 'next/navigation';
import { useAppSelector } from "@/hooks/store";
import { useEffect } from 'react';
import { storage } from '@/utils/localStorage';
import { LOGIN_ACCOUNT, TEST_USER } from '@/consts/profile';

interface ProtectedRoutePropsI {
    onlyUnAuth?: boolean;
    UnAuth?: boolean;
    children: React.ReactNode;
}

function ProtectedRoute({ onlyUnAuth = false, UnAuth = false, children }: ProtectedRoutePropsI) {
    //@ts-ignore
    const { isAuthChecked, data } = useAppSelector(state => state?.user?.user);
    const router = useRouter();

    useEffect(() => {
        storage.set(LOGIN_ACCOUNT, TEST_USER);
    }, []);

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