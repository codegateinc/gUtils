"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.test = exports.is = exports.values = exports.clearObject = exports.fromPairs = exports.toPairs = exports.hasKeys = exports.always = exports.T = exports.call = exports.ifDefined = exports.isDefined = exports.cond = exports.compose = void 0;

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

const toPairs = subject => Object.entries(subject);

exports.toPairs = toPairs;

const fromPairs = subject => Object.fromEntries(subject);

exports.fromPairs = fromPairs;

const clearObject = subject => compose(fromPairs, subject => toPairs(subject).filter(([_, value]) => isDefined(value)))(subject);

exports.clearObject = clearObject;

const values = subject => Object.values(subject);

exports.values = values;

const is = (type, subject) => subject.constructor.name === type.name;

exports.is = is;

const test = () => {};

exports.test = test;