# gUtils

gUtils is a javascript library that contains functions to make your life simpler

## Installation

For now you have to add this library inline in your `package.json` by:<br>
```
    "gUtils": "https://github.com/codegateinc/gUtils.git"
```

and that's it

npm and yarn will be added soon :)

## Usage

```
    import { G } from 'gUtils

    G.is(String, 'test') -> this returns true
```

## Props

|    function    |                        props                        |               description               |
|----------------|-----------------------------------------------------|-----------------------------------------|
|compose         |`(Array<Function>)`                                  |calls functions in given order 
|cond            |`<T = any, S = any>(array: Array<CondItem<S>>)`      |switch condition of given arrays
|isDefined       |`(subject: any)`                                     |checks if given `subject` it not an undefined or null value
|ifDefined       |`<T = any>(subject: any, then: (subject: T) => void)`|if given `subject` is defined calls `then` function given in second argument
|call            |`(fn: Function)`                                     |calls given `fn` function
|T               |none                                                 |returns empty function
|always          |`<T>(subject: any)`                                  |returns function which returns given subject
|hasKeys         |`(subject: any)`                                     |checks if given `subject` has got any keys, returns boolean value
|toPairs         |`<T extends {}>(subject: {[key: string]: any})`      |returns Array of Array -> `[[key, value]]`
|fromPairs       |`<T extends {}>(subject: Array<[string, any]>)`      |returns object made from Array of Arrays -> `{[key: string]: any}`
|clearObject     |`(subject: {[key: string]: any})`                    |return cleared object from `undefined` and `null` values
|values          |`<T extends {}>(subject: {[key: string]: any})`      |returns Array of values
|is              |`(type: any, subject: any)`                          |returns boolean value dependent if `subject` is typeof `type`
