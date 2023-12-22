import { TRank } from "@/components/common/cards/RankComponent";

type TIsAnon = boolean;

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
};

achievements
    :
    []
first_name
    :
    "Анвар Кайратович"
hash_tag_header
    :
    "#RECs #RECsIT"
image_url
    :
    "https://storage.yandexcloud.net/rec-media/profile_images/Screenshot_2023-12-22_at_14.48.04.png?AWSAccessKeyId=YCAJEy42NPtXKEF8KoTybWbqu&Signature=%2FECYExsTI2QZ6CS9Ne1VMIAb5vE%3D&Expires=1703270693"
instagram
    :
    "@anvar_shaykenov"
is_anon
    :
    false
is_subscribe
    :
    false
login
    :
    "anvarks"
rank_name
    :
    "empty"
surname
    :
    "Шайкено"
tg_username
    :
    "@anvarks"

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
}

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
