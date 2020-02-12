export const compose = (...functions) => firstArg => functions.reverse().reduce((acc, fn) => fn(acc), firstArg);
export const cond = array => item => {
  const matchedTuple = array.find(([condition, _]) => condition(item));

  if (matchedTuple) {
    const [_, resultFn] = matchedTuple;
    return resultFn(item);
  }

  return undefined;
};
export const isDefined = subject => typeof subject !== 'undefined' && subject !== null;
export const ifDefined = (subject, then) => isDefined(subject) && then(subject);
export const call = fn => fn();
export const T = () => {};
export const always = subject => () => subject;
export const hasKeys = subject => typeof subject === 'object' ? Object.keys(subject).length > 0 : false;
export const toPairs = subject => Object.entries(subject);
export const fromPairs = subject => Object.fromEntries(subject);
export const clearObject = subject => compose(fromPairs, subject => toPairs(subject).filter(([_, value]) => isDefined(value)))(subject);
export const values = subject => Object.values(subject);
export const is = (type, subject) => subject.constructor.name === type.name;