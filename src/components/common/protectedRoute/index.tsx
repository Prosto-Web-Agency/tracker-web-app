'use client'

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useSelector } from "react-redux";

interface ProtectedRoutePropsI {
    onlyUnAuth?: boolean;
    UnAuth?: boolean;
    children: React.ReactNode;
}

function ProtectedRoute({ onlyUnAuth = false, UnAuth = false, children }: ProtectedRoutePropsI) {
    //@ts-ignore
    const { isUserAuth, isAuthCheck } = useSelector(state => state.user)
    const router = useRouter();

    useEffect(() => {
        const searchParams = new URL(window.location.href).searchParams;
        const pathname = new URL(window.location.href).pathname;
        const params: { token?: string, login?: string } = {};

        const token = searchParams.get('token');
        const login = searchParams.get('login');

        if (token) params['token'] = token;
        if (login) params['login'] = login;

        if (isAuthCheck && !isUserAuth) {
            router.push(`/start${token ? '?token=' + token : ''}${login ? '&login=' + login : ''}`);
        } else if (pathname === 'start') {
            router.push('/');
        }
    }, [isUserAuth, isAuthCheck]);

    if (!isUserAuth) {
        return (<></>);
    }

    // if (!onlyUnAuth && !UnAuth) {
    //     return (<></>);
    // }

    return (
        <>
            {children}
        </>
    );
}

export default ProtectedRoute;
