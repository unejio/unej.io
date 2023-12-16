import type { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { delay } from '@unej.io/util/promise/timeout.ts';

export const loader = async () => {
	await delay();
	return null;
};

export const Component: FC = () => {
	return (
		<>
			<Outlet />
		</>
	);
};

if (import.meta.env.DEV) Component.displayName = 'routes/root.element';
