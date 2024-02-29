export type VanityResponse = { response: { success: number, steamid?: string } };

export type PlayerStatsResponse = {
    playerstats: {
        steamID: string;
        gameName: string;
        stats: SteamStat[];
        achievements: SteamAchivement[];
    }
}

export type SteamStat = {
    name: string;
    value: number;
}

export type SteamAchivement = {
    name: string;
    value: number;
}