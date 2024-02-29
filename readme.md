<div align="center">
    <h1>deadbydaylight.js</h1>
    <a href="https://www.codefactor.io/repository/github/ifraan/deadbydaylight.js"><img src="https://www.codefactor.io/repository/github/ifraan/deadbydaylight.js/badge" alt="CodeFactor" /></a>
    <a href="https://www.npmjs.com/package/deadbydaylight.js"><img src="https://badgen.net/npm/v/deadbydaylight.js?color=blue" alt="NPM-Version"/></a>
    <a href="https://www.npmjs.com/package/deadbydaylight.js"><img src="https://badgen.net/npm/dt/deadbydaylight.js?color=blue" alt="NPM-Downloads"/></a>
    <a href="https://github.com/iFraan/deadbydaylight.js"><img src="https://badgen.net/github/stars/iFraan/deadbydaylight.js?color=yellow" alt="Github Stars"/></a>
    <a href="https://github.com/iFraan/deadbydaylight.js/issues"><img src="https://badgen.net/github/issues/iFraan/deadbydaylight.js?color=green" alt="Issues"/></a>
    <h2>This is a public wrapper for <b>Dead by Daylight</b> stats.</h2>
    <h3>And its uses the official SteamAPI</h3>
</div>

## Instalattion
You gotta request a Free API key on [Steam Developers](https://steamcommunity.com/dev)
### Dependencies
``
axios
``

To install use:
```shell
npm i deadbydaylight.js
```

You must call **API.fetchUser** before using any other method.
| Methods  | Description                                       |
| -------- | ------------------------------------------------- |
| info     | userinfo                                          |
| stats    | lifeline baseline stats                           |
| killer   | killer stats                                      |
| survivor | survivor stats                                    |
| data     | returns compiled data as an array with categories |

This module supports either
* SteamID
* Vanity URL

You can see the diference between them in [this](https://steamid.pro/steam-id-lookup) page

Limitations: 
* Only works for Steam players
    * As it doesn't exist an official API for Dead by Daylight, it depends on steam storage for stats


Example code: _(Feel free to use my steamid for testing)_
```js
const { API } = require('deadbydaylight.js')

try {

    const user = await API.fetchUser('iFraan_', 'YourApiKey')
    console.log('User:', user.info())
    /*
    User: { platform: 'Steam', id: '76561198137433783' }
    */
    console.log('Stats:', user.stats())
    /*
    Stats: {
        killer_rank: { rank_name: 'Ash IV', rank_peps: 0, rank_max_peps: 3 },
        survivor_rank: { rank_name: 'Ash II', rank_peps: 3, rank_max_peps: 4 },
        bloodweb_max_level: 50,
        bloodweb_total_points_spended: 10201385,
        bloodweb_max_points_in_one_category: 890000,
        max_prestige_level: 4,
        peps_unlocked: 132,
        items_depleted: 33
    }
    */
    console.log('Killer:', user.killer())
    /*
    Killer: {
        survivors_killed: 6,
        survivors_sacrificed: 203,
        survivors_sacrificed_obsession: 51,
        survivors_sacrificed_during_endgame: 51,
        hatches_closed: 20,
        downs_next_to_pallet: 122,
        downs_exposed_survivors: 53,
        downs_while_carrying_a_survivor: 2,
        hooks_while_all_injured: 3,
        hooks_before_gens: 62,
        hooks_during_endgame: 37,
        hooks_in_the_basement: 61,
        hooks_plus3_survivors_in_the_basement: 5
    }
    */
    console.log('Survivor:', user.survivor())
    /*
    Survivor: {
        generators_done: 460.8564758300781,
        generators_broken_repaired: 84,
        escapes: 84,
        escapes_in_dying_state: 10,
        escapes_through_hatch: 18,
        skill_checks: 2685,
        unhooks: 242,
        unhooks_post_exit: 20,
        vaults_done: 201,
        chests_opened: 63,
        chests_opened_in_basement: 10,
        gates_opened: 56,
        vaults_attacks_evaded: 19,
        healing_done: 147.92123413085938,
        healing_being_injured: 3.393465042114258,
        healing_being_obsession: 18.265979766845703,
        healing_while_rest_is_injured: 19.342018127441406,
        chase_escape_by_pallet: 2
    }
    */
    console.log('Data: ', user.data())    
    /*
    Data: [
    {
        key: 'killer_rank',
        name: 'Killer Rank',
        category: 'userinfo',
        value: 0
    },
    {
        key: 'survivor_rank',
        name: 'Survivor Rank',
        category: 'userinfo',
        value: 7
    },
    {
        key: 'survivors_killed',
        name: 'Survivors Killed (mori)',
        category: 'killer',
        value: 6
    },
    ...
    */
    
} catch (e) {
    console.log(e)
    /* Error: We could not find the player [player]. */
}
```

## Disclaimer
This project is fully for educational purposes.