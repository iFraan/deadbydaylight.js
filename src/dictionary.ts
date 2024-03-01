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
    },
    DBD_SacrificedCampers: {
        name: 'Survivors Sacrificed',
        key: 'survivors_sacrificed',
        category: 'killer',
    },
    DBD_GeneratorPct_float: {
        name: 'Generators Done',
        key: 'generators_done',
        category: 'survivor',
    },
    DBD_HealPct_float: {
        name: 'Healing Done',
        key: 'healing_done',
        category: 'survivor',
    },
    DBD_Escape: {
        name: 'Escapes',
        key: 'escapes',
        category: 'survivor',
    },
    DBD_EscapeKO: {
        name: 'Escapes in dying state',
        key: 'escapes_in_dying_state',
        category: 'survivor',
    },
    DBD_EscapeThroughHatch: {
        name: 'Escapes through the hatch',
        key: 'escapes_through_hatch',
        category: 'survivor',
    },
    DBD_HookedAndEscape: {
        name: 'Escapes after unhooking yourself',
        key: 'escapes_unhook_self',
        category: 'survivor',
    },
    DBD_CamperNewItem: {
        name: 'Escapes with new item',
        key: 'escapes_with_new_item',
        category: 'survivor',
    },
    DBD_CamperEscapeWithItemFrom: {
        name: "Escapes with another survivor's item",
        key: 'escapes_with_borrowed_item',
        category: 'survivor',
    },
    DBD_SkillCheckSuccess: {
        name: 'Skill Checks',
        key: 'skill_checks',
        category: 'survivor',
    },
    DBD_UnhookOrHeal: {
        name: 'Unhooks',
        key: 'unhooks',
        category: 'survivor',
    },
    DBD_UnhookOrHeal_PostExit: {
        name: 'Unhooks after the door is unlocked',
        key: 'unhooks_post_exit',
        category: 'survivor',
    },
    DBD_CamperMaxScoreByCategory: {
        name: 'Perfect games (+4000 points in each category)',
        key: 'survivor_perfect_games',
        category: 'survivor',
    },
    DBD_SlasherMaxScoreByCategory: {
        name: 'Perfect games (+4000 points in each category)',
        key: 'killer_perfect_games',
        category: 'killer',
    },
    DBD_CamperFullLoadout: {
        name: 'Trials with full loadout',
        key: 'survivor_full_loadout',
        category: 'survivor',
    },
    DBD_SlasherFullLoadout: {
        name: 'Trials with full loadout',
        key: 'killer_full_loadout',
        category: 'killer',
    },
    DBD_BloodwebMaxLevel: {
        name: 'Bloodweb Max Level',
        key: 'bloodweb_max_level',
        category: 'userinfo',
    },
    DBD_BloodwebPoints: {
        name: 'Total Bloodweb Points',
        key: 'bloodweb_total_points_spended',
        category: 'userinfo',
    },
    DBD_MaxBloodwebPointsOneCategory: {
        name: 'Max points spended in one category',
        key: 'bloodweb_max_points_in_one_category',
        category: 'userinfo',
    },
    DBD_UnlockRanking: {
        name: 'Peps Unlocked',
        key: 'peps_unlocked',
        category: 'userinfo',
    },
    /* here we go weird names */
    DBD_DLC6_Slasher_Stat2: {
        name: 'Hooked survivors in the basement',
        key: 'hooks_in_the_basement',
        category: 'killer',
    },
    DBD_Chapter18_Slasher_Stat2: {
        name: 'Hooked survivors during endgame collapse',
        key: 'hooks_during_endgame',
        category: 'killer',
    },
    DBD_Chapter20_Slasher_Stat2: {
        name: 'Hooked survivors before a single generator is repaired',
        key: 'hooks_before_gens',
        category: 'killer',
    },
    DBD_Chapter21_Slasher_Stat2: {
        name: 'Hooked +3 survivors in the basement',
        key: 'hooks_plus3_survivors_in_the_basement',
        category: 'killer',
    },
    DBD_Chapter14_Slasher_Stat1: {
        name: 'Hooks while all the other survivors are injured',
        key: 'hooks_while_all_injured',
        category: 'killer',
    },
    DBD_Chapter13_Slasher_Stat1: {
        name: 'Hatches closed',
        key: 'hatches_closed',
        category: 'killer',
    },
    DBD_Chapter16_Camper_Stat1_float: {
        name: 'Healing being the obsession',
        key: 'healing_being_obsession',
        category: 'survivor',
    },
    DBD_Chapter17_Camper_Stat2_float: {
        name: 'Healing while the rest is injured',
        key: 'healing_while_rest_is_injured',
        category: 'survivor',
    },
    DBD_Chapter11_Camper_Stat1_float: {
        name: 'Healed allies when injured',
        key: 'healing_being_injured',
        category: 'survivor',
    },
    DBD_DLC7_Camper_Stat2: {
        name: 'Exit gates opened',
        key: 'gates_opened',
        category: 'survivor',
    },
    DBD_Camper8_Stat1: {
        name: 'Damage generators repaired',
        key: 'generators_broken_repaired',
        category: 'survivor',
    },
    DBD_Camper8_Stat2: {
        name: 'Vaults during chase',
        key: 'vaults_done',
        category: 'survivor',
    },
    DBD_DLC9_Camper_Stat1: {
        name: 'Attacks evaded by vaulting',
        key: 'vaults_attacks_evaded',
        category: 'survivor',
    },
    DBD_Chapter19_Camper_Stat1: {
        name: 'Escaped by stunning killer with pallet',
        key: 'chase_escape_by_pallet',
        category: 'survivor',
    },
    DBD_Chapter19_Camper_Stat2: {
        name: 'Basic attacks or projectiles dodged',
        key: 'attacks_dodged',
        category: 'survivor',
    },
    DBD_DLC7_Camper_Stat1: {
        name: 'Chests opened',
        key: 'chests_opened',
        category: 'survivor',
    },
    DBD_Event1_Stat2: {
        // naming makes no sense whatsoever
        name: 'Chests opened in the basement',
        key: 'chests_opened_in_basement',
        category: 'survivor',
    },
    DBD_DLC7_Slasher_Stat2: {
        name: 'Obsessions sacrificed',
        key: 'survivors_sacrificed_obsession',
        category: 'killer',
    },
    DBD_DLC8_Slasher_Stat2: {
        name: 'Survivors killed/sacrificed during endgame collapse',
        key: 'survivors_sacrificed_during_endgame',
        category: 'killer',
    },
    DBD_BloodwebMaxPrestigeLevel: {
        name: 'Max prestige level',
        key: 'max_prestige_level',
        category: 'userinfo',
    },
    DBD_Chapter17_Camper_Stat1: {
        name: 'Items Depleted',
        key: 'items_depleted',
        category: 'userinfo',
    },
    DBD_Chapter13_Slasher_Stat2: {
        name: 'Survivors downed next to a pallet',
        key: 'downs_next_to_pallet',
        category: 'killer',
    },
    DBD_Chapter19_Slasher_Stat2: {
        name: 'Survivors downed while carrying another',
        key: 'downs_while_carrying_a_survivor',
        category: 'killer',
    },
    DBD_Chapter17_Slasher_Stat2: {
        name: 'Survivors downed with a exposed effect',
        key: 'downs_exposed_survivors',
        category: 'killer',
    },
    DBD_DLC3_Camper_Stat1: {
        name: 'Hex totems cleansed',
        key: 'hex_totems_cleansed',
        category: 'survivor',
    },
    DBD_HitNearHook: {
        name: 'Protection hits taken',
        key: 'protection_hits',
        category: 'survivor',
    },
    DBD_Chapter14_Camper_Stat1: {
        name: 'Protection hits taken while another survivor is being carried',
        key: 'protection_hits_while_friend_in_killer',
        category: 'survivor',
    },
    DBD_Chapter12_Camper_Stat1: {
        name: "Escaped from killer's grasp",
        key: 'escaped_from_killer_hands',
        category: 'survivor',
    },
    DBD_Chapter22_Camper_Stat1: {
        name: 'Chases won after getting hit',
        key: 'chases_won_after_hit',
        category: 'survivor',
    },
    DBD_Chapter24_Camper_Stat1: {
        name: 'Chases won by hiding in a locker',
        key: 'chases_won_hiding_in_locker',
        category: 'survivor',
    },
    DBD_Chapter15_Camper_Stat1: {
        name: 'Survivors healed that were dying',
        key: 'heals_downed_friend',
        category: 'survivor',
    },
    DBD_Chapter12_Camper_Stat2: {
        name: 'Escapes through hatch while crawling',
        key: 'escapes_hatch_crawling',
        category: 'survivor',
    },
    DBD_LastSurvivorGeneratorEscape: {
        name: 'Escapes after completing the last generator as the last survivor',
        key: 'escapes_after_generator_as_last',
        category: 'survivor',
    },
    DBD_Camper9_Stat2: {
        name: 'Escapes while injured for over 50% of trial',
        key: 'escapes_while_injured_half_trial',
        category: 'survivor',
    },
    DBD_DLC8_Camper_Stat1: {
        name: 'Escapes after being downed only once',
        key: 'escapes_with_only_one_down',
        category: 'survivor',
    },
    DBD_Chapter23_Camper_Stat1: {
        name: 'Survivors affected with speed increase',
        key: 'survivors_boost_speed',
        category: 'survivor',
    },
    DBD_Chapter23_Camper_Stat2: {
        name: 'Injured survivors that found you',
        key: 'survivors_injured_found_you',
        category: 'survivor',
    },
};