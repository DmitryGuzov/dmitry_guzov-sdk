# The Lord Of The Rings SDK

SDK has 5 models API:

- Book
- Chapter
- Character
- Movie
- Qoute

Each model has 2 files: main file for requests, and types file for typezation

Book:

- getBooks: List of all "The Lord of the Rings" books - not use apiKey. endpoint = '/book';
- getBookById: Request one specific book - not use apiKey. endpoint = '/book/{id}';
- getBookChapters: "Request all chapters of one specific book" - not use apiKey. endpoint = '/book/{id}/chapter';

Movie:

- getMovies: 'List of all movies, including the "The Lord of the Rings" and the "The Hobbit" trilogies' - use apiKey. endpoint = '/movie';
- getMovieById: 'Request one specific movie' - use apiKey. endpoint = '/movie/{id}';
- getMovieQuote: 'Request all movie quotes for one specific movie (only working for the LotR trilogy)' - use apiKey. endpoint = '/movie/{id}/quote';

Chapter:

- getChapters: 'List of all book chapters' - use apiKey. endpoint = '/chapter';
- getChapterById: 'Request one specific book chapter' - use apiKey. endpoint = '/chapter/{id}';

Character:

- getCharacters: 'List of characters including metadata like name, gender, realm, race and more' - use apiKey. endpoint = '/character';
- getCharacterById: 'Request one specific character' - use apiKey. endpoint = '/character/{id}';
- getCharacterQuote: 'Request all movie quotes of one specific character' - use apiKey. endpoint = '/character/{id}/chapter';

Quote:

- getQuotes: 'List of all movie quotes' - use apiKey. endpoint = '/quote';
- getQuoteById: 'Request one specific movie quote' - use apiKey. endpoint = '/quote/{id}';

## How to use sdk

1. Install sdk
   `npm install "folder-path"`
   or
   `npm install "sdk-name"`
2. Import sdk

```
import TheLordOfRings from 'dmitry_guzov-sdk';
```

3. import sdk in your code.

```
const client = new TheLordOfRings({ apiKey: 'your-api-key', base?: 'newBaseUrl' });
```

You need to set apiKey for make API requests. Only book model don't need the apiKey. Other models apiKey required. Also you can change baseUrl if they will do some changes in url.

4. use your client for get access to API.

```
    const movies = await client.getBooks();
```

You can pass pagination, sorting and filtering params to methods. Example:

```
    const movies = await client.getBooks({page: 1, limit: 10, name: {
        eq: 'Book name'
    }});
```

Access for authenticated users to all endpoints is limited to 100 requests every 10 minutes. Be fair!

For update sdk you need: 

Run `npm install` for install packages

Update the code. 

Run `npm run build` for build project.