import { ifDefined } from '../utils'

describe('ifDefined', () => {
    it('should return false', () => {
        const arg1 = undefined
        const fn1 = jest.fn()

        const arg2 = null
        const fn2 = jest.fn()

        expect(ifDefined(arg1, fn1)).toBeFalsy()
        expect(ifDefined(arg2, fn2)).toBeFalsy()
    })

    it('should invoke given function', () => {
        const arg1 = 1
        const fn1 = jest.fn()

        ifDefined(arg1, fn1)

        expect(fn1).toHaveBeenCalled()
    })
})
