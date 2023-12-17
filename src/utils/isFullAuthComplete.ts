import {TUserCommonData} from "@/models/userData";

export function handleIsFullAuthComplete(
    isAuthCheck: boolean,
    isUserAuth: boolean,
    userData: TUserCommonData | null,
    isUserSubscribed: boolean,
    unAuth: boolean
) {
    return (isAuthCheck && (!isUserAuth || !userData || (!isUserSubscribed && !unAuth)));
}

export function handleUserFinishedAuth() {
    const pathname = new URL(window.location.href).pathname

    return pathname === 'start';
}
