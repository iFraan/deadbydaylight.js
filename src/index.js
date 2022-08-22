const axios = require('axios');
const constants = {
    API_KEY: ''
};
const VanityURL = `http://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/?key={TOKEN_STEAM}&vanityurl={VanityID}`;
const PlayerStatsURL = `http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/?appid=381210&key={TOKEN_STEAM}&steamid={SteamID}`;
const STATS = require('./dictionary');


const fetch = (url) => new Promise((resolve, reject) => {

    axios.get(url.replace('{TOKEN_STEAM}', constants.API_KEY)).then(res => {
        resolve(res.data)
    })
    .catch(err => {
        reject(err.response)
    })

})

const checkIfVanity = async (user) => {
    const { response } = await fetch(VanityURL.replace('{VanityID}', user));
    return [response.success == 1, response.steamid]
};

const transformResponse = (response) => {
    const result = []
    const keys = (response)
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const stat = STATS[key.name];
        result.push({
            key: stat?.key || key.name,
            name: stat?.name || '',
            category: stat?.category || '',
            value: stat?.transform(key.value) || key.value,
        })
    }
    return result;
}


class API {

    /**
     * Use API.fetchUser instead.
     * @param {string} username 
     * @param {string} apiKey 
     * @private // idk if it does something outside of typescript, but there it is
     */
    constructor (username, apiKey){
        this.username = username;
        constants.API_KEY = apiKey;
        this._raw = {
            response: {}
        }
    }

    /**
     * Initialize the wrapper
     * @param {string} apiKey 
     * @param {string} username SteamID64, Steam VainityURL
     * @returns API instance
     */
    static async fetchUser(username, apiKey){
        const INSTANCE = new API(username, apiKey);
        if (typeof username == 'undefined') throw new Error('You gotta provide an username.');
        if (typeof apiKey == 'undefined') throw new Error('You gotta provide an Steam API key.');
        try {
            const [isVanity, SteamID] = await checkIfVanity(username);
            INSTANCE._raw.isVanity = isVanity;
            INSTANCE._raw.response = await fetch(PlayerStatsURL.replace('{SteamID}', isVanity ? SteamID : username))
            INSTANCE._raw.data = transformResponse(INSTANCE._raw.response.playerstats.stats)
        } catch (e) {
            if (e?.status == 403) throw new Error('Invalid API Key provided. Please go to https://steamcommunity.com/dev and request one.');
            if (e?.status == 500) throw new Error('Internal Server Error. Probably the SteamID requested doesn\'t exists.');
            /* if other */
            throw new Error(`${e.status} ${e.statusText} | ${e.data} | ${e.message}`);
        }
        return INSTANCE;
    }

    /**
     * Lifetime Stats
     * @returns Lifetime stats of the player
     */
    stats(){
        const result = {}
        const data  = this._raw.data.filter(x => x.category === 'userinfo');
        for (let i = 0; i < data.length; i++) {
            const item = data[i];
            result[item.key] = item.value;
        }
        return result;
    }
    /**
     * Killer Stats
     * @returns Lifetime stats of the player
     */
     killer(){
        const result = {}
        const data  = this._raw.data.filter(x => x.category === 'killer');
        for (let i = 0; i < data.length; i++) {
            const item = data[i];
            result[item.key] = item.value;
        }
        return result;
    }
    /**
     * Survivor Stats
     * @returns Lifetime stats of the player
     */
     survivor(){
        const result = {}
        const data  = this._raw.data.filter(x => x.category === 'survivor');
        for (let i = 0; i < data.length; i++) {
            const item = data[i];
            result[item.key] = item.value;
        }
        return result;
    }


    /**
     * Get userinfo from the platform
     * @returns userinfo
     */
    info() { 
        const result = {};
        const { steamID } = this._raw.response.playerstats;

        result[ 'platform' ] = 'Steam';
        result[ 'id' ]  = steamID;

        return result;
    }

    get raw() { return this._raw; }
}

module.exports = {
    API,
}