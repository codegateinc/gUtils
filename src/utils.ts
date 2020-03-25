import { KeyValuePair, CondItem } from './types'

export const compose = (...functions: Array<Function>) => (firstArg?: any) => functions
  .reverse()
  .reduce((acc, fn) => fn(acc), firstArg)

export const cond = <T = any, S = any>(array: Array<CondItem<T, S>>) => (item: T) => {
    const matchedTuple = array.find(([condition, _]) => condition(item))

    if (matchedTuple) {
        const [_, resultFn] = matchedTuple

        return resultFn(item) as S
    }

    return undefined
}

export const isDefined = (subject: any) => typeof subject !== 'undefined' && subject !== null
export const ifDefined = <T = any>(subject: any, then: (subject: T) => void) => isDefined(subject) && then(subject)

export const call = (fn: Function) => fn()
export const T = () => {}
export const always = <T>(subject: any) => () => <T>subject

export const hasKeys = (subject: any) => typeof subject === 'object'
  ? Object.keys(subject).length > 0
  : false

export const hasElements = (subject: any) => Array.isArray(subject)
    ? subject.length > 0
    : false

export const all = (...args: Array<boolean>) => !args.some(arg => !Boolean(arg))

export const toPairs = <T extends {}>(subject: KeyValuePair) => Object.entries<T>(subject)
export const fromPairs = <T extends {}>(subject: Array<[string, any]>): T => subject.reduce((acc, [key, value]) => ({
    ...acc,
    [key]: value
}), {} as T)

export const clearObject = (subject: KeyValuePair) => compose(
  fromPairs,
  subject => toPairs(subject)
    .filter(([_ ,value]) => isDefined(value) && value !== '')
)(subject)

export const values = <T extends {}>(subject: KeyValuePair) => Object.values<T>(subject)

export const is = (type: any, subject: any) => subject.constructor === type || subject instanceof type

export const compareFunctions = (a: Function, b: Function) => a.toString() === b.toString()
