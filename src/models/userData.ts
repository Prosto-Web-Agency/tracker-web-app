import { TRank } from "@/components/common/cards/RankComponent";

export type TUserData = {
    first_name: string;
    surname: string | null;
    instagram: string;
    tg_username: string;
    login: string;
};

export type TUserCommonData = Omit<TUserData, "login"> & {
    image_url: string;
    rank_name: TRank['rank'];
};

export type TUserSmallData = Omit<TUserData, "login" | "tg_username" | "instagram"> & {
    profile_image: string | null;
    task_count: number;
}

export type TUserSmallDataArray = TUserSmallData[];
