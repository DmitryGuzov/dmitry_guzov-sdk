export declare type MovieModel = {
    _id: string;
    name: string;
};
export declare type MovieResponse = {
    docs: MovieModel[];
    total: number;
    limit: number;
    offset: number;
    page: number;
    pages: number;
};
export declare type MovieQuoteModel = {
    _id: string;
    quoteName: string;
};
export declare type MovieQuoteResponse = {
    docs: MovieQuoteModel[];
    total: number;
    limit: number;
    offset: number;
    page: number;
    pages: number;
};
