import { Base } from './base';
import { Book } from './book';
import { Movie } from './movie';
import { Character } from './character';
import { Quote } from './quote';
import { Chapter } from './chapter';
declare class TheLordOfRings extends Base {
}
interface TheLordOfRings extends Book, Movie, Character, Quote, Chapter {
}
export default TheLordOfRings;
