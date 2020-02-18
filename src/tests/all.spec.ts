import { all } from '../utils'

describe('all', () => {
    it('should return true if every condition is correct', () => {
        expect(all(
            true,
            Boolean(10),
            10 === 10
        )).toEqual(true)
    })

    it('if one of the arguments is falsy', () => {
        expect(all(
            false,
            Boolean(10),
            10 === 10
        )).toEqual(false)
    })

    it('should return true if no arguments passed', () => {
        expect(all()).toEqual(true)
    })
})
