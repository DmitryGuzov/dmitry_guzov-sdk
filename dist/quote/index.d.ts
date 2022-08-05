import { Base } from 'src/base';
import { QuoteResponse } from './types';
export declare class Quote extends Base {
    getQuotes(options?: any): Promise<QuoteResponse>;
    getQuoteById(id: string, options?: any): Promise<QuoteResponse>;
}
