import { isEmpty } from '../utils'

describe('isEmpty', () => {
    it('should return true', () => {
        expect(isEmpty({})).toBeTruthy()
        expect(isEmpty([])).toBeTruthy()
        expect(isEmpty('')).toBeTruthy()
        expect(isEmpty(undefined)).toBeTruthy()
        expect(isEmpty(null)).toBeTruthy()
        expect(isEmpty(0)).toBeTruthy()
    })

    it('should return false', () => {
        expect(isEmpty({ a: 1 })).toBeFalsy()
        expect(isEmpty([1])).toBeFalsy()
        expect(isEmpty('test')).toBeFalsy()
    })
})
