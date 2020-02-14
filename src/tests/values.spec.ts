import { values } from '../utils'

describe('values', () => {
    it('should return array of values', () => {
        const arg1 = {
            a: 1,
            b: 2,
            c: 3
        }
        const expectedValue = [1, 2, 3]

        expect(values(arg1)).toEqual(expectedValue)
    })

    it('should return empty array', () => {
        const arg1 = {}
        const expectedValue = []

        expect(values(arg1)).toEqual(expectedValue)
    })
})
