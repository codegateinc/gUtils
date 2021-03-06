"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.splitEvery = exports.isEmpty = exports.compareFunctions = exports.is = exports.values = exports.clearObject = exports.fromPairs = exports.toPairs = exports.all = exports.hasElements = exports.hasKeys = exports.always = exports.T = exports.call = exports.ifDefined = exports.isDefined = exports.cond = exports.compose = void 0;

const compose = (...functions) => firstArg => functions.reverse().reduce((acc, fn) => fn(acc), firstArg);

exports.compose = compose;

const cond = array => item => {
  const matchedTuple = array.find(([condition, _]) => condition(item));

  if (matchedTuple) {
    const [_, resultFn] = matchedTuple;
    return resultFn(item);
  }

  return undefined;
};

exports.cond = cond;

const isDefined = subject => typeof subject !== 'undefined' && subject !== null;

exports.isDefined = isDefined;

const ifDefined = (subject, then) => isDefined(subject) && then(subject);

exports.ifDefined = ifDefined;

const call = fn => fn();

exports.call = call;

const T = () => {};

exports.T = T;

const always = subject => () => subject;

exports.always = always;

const hasKeys = subject => typeof subject === 'object' ? Object.keys(subject).length > 0 : false;

exports.hasKeys = hasKeys;

const hasElements = subject => Array.isArray(subject) ? subject.length > 0 : false;

exports.hasElements = hasElements;

const all = (...args) => !args.some(arg => !Boolean(arg));

exports.all = all;

const toPairs = subject => subject !== null ? Object.entries(subject) : [];

exports.toPairs = toPairs;

const fromPairs = subject => subject !== null ? subject.reduce((acc, [key, value]) => ({ ...acc,
  [key]: value
}), {}) : {};

exports.fromPairs = fromPairs;

const clearObject = subject => compose(fromPairs, subject => toPairs(subject).filter(([_, value]) => isDefined(value) && value !== ''))(subject);

exports.clearObject = clearObject;

const values = subject => Object.values(subject);

exports.values = values;

const is = (type, subject) => subject !== null ? subject.constructor === type || subject instanceof type : false;

exports.is = is;

const compareFunctions = (a, b) => a.toString() === b.toString();

exports.compareFunctions = compareFunctions;

const isEmpty = subject => {
  if (subject && Array.isArray(subject)) {
    return subject.length === 0;
  }

  if (subject && is(Object, subject)) {
    return !hasKeys(subject);
  }

  if (subject && is(String, subject)) {
    return subject === '';
  }

  return true;
};

exports.isEmpty = isEmpty;

const splitEvery = (limit, collection) => Array.from(new Array(Math.ceil(collection.length / limit))).map((_, index) => collection.slice(index * limit, limit * (index + 1)));

exports.splitEvery = splitEvery;