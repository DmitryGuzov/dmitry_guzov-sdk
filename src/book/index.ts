import { Base } from 'src/base';
import { createQuery } from 'src/utils';
import { BookResponse, ChapterResponse } from './types';

const resource = 'book';

export class Book extends Base {
  getBooks(options?: any): Promise<BookResponse> {
    const query = createQuery(options);
    return this.invoke(`/${resource}${query}`);
  }
  getBookById(id: string, options?: any): Promise<BookResponse> {
    const query = createQuery(options);
    return this.invoke(`/${resource}/${id}${query}`);
  }
  getBookChapters(id: string, options?: any): Promise<ChapterResponse> {
    const query = createQuery(options);
    return this.invoke(`/${resource}/${id}/chapter${query}`);
  }
}
