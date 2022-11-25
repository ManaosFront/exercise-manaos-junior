declare type AnyFunction<A extends any[] = any[], T = any> = (...args: A) => T;
declare type AnyObject<K extends string = string, T = any> = Record<K, T>;
declare type AnyArray<T = any> = T[];
declare type Falsy = undefined | false | null | "" | 0;
declare type Truthy<T> = T extends Falsy ? never : T;
