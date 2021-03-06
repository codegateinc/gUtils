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

export const toPairs = <T extends {}>(subject: KeyValuePair) => subject !== null ?  Object.entries<T>(subject) : []
export const fromPairs = <T extends {}>(subject: Array<[string, any]>): T => subject !== null ? subject.reduce((acc, [key, value]) => ({
    ...acc,
    [key]: value
}), {} as T) : {} as T

export const clearObject = (subject: KeyValuePair) => compose(
  fromPairs,
  subject => toPairs(subject)
    .filter(([_ ,value]) => isDefined(value) && value !== '')
)(subject)

export const values = <T extends {}>(subject: KeyValuePair) => Object.values<T>(subject)

export const is = (type: any, subject: any) => subject !== null ? subject.constructor === type || subject instanceof type : false

export const compareFunctions = (a: Function, b: Function) => a.toString() === b.toString()

export const isEmpty = (subject: any) => {
    if (subject && Array.isArray(subject)) {
        return subject.length === 0
    }

    if (subject && is(Object, subject)) {
        return !hasKeys(subject)
    }

    if (subject && is(String, subject)) {
        return subject === ''
    }

    return true
}

export const splitEvery = <T>(limit: number, collection: Array<T> | string) => Array
    .from(new Array(Math.ceil(collection.length / limit)))
    .map((_, index) => collection.slice(index * limit, limit * (index + 1)))
