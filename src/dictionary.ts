/* name the stats (ant-like work) */
import { DictionaryStats } from "./types/internal";
import { getRank } from "./utils/ranks";

export const dictionary: DictionaryStats = {
    DBD_KillerSkulls: {
        name: 'Killer Rank',
        key: 'killer_rank',
        category: 'userinfo',
        transform: (value) => getRank(value),
    },
    DBD_CamperSkulls: {
        name: 'Survivor Rank',
        key: 'survivor_rank',
        category: 'userinfo',
        transform: (value) => getRank(value),
    },
    DBD_KilledCampers: {
        name: 'Survivors Killed (mori)',
        key: 'survivors_killed',
        category: 'killer',
        transform: (value) => value
    },
    DBD_SacrificedCampers: {
        name: 'Survivors Sacrificed',
        key: 'survivors_sacrificed',
        category: 'killer',
        transform: (value) => value
    },
    DBD_GeneratorPct_float: {
        name: 'Generators Done',
        key: 'generators_done',
        category: 'survivor',
        transform: (value) => value
    },
    DBD_HealPct_float: {
        name: 'Healing Done',
        key: 'healing_done',
        category: 'survivor',
        transform: (value) => value
    },
    DBD_Escape: {
        name: 'Escapes',
        key: 'escapes',
        category: 'survivor',
        transform: (value) => value
    },
    DBD_EscapeKO: {
        name: 'Escapes in dying state',
        key: 'escapes_in_dying_state',
        category: 'survivor',
        transform: (value) => value
    },
    DBD_EscapeThroughHatch: {
        name: 'Escapes through the hatch',
        key: 'escapes_through_hatch',
        category: 'survivor',
        transform: (value) => value
    },
    DBD_SkillCheckSuccess: {
        name: 'Skill Checks',
        key: 'skill_checks',
        category: 'survivor',
        transform: (value) => value
    },
    DBD_UnhookOrHeal: {
        name: 'Unhooks',
        key: 'unhooks',
        category: 'survivor',
        transform: (value) => value
    },
    DBD_UnhookOrHeal_PostExit: {
        name: 'Unhooks after the door is unlocked',
        key: 'unhooks_post_exit',
        category: 'survivor',
        transform: (value) => value
    },
    DBD_BloodwebMaxLevel: {
        name: 'Bloodweb Max Level',
        key: 'bloodweb_max_level',
        category: 'userinfo',
        transform: (value) => value
    },
    DBD_BloodwebPoints: {
        name: 'Total Bloodweb Points',
        key: 'bloodweb_total_points_spended',
        category: 'userinfo',
        transform: (value) => value
    },
    DBD_MaxBloodwebPointsOneCategory: {
        name: 'Max points spended in one category',
        key: 'bloodweb_max_points_in_one_category',
        category: 'userinfo',
        transform: (value) => value
    },
    DBD_UnlockRanking: {
        name: 'Peps Unlocked',
        key: 'peps_unlocked',
        category: 'userinfo',
        transform: (value) => value
    },
    /* here we go weird names */
    DBD_DLC6_Slasher_Stat2: {
        name: 'Hooked survivors in the basement',
        key: 'hooks_in_the_basement',
        category: 'killer',
        transform: (value) => value
    },
    DBD_Chapter18_Slasher_Stat2: {
        name: 'Hooked survivors during endgame collapse',
        key: 'hooks_during_endgame',
        category: 'killer',
        transform: (value) => value
    },
    DBD_Chapter20_Slasher_Stat2: {
        name: 'Hooked survivors before a single generator is repaired',
        key: 'hooks_before_gens',
        category: 'killer',
        transform: (value) => value
    },
    DBD_Chapter21_Slasher_Stat2: {
        name: 'Hooked +3 survivors in the basement',
        key: 'hooks_plus3_survivors_in_the_basement',
        category: 'killer',
        transform: (value) => value
    },
    DBD_Chapter14_Slasher_Stat1: {
        name: 'Hooks while all the other survivors are injured',
        key: 'hooks_while_all_injured',
        category: 'killer',
        transform: (value) => value
    },
    DBD_Chapter13_Slasher_Stat1: {
        name: 'Hatches closed',
        key: 'hatches_closed',
        category: 'killer',
        transform: (value) => value
    },
    DBD_Chapter16_Camper_Stat1_float: {
        name: 'Healing being the obsession',
        key: 'healing_being_obsession',
        category: 'survivor',
        transform: (value) => value
    },
    DBD_Chapter17_Camper_Stat2_float: {
        name: 'Healing while the rest is injured',
        key: 'healing_while_rest_is_injured',
        category: 'survivor',
        transform: (value) => value
    },
    DBD_Chapter11_Camper_Stat1_float: {
        name: 'Healed allies when injured',
        key: 'healing_being_injured',
        category: 'survivor',
        transform: (value) => value
    },
    DBD_DLC7_Camper_Stat2: {
        name: 'Exit gates opened',
        key: 'gates_opened',
        category: 'survivor',
        transform: (value) => value
    },
    DBD_Camper8_Stat1: {
        name: 'Damage generators repaired',
        key: 'generators_broken_repaired',
        category: 'survivor',
        transform: (value) => value
    },
    DBD_Camper8_Stat2: {
        name: 'Vaults during chase',
        key: 'vaults_done',
        category: 'survivor',
        transform: (value) => value
    },
    DBD_DLC9_Camper_Stat1: {
        name: 'Attacks evaded by vaulting',
        key: 'vaults_attacks_evaded',
        category: 'survivor',
        transform: (value) => value
    },
    DBD_Chapter19_Camper_Stat1: {
        name: 'Escaped by stunning killer with pallet',
        key: 'chase_escape_by_pallet',
        category: 'survivor',
        transform: (value) => value
    },
    DBD_DLC7_Camper_Stat1: {
        name: 'Chests opened',
        key: 'chests_opened',
        category: 'survivor',
        transform: (value) => value
    },
    DBD_Event1_Stat2: { // naming makes no sense whatsoever
        name: 'Chests opened in the basement',
        key: 'chests_opened_in_basement',
        category: 'survivor',
        transform: (value) => value
    },
    DBD_DLC7_Slasher_Stat2: {
        name: 'Obsessions sacrificed',
        key: 'survivors_sacrificed_obsession',
        category: 'killer',
        transform: (value) => value
    },
    DBD_DLC8_Slasher_Stat2: {
        name: 'Survivors killed/sacrificed during endgame collapse',
        key: 'survivors_sacrificed_during_endgame',
        category: 'killer',
        transform: (value) => value
    },
    DBD_BloodwebMaxPrestigeLevel: {
        name: 'Max prestige level',
        key: 'max_prestige_level',
        category: 'userinfo',
        transform: (value) => value
    },
    DBD_Chapter17_Camper_Stat1: {
        name: 'Items Depleted',
        key: 'items_depleted',
        category: 'userinfo',
        transform: (value) => value
    },
    DBD_Chapter13_Slasher_Stat2: {
        name: 'Survivors downed next to a pallet',
        key: 'downs_next_to_pallet',
        category: 'killer',
        transform: (value) => value
    },
    DBD_Chapter19_Slasher_Stat2: {
        name: 'Survivors downed while carrying another',
        key: 'downs_while_carrying_a_survivor',
        category: 'killer',
        transform: (value) => value
    },
    DBD_Chapter17_Slasher_Stat2: {
        name: 'Survivors downed with a exposed effect',
        key: 'downs_exposed_survivors',
        category: 'killer',
        transform: (value) => value
    },
}