[MSW](https://github.com/mswjs/msw)

[Path matching with wildcards](https://mswjs.io/docs/basics/path-matching#path-with-wildcard) has inconsistent functionality between browser and nodejs runtime.

```js
// mocks/handlers.js

import { rest} from 'msw';

export const handlers = [
    // This works for nodejs. It doesn't work for browser
    // Handles GET <hash>.server.net/resource
    rest.get('http://*.server.net/resource', (req, res, ctx) => {
        return res(ctx.text('Hello world'));
    }),

    // This works for browser
    //rest.get('*.server.net/resource', (req, res, ctx) => {
    //    return res(ctx.text('Hello world'));
    //}),
];
```


Reproduce issue:
```sh
yarn install

# Run tests to validate handler works on nodejs
yarn test

# Start development mode to validate browser doesnt work
yarn start
# Open http://localhost:1234/index.html

# Modify handlers.js and re-check browser
```