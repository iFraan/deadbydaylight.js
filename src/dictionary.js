/* name the stats (ant work) */

module.exports = {
    DBD_KillerSkulls: {
        name: 'Killer Rank',
        key: 'killer_rank',
        category: 'userinfo',
        transform: (value) => value
    },
    DBD_CamperSkulls: {
        name: 'Survivor Rank',
        key: 'survivor_rank',
        category: 'userinfo',
        transform: (value) => value
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
    DBD_EscapeKO: {
        name: 'Escapes in dying state',
        key: 'escapes_in_dying_state',
        category: 'survivor',
        transform: (value) => value
    },
    DBD_Escape: {
        name: 'Escapes',
        key: 'escapes',
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
}