import { Base } from './base';
import { applyMixins } from './utils';
import { Book } from './book';
import { Movie } from './movie';
import { Character } from './character';
import { Quote } from './quote';
import { Chapter } from './chapter';

class TheLordOfRings extends Base {}

interface TheLordOfRings extends Book, Movie, Character, Quote, Chapter {}

applyMixins(TheLordOfRings, [Book, Movie, Character, Quote, Chapter]);

export default TheLordOfRings;
