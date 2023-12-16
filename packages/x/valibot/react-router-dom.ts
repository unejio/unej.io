import { parse } from 'valibot';
import type { BaseSchema } from 'valibot';

export const parseRequestFormData = async <TSchema extends BaseSchema>(schema: TSchema, request: Request) =>
	parse(schema, Object.fromEntries(await request.formData()));
