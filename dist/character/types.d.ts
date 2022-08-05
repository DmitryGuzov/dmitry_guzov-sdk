export declare type CharacterModel = {
    _id: string;
    name: string;
};
export declare type CharacterResponse = {
    docs: CharacterModel[];
    total: number;
    limit: number;
    offset: number;
    page: number;
    pages: number;
};
export declare type CharacterQuoteModel = {
    _id: string;
    quoteName: string;
};
export declare type CharacterQuoteResponse = {
    docs: CharacterQuoteModel[];
    total: number;
    limit: number;
    offset: number;
    page: number;
    pages: number;
};
