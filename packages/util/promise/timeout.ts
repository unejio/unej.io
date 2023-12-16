export const delay = (ms: number = 1000) => new Promise<void>((resolve) => setTimeout(resolve, ms));
