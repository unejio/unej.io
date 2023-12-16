import type { ClassValue } from 'clsx';

export type ClassesValue = { className?: ClassValue };
export type PropsWithClassesValue<P> = Omit<P, keyof ClassesValue> & ClassesValue;
