import { KeyValuePair } from './types'

export const compose = (...functions: Array<Function>) => (firstArg?: any) => functions
  .reverse()
  .reduce((acc, fn) => fn(acc), firstArg)

export const isDefined = (subject: any) => typeof subject !== 'undefined' && subject !== null
export const ifDefined = <T = any>(subject: any, then: (subject: T) => void) => isDefined(subject) && then(subject)

export const call = (fn: Function) => fn()
export const T = () => {}

export const hasKeys = (subject: any) => typeof subject === 'object'
  ? Object.keys(subject).length > 0
  : false

export const toPairs = <T extends {}>(subject: KeyValuePair) => Object.entries<T>(subject)
export const fromPairs = <T extends {}>(subject: Array<[string, any]>): T => Object.fromEntries(subject)

export const clearObject = (subject: KeyValuePair) => compose(
  fromPairs,
  subject => toPairs(subject)
    .filter(([_ ,value]) => isDefined(value))
)(subject)

export const values = <T extends {}>(subject: KeyValuePair) => Object.values<T>(subject)
