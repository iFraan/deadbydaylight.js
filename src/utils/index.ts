import { ranks } from '../constants';

export const getRankName = (rank?: number): string => {
    if (!rank) return 'Ash IV';
    for (const key in ranks) {
        const peps = Number(key);
        if (peps > rank) {
            return ranks[peps];
        }
    }
    return 'Unranked';
}

export const getRank = (rank: number) => {
    const name = getRankName(rank);

    const rankIndex = Object.values(ranks).findIndex(x => x === name);
    const rankKeys = Object.keys(ranks).map(Number);

    const currentRank = rankKeys[rankIndex];
    const previousRank = rankIndex > 0 ? rankKeys[rankIndex - 1] : 0;

    return {
        rank_name: name,
        rank_peps: rank - previousRank,
        rank_max_peps: currentRank - previousRank
    }
}
