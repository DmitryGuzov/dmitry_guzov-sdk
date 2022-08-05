import { Base } from 'src/base';
import { createQuery } from 'src/utils';
import { CharacterResponse, CharacterQuoteResponse } from './types';

const resource = 'character';

export class Character extends Base {
  getCharacters(options?: any): Promise<CharacterResponse> {
    const query = createQuery(options);
    return this.invoke(`/${resource}${query}`);
  }
  getCharacterById(id: string, options?: any): Promise<CharacterResponse> {
    const query = createQuery(options);
    return this.invoke(`/${resource}/${id}${query}`);
  }
  getCharacterQuote(
    id: string,
    options?: any
  ): Promise<CharacterQuoteResponse> {
    const query = createQuery(options);
    return this.invoke(`/${resource}/${id}/quote${query}`);
  }
}
