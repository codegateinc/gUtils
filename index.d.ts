export namespace G {
  type KeyValuePair<T = any> = {
    [key: string]: T
  }

  export function isDefined(subject: any): boolean
  export function ifDefined<T = any>(subject: any, then: (subject: T) => void): T
  export function call(fn: Function): void
  export function T(): void
  export function hasKeys(subject: any): boolean
  export function toPairs<T extends {}>(subject: KeyValuePair): Array<[string, T]>
  export function fromPairs<T extends {}>(subject: Array<[string, any]>): T
  export function clearObject(subject: KeyValuePair): KeyValuePair
  export function values<T extends {}>(subject: KeyValuePair): Array<T>
}
