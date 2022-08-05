import { Base } from 'src/base';
import { createQuery } from 'src/utils';
import { MovieResponse, MovieQuoteResponse } from './types';

const resource = 'movie';

export class Movie extends Base {
  getMovies(options?: any): Promise<MovieResponse> {
    const query = createQuery(options);
    return this.invoke(`/${resource}${query}`);
  }
  getMovieById(id: string, options?: any): Promise<MovieResponse> {
    const query = createQuery(options);
    return this.invoke(`/${resource}/${id}${query}`);
  }
  getMovieQuote(id: string, options?: any): Promise<MovieQuoteResponse> {
    const query = createQuery(options);
    return this.invoke(`/${resource}/${id}/quote${query}`);
  }
}
