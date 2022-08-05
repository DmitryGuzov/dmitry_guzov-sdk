export declare type QuoteModel = {
  _id: string;
  name: string;
};

export declare type QuoteResponse = {
  docs: QuoteModel[];
  total: number;
  limit: number;
  offset: number;
  page: number;
  pages: number;
};
