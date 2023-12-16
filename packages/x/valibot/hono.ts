import type { Context } from 'hono';
import { parse } from 'valibot';
import type { BaseSchema } from 'valibot';

export const parseParams = <TSchema extends BaseSchema>(schema: TSchema, ctx: Context) => parse(schema, ctx.req.param());
export const parseQuery = <TSchema extends BaseSchema>(schema: TSchema, ctx: Context) => parse(schema, ctx.req.query());
