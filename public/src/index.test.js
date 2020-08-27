import 'whatwg-fetch';

import { server } from './mocks/server';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Testing', () => {
    test('pattern match should match', async () => {
        require('./index.js');

        await new Promise(r => setTimeout(r, 500));
        expect(document.body.innerText).toBe('Hello world');
    });
});
