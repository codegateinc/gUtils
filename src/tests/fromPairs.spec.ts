import { fromPairs, toPairs } from '../utils'

describe('fromPairs', () => {
    it('should return object', () => {
        const expectedValue = {
            a: 1,
            b: 2,
            c: 3
        }
        const arg1 = toPairs(expectedValue)

        expect(fromPairs(arg1)).toEqual(expectedValue)
    })

    it('should return empty object', () => {
        const arg1 = []
        const expectedValue = {}

        expect(fromPairs(arg1)).toEqual(expectedValue)
    })
})
