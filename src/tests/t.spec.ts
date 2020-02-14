import { T } from '../utils'

describe('T', () => {
    it('should return function', () => {
        expect(T).toBeInstanceOf(Function)
    })

    it('should return undefined', () => {
        expect(T()).toBeUndefined()
    })
})
