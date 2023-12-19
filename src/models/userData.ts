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
}

export type TUserSearchDataArray = TUserSearchData[];
