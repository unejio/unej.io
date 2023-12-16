const create =
	(value: string) =>
	(...paths: string[]) =>
		paths.length ? [value, ...paths].join('/') : value;

export const site = create(process.env.PUBLIC_HOST_SITE);
export const bio = create(process.env.PUBLIC_HOST_BIO);
export const web = create(process.env.PUBLIC_HOST_WEB);
export const admin = create(process.env.PUBLIC_HOST_ADMIN);
export const api = create(process.env.PUBLIC_HOST_API);
export const s = create(process.env.PUBLIC_HOST_S);
export const img = create(process.env.PUBLIC_HOST_IMG);
