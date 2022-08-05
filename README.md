## Add published sdk to your project

`npm install "sdk-name"`

## Add this sdk to your project locally

`npm install "folder-path"`

## How to use sdk

1. Install sdk
2. Import sdk
3. import sdk in your code.

```
import TheLordOfRings from 'the-lord-of-the-rings-sdk';
```

4. create client in code.

```
const client = new TheLordOfRings({ apiKey: 'your-api-key' });
```

5. use your client for get access to API.

```
    const movies = await client.getBooks();
```

For update sdk you need: 

Run `npm install` for install packages

Update the code. 

Run `npm run build` for build project.
