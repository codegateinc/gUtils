import { compose } from '../utils'

describe('compose', () => {
    it('should return function for no passed parameter', () => {
        expect(compose()).toBeDefined()
        expect(compose()).toBeInstanceOf(Function)
    })

    it('should return passed parameter for no registered fucntion', () => {
        expect(compose()(100)).toEqual(100)
    })

    it('should return undefined for no registered fucntion and no parameter', () => {
        expect(compose()()).toBeUndefined()
    })

    it('should call function with initial parameter', () => {
        const fn = value => value * 10

        expect(compose(fn)(10)).toEqual(100)
    })

    it('should reverse function calls', () => {
        const fn1 = value => value + 10
        const fn2 = value => value / 2

        const result = compose(
            fn1,
            fn2
        )

        expect(result(100)).toEqual(60)
    })
})