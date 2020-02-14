import { clearObject } from '../utils'

describe('clearObject', () => {
    it('should return the same object', () => {
        const arg1 = {
            a: 1,
            b: 2,
            c: 3
        }

        expect(clearObject(arg1)).toEqual(arg1)
    })

    it('should return object without undefined value', () => {
        const arg1 = {
            a: 1,
            b: 2,
            c: undefined
        }
        const expectedValue = {
            a: 1,
            b: 2
        }

        expect(clearObject(arg1)).toEqual(expectedValue)
    })

    it('should return object without null value', () => {
        const arg1 = {
            a: 1,
            b: 2,
            c: null
        }
        const expectedValue = {
            a: 1,
            b: 2
        }

        expect(clearObject(arg1)).toEqual(expectedValue)
    })

    it('should return empty object', () => {
        const arg1 = {}

        expect(clearObject(arg1)).toEqual(arg1)
    })
})
