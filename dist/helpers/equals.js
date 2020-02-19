"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.equals = void 0;

var _utils = require("../utils");

const compareObjects = (obj1, obj2) => {
  const obj1Length = (0, _utils.values)(obj1).length;
  const obj2Length = (0, _utils.values)(obj2).length;
  const subject1 = obj1Length > obj2Length ? (0, _utils.toPairs)(obj1) : (0, _utils.toPairs)(obj2);
  const subject2 = obj1Length > obj2Length ? (0, _utils.toPairs)(obj2) : (0, _utils.toPairs)(obj1);
  return subject1.every(([key, sub1], index) => {
    const [field] = subject2.filter(([sub2Key]) => sub2Key === key);

    if (!field) {
      return false;
    }

    const [, sub2] = field;

    if (sub2 && sub1 && (0, _utils.is)(Object, sub2) && (0, _utils.is)(Object, sub1)) {
      return compareObjects(sub2, sub1);
    }

    if (sub2 && sub1 && Array.isArray(sub1) && Array.isArray(sub2)) {
      return compareArrays(sub1, sub2);
    }

    return sub2 && sub1 ? sub2 === sub1 : false;
  });
};

const compareArrays = (arr1, arr2) => {
  const array1 = arr1.length > arr2.length ? arr1 : arr2;
  const array2 = arr1.length > arr2.length ? arr2 : arr1;
  return array1.every((arrItem, index) => {
    if ((0, _utils.is)(Object, arrItem) && array2[index]) {
      return compareObjects(array1, array2[index]);
    }

    return array2[index] === arrItem;
  });
};

const equals = (arg1, arg2) => {
  switch (true) {
    case (0, _utils.is)(String, arg1) && (0, _utils.is)(String, arg2):
      return arg1 === arg2;

    case (0, _utils.is)(Number, arg1) && (0, _utils.is)(Number, arg2):
      return arg1 === arg2;

    case (0, _utils.is)(Boolean, arg1) && (0, _utils.is)(Boolean, arg2):
      return arg1 === arg2;

    case (0, _utils.is)(Object, arg1) && (0, _utils.is)(Object, arg2):
      return compareObjects(arg1, arg2);

    case Array.isArray(arg1) && Array.isArray(arg2):
      return compareArrays(arg1, arg2);

    default:
      return false;
  }
};

exports.equals = equals;