const create =
	(value: string) =>
	(...paths: string[]) =>
		paths.length ? [value, ...paths].join('/') : value;

export const site = create(import.meta.env.PUBLIC_HOST_SITE);
export const bio = create(import.meta.env.PUBLIC_HOST_BIO);
export const web = create(import.meta.env.PUBLIC_HOST_WEB);
export const admin = create(import.meta.env.PUBLIC_HOST_ADMIN);
export const api = create(import.meta.env.PUBLIC_HOST_API);
export const s = create(import.meta.env.PUBLIC_HOST_S);
export const img = create(import.meta.env.PUBLIC_HOST_IMG);
