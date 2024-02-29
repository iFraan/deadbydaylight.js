import axios from 'axios';
import { GenericStat, UserStats } from './types/internal';
import { PlayerStatsResponse, VanityResponse } from './types/steam';
import { parseResponse } from './utils/internal';

const URLS = {
    Vanity: `http://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/?key={TOKEN_STEAM}&vanityurl={VanityID}`,
    PlayerStats: `http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/?appid=381210&key={TOKEN_STEAM}&steamid={SteamID}`,
} as const;

const fetchData = (url: string) => new Promise((resolve, reject) => {
    axios.get(url).then(res => {
        resolve(res.data)
    }).catch(err => {
        reject(err.response)
    })

})

const checkIfVanity = async (user: string, key: string) => {
    const { response } = (await fetchData(URLS.Vanity.replace('{VanityID}', user).replace('{TOKEN_STEAM}', key))) as VanityResponse;
    return {
        isVanity: response.success == 1,
        SteamID: response.steamid
    }
};

class API {

    username: string;
    apiKey: string;
    _raw: {
        response?: PlayerStatsResponse,
        isVanity?: boolean,
        data?: GenericStat[]
    };

    constructor(username: string, apiKey: string) {
        this.username = username;
        this.apiKey = apiKey;
        this._raw = {}
    }

    static async fetchUser(username: string, apiKey: string) {
        if (typeof username == 'undefined') throw new Error('You gotta provide an username.');
        if (typeof apiKey == 'undefined') throw new Error('You gotta provide an Steam API key.');
        const INSTANCE = new API(username, apiKey);
        try {
            const { isVanity, SteamID } = await checkIfVanity(username, apiKey);
            INSTANCE._raw.isVanity = isVanity;
            INSTANCE._raw.response = (await fetchData(URLS.PlayerStats.replace('{SteamID}', isVanity ? SteamID : username).replace('{TOKEN_STEAM}', apiKey))) as PlayerStatsResponse;
            INSTANCE._raw.data = parseResponse(INSTANCE._raw.response.playerstats.stats);
        } catch (e) {
            if (e?.status == 403) throw new Error('Invalid API Key provided. Please go to https://steamcommunity.com/dev and request one.');
            if (e?.status == 500) throw new Error('Internal Server Error. Probably the SteamID requested doesn\'t exists.');
            throw new Error(e)
        }
        return INSTANCE;
    }

    stats() {
        const result = {} as UserStats;
        const data = this._raw.data.filter(x => x.category === 'userinfo');
        for (const item of data) {
            result[item.key] = item.value;
        }
        return result;
    }
    /**
     * Killer Stats
     * @returns Lifetime stats of the player
     */
    killer() {
        const result = {}
        const data = this._raw.data.filter(x => x.category === 'killer');
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
    survivor() {
        const result = {}
        const data = this._raw.data.filter(x => x.category === 'survivor');
        for (let i = 0; i < data.length; i++) {
            const item = data[i];
            result[item.key] = item.value;
        }
        return result;
    }

    /**
     * Compiled data
     * @returns compiled data
     */
    data() {
        return this._raw.data;
    }




    /**
     * Get userinfo from the platform
     * @returns userinfo
     */
    info() {
        const result = {};
        const { steamID } = this._raw.response.playerstats;

        result['platform'] = 'Steam';
        result['id'] = steamID;

        return result;
    }

    get raw() { return this._raw; }
}

module.exports = {
    API,
}