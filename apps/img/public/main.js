import app from './app.js';

Deno.serve(
	{
		port: 8500,
		hostname: '0.0.0.0',
		onListen: ({ hostname, port }) => {
			console.log(`[@unej.io/~img]: ${hostname}:${port}`);
		},
	},
	app.fetch
);
