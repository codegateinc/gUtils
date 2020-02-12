import { always } from '../utils'

describe('always', () => {
    it('should return function when called', () => {
        expect(always(true)).toBeInstanceOf(Function)
    })

    it('should return function that always return true', () => {
        expect(always(true)()).toBeTruthy()
    })
})
