'use client'

import { useRouter } from 'next/navigation';
import {useEffect, useState} from 'react';
import { useSelector } from "react-redux";
import {TUserCommonData} from "@/models/userData";
import {handleGetTokenAndLogin} from "@/utils/setterToken";
import {handleIsFullAuthComplete, handleUserFinishedAuth} from "@/utils/isFullAuthComplete";
import {TUserDataState} from "@/store/reducers/userReducer";

interface ProtectedRoutePropsI {
    onlyUnAuth?: boolean;
    unAuth?: boolean;
    children: React.ReactNode;
}

function ProtectedRoute({ onlyUnAuth = false, unAuth = false, children }: ProtectedRoutePropsI) {
    const { isUserAuth, isAuthCheck, userData, isUserSubscribed }: {
        isAuthCheck: boolean,
        isUserAuth: boolean,
        userData: TUserDataState,
        isUserSubscribed: boolean
    //@ts-ignore
    } = useSelector(state => state.user);
    const [isNeedToRender, setRender] = useState(handleIsFullAuthComplete(isAuthCheck, isUserAuth, userData, isUserSubscribed, Boolean(unAuth)));
    const router = useRouter();

    useEffect(() => {
        const { token, login } = handleGetTokenAndLogin();

        if (userData !== undefined && handleIsFullAuthComplete(isAuthCheck, isUserAuth, userData, isUserSubscribed, Boolean(unAuth))) {
            router.push(`/start${token ? '?token=' + token : ''}${login ? '&login=' + login : ''}`);
        } else if (handleUserFinishedAuth()) {
            router.push('/');
        }

        setRender(handleIsFullAuthComplete(isAuthCheck, isUserAuth, userData, isUserSubscribed, Boolean(unAuth)));
    }, [isUserAuth, isAuthCheck, isUserSubscribed, userData, unAuth, router]);

    if (!isAuthCheck || isNeedToRender) {
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
