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
|compose         |`(Array<Function>)`                                  |calls functions in reversed order 
|cond            |`<T = any, S = any>(array: Array<CondItem<S>>)`      |replaces switch with array of conditions
|isDefined       |`(subject: any)`                                     |check if given value is defined and not nullable
|ifDefined       |`<T = any>(subject: any, then: (subject: T) => void)`|if given `subject` is defined calls `then` function
|call            |`(fn: Function)`                                     |calls given `fn` function
|T               |none                                                 |returns empty function
|always          |`<T>(subject: any)`                                  |returns given `subject`
|hasKeys         |`(subject: any)`                                     |checks if given `subject` has got any keys
|toPairs         |`<T extends {}>(subject: {[key: string]: any})`      |returns Array of Array -> `[[key, value]]`
|fromPairs       |`<T extends {}>(subject: Array<[string, any]>)`      |returns object made from Array of Arrays -> `{[key: string]: any}`
|clearObject     |`(subject: {[key: string]: any})`                    |return object without `undefined` or `null` values
|values          |`<T extends {}>(subject: {[key: string]: any})`      |returns Array of values
|is              |`(type: any, subject: any)`                          |returns boolean value dependent if `subject` is typeof `type`
