import { Base } from 'src/base';
import { CharacterResponse, CharacterQuoteResponse } from './types';
export declare class Character extends Base {
    getCharacters(options?: any): Promise<CharacterResponse>;
    getCharacterById(id: string, options?: any): Promise<CharacterResponse>;
    getCharacterQuote(id: string, options?: any): Promise<CharacterQuoteResponse>;
}
