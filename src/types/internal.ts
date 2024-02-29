export type DictionaryStats = {
    [key: string]: {
        name: string,
        key: string | null,
        category: string | null,
        transform?: (value: number) => GenericStat['value'];
    };
}

type RankStat = {
    rank_name: string,
    rank_peps: number,
    rank_max_peps: number,
}

export type GenericStat = {
    key: string,
    name: string,
    category: string,
    value: number | string | RankStat,
};

export type UserStats = {
    killer_rank: RankStat,
    survivor_rank: RankStat,
    bloodweb_max_level: number,
    bloodweb_total_points_spended: number,
    max_prestige_level: number,
    bloodweb_max_points_in_one_category: number,
    peps_unlocked: number,
    items_depleted: number,
}