import { TRank } from "@/components/common/cards/RankComponent";

export type TIsAnon = boolean;

export type TUserData = {
    first_name: string;
    surname: string | null;
    instagram: string;
    tg_username: string;
    is_anon: TIsAnon;
};

export type TUserCommonData = TUserData & {
    image_url?: string;
    rank_name: TRank['rank'];
    login: string;
    current_subscription: string;
    subscription_paid_date: string | null;
};

export type TUserPopupData = TUserData & {
    image_url?: string;
    rank: TRank['rank'];
    hash_tag_header?: string;
    achievements: { achievement_name: string }[];
    login: string;
    is_subscribe: boolean;
};

export type TUserSmallData = Omit<TUserData, | "tg_username" | "instagram"> & {
    image_url: string | null;
    task_count: number;
    login: string;
    rank: TRank['rank'];
}

export type TUserSmallDataArray = TUserSmallData[];

export type TUserSearchData = Omit<TUserData, | "tg_username" | "instagram" | "surname"> & {
    image_url: string | null;
    is_anon: TIsAnon;
    is_subscribe: boolean;
    login: string;
    rank_name: TRank['rank'];
}

export type TUserSearchDataArray = TUserSearchData[];

export type TUserSubscriptionModal = {
    tg_id_streamer: number;
    streamer_name: string;
    image_url: string | null;
    streamer_is_anon: TIsAnon;
    streamer_login: string;
}

export type TUserSubscriptionsArray = TUserSubscriptionModal[];

export type TUserSubscriptionsReport = {
    report_text: string;
    first_name: string;
    image_url: string | null;
    login: string;
    is_anon: TIsAnon;
    rank: TRank['rank'];
}

export type TUserSubscriptionsTask = Omit<TUserSubscriptionsReport, "report_text"> & {
    result_task_text: string;
}

export type TUserSubscriptionsTaskArray = TUserSubscriptionsTask[];

export type TUserSubscriptionsReportArray = TUserSubscriptionsReport[];

export type TRankUpdateList = {
    count: number;
    next: string | null;
    previous: string | null;
    results: {
        login: string | null;
        first_name: string | null;
        surname: string | null;
        rank_name: string | null;
        date_field: string | null;
        image_url: string | null;
    }[]
}
