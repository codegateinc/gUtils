import { toPairs } from '../utils'

describe('toPairs', () => {
    it('should return array of arrays', () => {
        const arg1 = {
            a: 1,
            b: 2,
            c: 3
        }
        const expectedValue = [
            ['a', 1],
            ['b', 2],
            ['c', 3]
        ]

        expect(toPairs(arg1)).toEqual(expectedValue)
    })

    it('should return empty array', () => {
        const arg1 = {}
        const expectedValue = []

        expect(toPairs(arg1)).toEqual(expectedValue)
    })
})
