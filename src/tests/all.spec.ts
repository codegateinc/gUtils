import { all } from '../utils'

describe('all', () => {
    it('should return true if every condition are correct', () => {
        expect(all(
            true,
            Boolean(10),
            10 === 10
        )).toEqual(true)
    })

    it('should return false if one of arguments return false', () => {
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
