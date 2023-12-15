import {TRank} from "@/components/common/cards/RankComponent";

export type TUserData = {
    first_name: string;
    surname: string;
    instagram: string;
    tg_username: string;
    login: string;
};

export type TUserCommonData = {
    first_name: string;
    image_url: string;
    instagram: string;
    rank_name: TRank['rank'];
    surname: string;
    tg_username: string;
};
