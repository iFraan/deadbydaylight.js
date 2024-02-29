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

export type KillerStats = {
    survivors_killed: number;
    survivors_sacrificed: number;
    hooks_in_the_basement: number;
    survivors_sacrificed_obsession: number;
    survivors_sacrificed_during_endgame: number;
    hatches_closed: number;
    downs_next_to_pallet: number;
    hooks_while_all_injured: number;
    downs_exposed_survivors: number;
    hooks_during_endgame: number;
    downs_while_carrying_a_survivor: number;
    hooks_before_gens: number;
    hooks_plus3_survivors_in_the_basement: number;
};

export type SurvivorStats = {
    generators_done: number;
    healing_done: number;
    escapes_in_dying_state: number;
    escapes: number;
    skill_checks: number;
    unhooks: number;
    unhooks_post_exit: number;
    escapes_through_hatch: number;
    generators_broken_repaired: number;
    vaults_done: number;
    chests_opened: number;
    gates_opened: number;
    chests_opened_in_basement: number;
    vaults_attacks_evaded: number;
    healing_being_injured: number;
    healing_being_obsession: number;
    healing_while_rest_is_injured: number;
    chase_escape_by_pallet: number;
}

export type Userinfo = {
    platform: 'Steam',
    id: string,
}