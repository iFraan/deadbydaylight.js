export type DictionaryStats = {
    [key: string]: {
        name: string,
        key: string | null,
        category: string | null,
        transform?: (value: number) => unknown
    };
}