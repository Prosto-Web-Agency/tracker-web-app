import { TRank } from "@/components/common/cards/RankComponent";

export type TUserData = {
    first_name: string;
    surname: string | null;
    instagram: string;
    tg_username: string;
    is_anon: number;
};

export type TUserCommonData = TUserData & {
    image_url?: string;
    rank_name: TRank['rank'];
};

export type TUserPopupData = TUserData & {
    image_url?: string;
    rank_name: TRank['rank'];
    hash_tag_header?: string;
    achievements: { achievement_name: string }[];
    login: string;
};

export type TUserSmallData = Omit<TUserData, | "tg_username" | "instagram"> & {
    image_url: string | null;
    task_count: number;
    login: string;
}

export type TUserSmallDataArray = TUserSmallData[];

export type TUserSearchData = Omit<TUserData, | "tg_username" | "instagram"> & {
    image_url: string | null;
    is_anon: number;
    rank_name: TRank['rank'];
    login: string;
}

export type TUserSearchDataArray = TUserSearchData[];

export type TUserSubscriptionModal = {
    tg_id_streamer: number;
    streamer_name: string;
    image_url: string | null;
    streamer_is_anon: string;
    streamer_login: string;
}

export type TUserSubscriptionsArray = TUserSubscriptionModal[];
