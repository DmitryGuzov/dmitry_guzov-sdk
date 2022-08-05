import { Base } from 'src/base';
import { createQuery } from 'src/utils';
import { QuoteResponse } from './types';

const resource = 'quote';

export class Quote extends Base {
  getQuotes(options?: any): Promise<QuoteResponse> {
    const query = createQuery(options);
    return this.invoke(`/${resource}${query}`);
  }
  getQuoteById(id: string, options?: any): Promise<QuoteResponse> {
    const query = createQuery(options);
    return this.invoke(`/${resource}/${id}${query}`);
  }
}
