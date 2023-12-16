import type { FC } from 'react';

export const Component: FC = () => {
	return (
		<div>
			<h2 className="text-center font-mono text-z5 font-w5">404 | not found</h2>
		</div>
	);
};

if (import.meta.env.DEV) Component.displayName = 'routes/404.page';
