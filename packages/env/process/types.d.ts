declare global {
	namespace NodeJS {
		interface ProcessEnv extends DotENV {}
	}
}

export {};
