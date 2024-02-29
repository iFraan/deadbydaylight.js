import { ranks } from '../constants';

const getRankName = (rank?: number) => {
    if (!rank) return 'Ash IV';
    for (const key in ranks) {
        const peps = Number(key);
        if (peps > rank) {
            return ranks[peps];
        }
    }
    return 'Unranked';
}

const getRank = (rank) => {
    const name = getRankName(rank);
    const pepIndex = Object.values(ranks).findIndex(x => x === name);
    const keys = Object.keys(ranks);

    return {
        rank_name: name,
        rank_peps: (rank - keys[pepIndex - 1]) || 0,
        rank_max_peps: (keys[pepIndex] - (keys[pepIndex - 1] || 0)) || 0,
    };
}


module.exports = {
    getRankName,
    getRank
}