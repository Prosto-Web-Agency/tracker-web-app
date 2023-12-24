import {TIsAnon} from "@/models/userData";
import {TRank} from "@/components/common/cards/RankComponent";

export type TInsightCard = {
    first_name: string;
    text: string;
    is_anon: TIsAnon;
    login: string | null;
    rank: TRank['rank'];
    image_url: string | null;
}

export type TInsightCardArray = TInsightCard[];
