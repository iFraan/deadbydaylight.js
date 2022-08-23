const { ranks } = require('../constants');


const getRankName = (rank) => {
    if (!rank) return 'Ash IV';
    const peps = Object.keys(ranks);
    for (const p of peps) {
        if (p >= rank) return ranks[p];
    }
    return 'Unranked';
}

const getRank = (rank) => {
    const name = getRankName(rank);
    const pepIndex = Object.values(ranks).findIndex(x => x === name);
    const pepValue = Object.keys(ranks)[pepIndex-1];

    return {
        rank_name: name,
        rank_peps: (rank-pepValue) || 0,
    };
}


module.exports = {
    getRankName,
    getRank
}