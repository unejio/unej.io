import app from './app.js';

Deno.serve(
	{
		port: 8100,
		hostname: '0.0.0.0',
		onListen: ({ hostname, port }) => {
			console.log(`[@unej.io/~s]: ${hostname}:${port}`);
		},
	},
	app.fetch
);
