<div align="center">
    <h1>🎮 deadbydaylight.js</h1>
    
    <p>
        <a href="https://www.codefactor.io/repository/github/ifraan/deadbydaylight.js"><img src="https://www.codefactor.io/repository/github/ifraan/deadbydaylight.js/badge" alt="CodeFactor" /></a>
        <a href="https://www.npmjs.com/package/deadbydaylight.js"><img src="https://badgen.net/npm/v/deadbydaylight.js?color=blue" alt="NPM-Version"/></a>
        <a href="https://www.npmjs.com/package/deadbydaylight.js"><img src="https://badgen.net/npm/dt/deadbydaylight.js?color=blue" alt="NPM-Downloads"/></a>
        <a href="https://github.com/iFraan/deadbydaylight.js"><img src="https://badgen.net/github/stars/iFraan/deadbydaylight.js?color=yellow" alt="Github Stars"/></a>
        <a href="https://github.com/iFraan/deadbydaylight.js/issues"><img src="https://badgen.net/github/issues/iFraan/deadbydaylight.js?color=green" alt="Issues"/></a>
    </p>
    
    <h3>📊 A public wrapper for <strong>Dead by Daylight</strong> stats</h3>
    <p><em>Powered by the official Steam API</em></p>
</div>

---

## 🚀 Installation

> **Note:** You'll need a free API key from [Steam Developers](https://steamcommunity.com/dev) to get started.

### 📦 Dependencies

```
axios
```

### 💻 Install the package

```bash
npm install deadbydaylight.js
```

---

## 📖 Usage

> **Important:** You must call `API.fetchUser` before using any other method.

### 🔧 Available Methods

| Method     | Description                                         |
|------------|-----------------------------------------------------|
| `info()`     | Returns user information                            |
| `stats()`    | Returns lifeline baseline stats                     |
| `killer()`   | Returns killer-specific stats                       |
| `survivor()` | Returns survivor-specific stats                     |
| `data()`     | Returns compiled data as an array with categories   |

### 🆔 Supported ID Types

This module supports both:
- **SteamID** (e.g., `76561198137433783`)
- **Vanity URL** (e.g., `iFraan_`)

> 💡 **Tip:** You can see the difference between them on [this page](https://steamid.pro/steam-id-lookup).

### ⚠️ Limitations

- **Steam players only** - Since there's no official Dead by Daylight API, this wrapper depends on Steam's achievement storage for stats.

---

## 💡 Example Usage

> Feel free to use my SteamID for testing: `iFraan_`
```javascript
const { API } = require('deadbydaylight.js');

async function getPlayerStats() {
    try {
        // Fetch user data
        const user = await API.fetchUser('iFraan_', 'YourApiKey');
        
        // Get basic user info
        console.log('👤 User Info:', user.info());
        /*
        Output: { platform: 'Steam', id: '76561198137433783' }
        */
        
        // Get general stats
        console.log('📊 General Stats:', user.stats());
        /*
        Output: {
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
        
        // Get killer stats
        console.log('🔪 Killer Stats:', user.killer());
        /*
        Output: {
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
        
        // Get survivor stats
        console.log('🏃 Survivor Stats:', user.survivor());
        /*
        Output: {
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
        
        // Get compiled data array
        console.log('📋 Compiled Data:', user.data());
        /*
        Output: [
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
            // ... more data entries
        ]
        */
        
    } catch (error) {
        console.error('❌ Error:', error.message);
        // Example: "We could not find the player [player]."
    }
}

// Run the example
getPlayerStats();
```

---

## 📄 License & Disclaimer

This project is created for **educational purposes only** and is not affiliated with Behaviour Interactive or Dead by Daylight.

---

<div align="center">
    <p>Made with ❤️ by <a href="https://github.com/iFraan">iFraan</a></p>
    <p><em>Happy hunting! 🔥</em></p>
</div>