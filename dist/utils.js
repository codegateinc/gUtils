export const isDefined = subject => typeof subject !== 'undefined' && subject !== null;
export const ifDefined = (subject, then) => isDefined(subject) && then(subject);
export const call = fn => fn();
export const T = () => {};
export const hasKeys = subject => typeof subject === 'object' ? Object.keys(subject).length > 0 : false;
export const toPairs = subject => Object.entries(subject);
export const fromPairs = subject => Object.fromEntries(subject);
export const isNil = subject => subject === null;

const clearObject = subject => fromPairs(toPairs(subject).filter(([_, value]) => isDefined(value)));

const values = subject => toPairs(subject).map(([_, value]) => value);