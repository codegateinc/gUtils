"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.equals = void 0;

var _utils = require("../utils");

const compareObjects = (obj1, obj2) => {
  const arg1Length = (0, _utils.values)(obj1).length;
  const arg2Length = (0, _utils.values)(obj2).length;
  const subject1 = arg1Length > arg2Length ? (0, _utils.toPairs)(obj1) : (0, _utils.toPairs)(obj2);
  const subject2 = arg1Length > arg2Length ? (0, _utils.toPairs)(obj2) : (0, _utils.toPairs)(obj1);
  return subject1.every(([key, sub1], index) => {
    const [field] = subject2.filter(([sub2Key]) => sub2Key === key);

    if (!field) {
      return false;
    }

    const [, sub2] = field;

    if (sub2 && sub1 && typeof sub2 === 'object' && typeof sub1 === 'object') {
      return compareObjects(sub2, sub1);
    }

    if (sub2 && sub1 && Array.isArray(sub1) && Array.isArray(sub2)) {
      return compareArrays(sub1, sub2);
    }

    return sub2 && sub1 ? sub2 === sub1 : false;
  });
};

const compareArrays = (arr1, arr2) => {
  const arr1Length = arr1.length;
  const arr2Length = arr2.length;
  const array1 = arr1Length > arr2Length ? arr1 : arr2;
  const array2 = arr1Length > arr2Length ? arr2 : arr1;
  return array1.every((arrItem, index) => {
    if (typeof arrItem === 'object' && array2[index]) {
      return compareObjects(array1, array2[index]);
    }

    return array2.includes(arrItem);
  });
};

const equals = (arg1, arg2) => {
  switch (true) {
    case typeof arg1 === 'string' && typeof arg2 === 'string':
      return arg1 === arg2;

    case typeof arg1 === 'number' && typeof arg2 === 'number':
      return arg1 === arg2;

    case typeof arg1 === 'boolean' && typeof arg2 === 'boolean':
      return arg1 === arg2;

    case typeof arg1 === 'object' && typeof arg2 === 'object':
      return compareObjects(arg1, arg2);

    case Array.isArray(arg1) && Array.isArray(arg2):
      return compareArrays(arg1, arg2);

    default:
      return false;
  }
};

exports.equals = equals;