import { Hono } from 'hono';
import { HTTPException } from 'hono/http-exception';

const app = new Hono();

app
	.get('/', (ctx) => ctx.json({ app: 'api' }))
	.notFound((ctx) => ctx.json({ message: 'Not found' }, 404))
	.onError((err, ctx) => {
		if (err instanceof HTTPException) return err.getResponse();
		let message = 'Internal server error';
		if (err instanceof Error) message = err.message;
		return ctx.json({ message }, 500);
	});

export default app;
