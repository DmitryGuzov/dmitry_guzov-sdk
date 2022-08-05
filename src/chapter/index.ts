import { Base } from 'src/base';
import { createQuery } from 'src/utils';
import { ChapterResponse } from './types';

const resource = 'chapter';

export class Chapter extends Base {
  getChapters(options?: any): Promise<ChapterResponse> {
    const query = createQuery(options);
    return this.invoke(`/${resource}${query}`);
  }
  getChapterById(id: string, options?: any): Promise<ChapterResponse> {
    const query = createQuery(options);
    return this.invoke(`/${resource}/${id}${query}`);
  }
}
