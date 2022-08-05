export declare type ChapterModel = {
    _id: string;
    name: string;
};
export declare type ChapterResponse = {
    docs: ChapterModel[];
    total: number;
    limit: number;
    offset: number;
    page: number;
    pages: number;
};
