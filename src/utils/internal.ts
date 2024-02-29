import { dictionary } from "../dictionary";
import { GenericStat } from "../types/internal";
import { SteamStat } from "../types/steam";

export const parseResponse = (items: SteamStat[]) => {
    const data: GenericStat[] = [];
    for (const item of items) {
        const stat = dictionary[item.name];
        data.push({
            key: stat?.key ?? item.name,
            category: stat?.category ?? '',
            name: stat?.name ?? '',
            value: stat?.transform?.(item.value) ?? item.value,
        })
    }
    return data;
}