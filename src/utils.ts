type KeyValuePair<T = any> = {
  [key: string]: T
}

export const isDefined = (subject: any) => typeof subject !== 'undefined' && subject !== null
export const ifDefined = <T = any>(subject: any, then: (subject: T) => void) => isDefined(subject) && then(subject)
export const call = (fn: Function) => fn()
export const T = () => {}
export const hasKeys = (subject: any) => typeof subject === 'object'
  ? Object.keys(subject).length > 0
  : false
export const toPairs = <T extends {}>(subject: KeyValuePair) => Object.entries<T>(subject)
export const fromPairs = <T extends {}>(subject: Array<[string, any]>): T => Object.fromEntries(subject)
export const clearObject = (subject: KeyValuePair) => fromPairs(
    toPairs(subject).filter(([_ ,value]) => isDefined(value))
)
export const values = (subject: KeyValuePair) => toPairs(subject).map(([_, value]) => value)
