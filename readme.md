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
| Methods | Description |
| - | - |
| info | userinfo |
| stats | lifeline baseline stats |
| killer | killer stats |
| survivor | survivor stats |
| raw | returns compiled data |

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
		killer_rank: 0,
		survivor_rank: 7,
		bloodweb_max_level: 50,
		bloodweb_total_points_spended: 10099098,
		bloodweb_max_points_in_one_category: 890000,
		peps_unlocked: 130
	}
	*/
	console.log('Killer:', user.killer())
	/*
	Killer: { survivors_killed: 6, survivors_sacrificed: 203 }
	*/
	console.log('Survivor:', user.survivor())
	/*
	Survivor: {
		generators_done: 454.77099609375,
		healing_done: 137.81561279296875,
		escapes_in_dying_state: 10,
		escapes: 84,
		skill_checks: 2474,
		unhooks: 235,
		unhooks_post_exit: 20,
		escapes_through_hatch: 18
	}
	*/
	
} catch (e) {
	console.log(e)
	/* Error: We could not find the player [player]. */
}
```

## Disclaimer
This project is fully for educational purposes.