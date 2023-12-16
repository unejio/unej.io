import { Hono } from 'hono';
import { HTTPException } from 'hono/http-exception';

import { site } from '@unej.io/env/process/host.ts';

import { BadRequest, toInvariant } from '@unej.io/x-hono/http-exception.ts';

const app = new Hono();

app
	.get('/:username', (ctx) => {
		const username = ctx.req.param('username');
		toInvariant(username === 'unej.io', BadRequest, 'Wrong username');
		return ctx.redirect(site());
	})
	.get('/', (ctx) => ctx.json({ app: 's' }))
	.notFound((ctx) => ctx.json({ message: 'Not found' }, 404))
	.onError((err, ctx) => {
		if (err instanceof HTTPException) return err.getResponse();
		let message = 'Internal server error';
		if (err instanceof Error) message = err.message;
		return ctx.json({ message }, 500);
	});

export default app;
