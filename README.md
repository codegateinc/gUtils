## [![Coverage Status](https://coveralls.io/repos/github/codegateinc/gUtils/badge.svg?branch=master)](https://coveralls.io/github/codegateinc/gUtils?branch=master)

# gUtils

gUtils is a javascript library that contains functions to make your life simpler

## Installation

Just simply run in console 

`yarn add @codegateinc/g-utils` or `npm install @codegateinc/g-utils`

## Usage

```
    import { G } from 'gUtils'

    G.is(String, 'test') -> this returns true
```

## Props

|    function    |                        props                        |               description               |
|----------------|-----------------------------------------------------|-----------------------------------------|
|compose         |`(Array<Function>)`                                  |calls functions in reversed order 
|cond            |`<T = any, S = any>(array: Array<CondItem<T, S>>)`   |replaces switch with array of conditions
|isDefined       |`(subject: any)`                                     |check if given value is defined and not nullable
|ifDefined       |`<T = any>(subject: any, then: (subject: T) => void)`|calls the function if predicate is defined
|call            |`(fn: Function)`                                     |calls given `fn` function
|T               |none                                                 |returns empty function
|always          |`<T>(subject: any)`                                  |always returns given value
|hasKeys         |`(subject: any)`                                     |checks if object has any keys
|toPairs         |`<T extends {}>(subject: {[key: string]: any})`      |extracts object to array of key value tuple
|fromPairs       |`<T extends {}>(subject: Array<[string, any]>)`      |returns object made from Array of key value tuple
|clearObject     |`(subject: {[key: string]: any})`                    |clears object from nullable or undefined values
|values          |`<T extends {}>(subject: {[key: string]: any})`      |returns object's values as Array
|is              |`(type: any, subject: any)`                          |validates if give value has provided type
|all             |`(Array<boolean>)`                                   |check if all passed arguments are truthy
|hasElements     |`(subject: any): boolean`                            |check if given value is array and has got any elements
|compareFunctions|`(a: Function, b: Function): boolean`                |check if given functions are the same
|isEmpty         |`(subject: any):boolean`                             |check if given value is empty
