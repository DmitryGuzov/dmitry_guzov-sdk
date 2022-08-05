import { Base } from 'src/base';
import { MovieResponse, MovieQuoteResponse } from './types';
export declare class Movie extends Base {
    getMovies(options?: any): Promise<MovieResponse>;
    getMovieById(id: string, options?: any): Promise<MovieResponse>;
    getMovieQuote(id: string, options?: any): Promise<MovieQuoteResponse>;
}
