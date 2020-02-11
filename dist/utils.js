export const isDefined = subject => typeof subject !== 'undefined' && subject !== null;
export const ifDefined = (subject, then) => isDefined(subject) && then(subject);
export const call = fn => fn();
export const T = () => {};
export const hasKeys = subject => typeof subject === 'object' ? Object.keys(subject).length > 0 : false;
export const toPairs = subject => Object.entries(subject);
export const fromPairs = subject => Object.fromEntries(subject);