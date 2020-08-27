import { rest} from 'msw';

export const handlers = [
    // Handles GET <hash>.server.net/resource
    rest.get('http://*.server.net/resource', (req, res, ctx) => {
        return res(ctx.text('Hello world'));
    }),

    // This works for browser
    //rest.get('*.server.net/resource', (req, res, ctx) => {
    //    return res(ctx.text('Hello world'));
    //}),
];