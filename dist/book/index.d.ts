import { Base } from 'src/base';
import { BookResponse, ChapterResponse } from './types';
export declare class Book extends Base {
    getBooks(options?: any): Promise<BookResponse>;
    getBookById(id: string, options?: any): Promise<BookResponse>;
    getBookChapters(id: string, options?: any): Promise<ChapterResponse>;
}
