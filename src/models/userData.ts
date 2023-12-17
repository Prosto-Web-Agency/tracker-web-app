import { TRank } from "@/components/common/cards/RankComponent";

export type TUserData = {
    first_name: string;
    surname: string | null;
    instagram: string;
    tg_username: string;
    login: string;
};

export type TUserCommonData = Omit<TUserData, "login"> & {
    image_url?: string;
    rank_name: TRank['rank'];
    is_anon: number;
};

export type TUserSmallData = Omit<TUserData, "login" | "tg_username" | "instagram" | "surname"> & {
    profile_image: string | null;
    task_count: number;
}

export type TUserSmallDataArray = TUserSmallData[];

export type TUserSearchData = Omit<TUserData, "login" | "tg_username" | "instagram"> & {
    image_url: string | null;
    is_anon: number;
    rank_name: TRank['rank'];
}

export type TUserSearchDataArray = TUserSearchData[];
