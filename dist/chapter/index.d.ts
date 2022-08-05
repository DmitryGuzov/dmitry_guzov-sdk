import { Base } from 'src/base';
import { ChapterResponse } from './types';
export declare class Chapter extends Base {
    getChapters(options?: any): Promise<ChapterResponse>;
    getChapterById(id: string, options?: any): Promise<ChapterResponse>;
}
