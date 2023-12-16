import app from './app.js';

Deno.serve(
	{
		port: 8000,
		hostname: '0.0.0.0',
		onListen: ({ hostname, port }) => {
			console.log(`[@unej.io/~api]: ${hostname}:${port}`);
		},
	},
	app.fetch
);
