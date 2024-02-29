export type DictionaryStats = {
    [key: string]: {
        name: string,
        key: string | null,
        category: string | null,
        transform?: (value: number) => unknown
    };
}

export type GenericStat = {
    key: string,
    name: string,
    category: string,
    value: number | string | any,
}