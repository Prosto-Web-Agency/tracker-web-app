import {TUserDataState} from "@/store/reducers/userReducer";

export function handleIsFullAuthComplete(
    isAuthCheck: boolean,
    isUserAuth: boolean,
    userData: TUserDataState,
    isUserSubscribed: boolean,
    unAuth: boolean
) {
    return (isAuthCheck && (!isUserAuth || !userData || (!isUserSubscribed && !unAuth)));
}

export function handleUserFinishedAuth() {
    const pathname = new URL(window.location.href).pathname

    return pathname === 'start';
}
