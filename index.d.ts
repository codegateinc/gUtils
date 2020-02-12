export namespace G {
  type KeyValuePair<T = any> = {
    [key: string]: T
  }

  type CondItem<S> = [(element: any) => boolean, () => S]

  export function isDefined(subject: any): boolean
  export function ifDefined<T = any>(subject: any, then: (subject: T) => void): T
  export function call(fn: Function): void
  export function T(): void
  export function hasKeys(subject: any): boolean
  export function toPairs<T extends {}>(subject: KeyValuePair): Array<[string, T]>
  export function fromPairs<T extends {}>(subject: Array<[string, any]>): T
  export function compose<T = any>(...functions: Array<Function>): (firstArg?: any) => T
  export function clearObject(subject: KeyValuePair): KeyValuePair
  export function values<T extends {}>(subject: KeyValuePair): Array<T>
  export function always<T = any>(value: any): () => T
  export function is(type: any, subject: any): boolean
  export function cond<T = any, S = any>(array: Array<CondItem<S>>): S
}
