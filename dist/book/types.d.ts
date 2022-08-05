export declare type BookModel = {
    _id: string;
    name: string;
};
export declare type BookResponse = {
    docs: BookModel[];
    total: number;
    limit: number;
    offset: number;
    page: number;
    pages: number;
};
export declare type ChapterModel = {
    _id: string;
    chapterName: string;
};
export declare type ChapterResponse = {
    docs: ChapterModel[];
    total: number;
    limit: number;
    offset: number;
    page: number;
    pages: number;
};
