import { HTTPException } from 'hono/http-exception';

const create = (status: number) => (message: string, res?: Response) => new HTTPException(status, { message, res });

export const BadRequest = create(400);
export const Unauthorized = create(401);
export const Forbidden = create(403);
export const NotFound = create(404);
export const MethodNotAllowed = create(405);
export const RequestTimeout = create(408);
export const Conflict = create(409);

export const InternalServerError = create(500);
export const NotImplemented = create(501);
export const BadGateway = create(502);
export const ServiceUnavailable = create(503);
export const GatewayTimeout = create(503);

export function toInvariant(condition: any, httpException: ReturnType<typeof create>, message: string): asserts condition {
	if (!condition) throw httpException(message);
}
