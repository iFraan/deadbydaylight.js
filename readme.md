<div align="center">
	<h1>deadbydaylight.js</h1>
	<a href="https://www.codefactor.io/repository/github/ifraan/deadbydaylight.js"><img src="https://www.codefactor.io/repository/github/ifraan/deadbydaylight.js/badge" alt="CodeFactor" /></a>
	<a href="https://www.npmjs.com/package/deadbydaylight.js"><img src="https://badgen.net/npm/v/deadbydaylight.js?color=blue" alt="NPM-Version"/></a>
	<a href="https://www.npmjs.com/package/deadbydaylight.js"><img src="https://badgen.net/npm/dt/deadbydaylight.js?color=blue" alt="NPM-Downloads"/></a>
	<a href="https://github.com/iFraan/deadbydaylight.js"><img src="https://badgen.net/github/stars/iFraan/deadbydaylight.js?color=yellow" alt="Github Stars"/></a>
	<a href="https://github.com/iFraan/deadbydaylight.js/issues"><img src="https://badgen.net/github/issues/iFraan/deadbydaylight.js?color=green" alt="Issues"/></a>
	<h2>This is the first public wrapper for <b>Dead by Daylight</b> stats.</h2>
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
	
} catch (e) {
	console.log(e)
	/* Error: We could not find the player [player]. */
}
```

## Disclaimer
This project is fully for educational purposes.