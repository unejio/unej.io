import type { IndexRouteObject, LazyRouteFunction, NonIndexRouteObject, RouteObject } from 'react-router-dom';

export const element = (lazy: LazyRouteFunction<NonIndexRouteObject>, children?: RouteObject[]) => ({ lazy, children }) as NonIndexRouteObject;

export const index = (lazy: LazyRouteFunction<IndexRouteObject>) => ({ index: true, lazy }) as IndexRouteObject;

export const path = (path: string, lazy: LazyRouteFunction<NonIndexRouteObject>, children?: RouteObject[]) =>
	({ path, lazy, children }) as NonIndexRouteObject;

export const splat = (lazy: LazyRouteFunction<NonIndexRouteObject>) => ({ path: '*', lazy }) as NonIndexRouteObject;
