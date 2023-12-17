'use client'

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useSelector } from "react-redux";
import {TUserCommonData} from "@/models/userData";
import {handleGetTokenAndLogin} from "@/utils/setterToken";
import {handleIsFullAuthComplete, handleUserFinishedAuth} from "@/utils/isFullAuthComplete";

interface ProtectedRoutePropsI {
    onlyUnAuth?: boolean;
    unAuth?: boolean;
    children: React.ReactNode;
}

function ProtectedRoute({ onlyUnAuth = false, unAuth = false, children }: ProtectedRoutePropsI) {
    const { isUserAuth, isAuthCheck, userData, isUserSubscribed }: {
        isAuthCheck: boolean,
        isUserAuth: boolean,
        userData: TUserCommonData | null,
        isUserSubscribed: boolean
    //@ts-ignore
    } = useSelector(state => state.user);
    const router = useRouter();

    useEffect(() => {
        const { token, login } = handleGetTokenAndLogin();

        if (handleIsFullAuthComplete(isAuthCheck, isUserAuth, userData, isUserSubscribed, unAuth)) {
            router.push(`/start${token ? '?token=' + token : ''}${login ? '&login=' + login : ''}`);
        } else if (handleUserFinishedAuth()) {
            router.push('/');
        }
    }, [isUserAuth, isAuthCheck, isUserSubscribed, userData, unAuth, router]);

    if (handleIsFullAuthComplete(isAuthCheck, isUserAuth, userData, isUserSubscribed, unAuth)) {
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
