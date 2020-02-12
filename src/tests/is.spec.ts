import { is } from '../utils'

describe('is', () => {
    it('should return true when type is correct', () => {
        expect(is(String, 'test')).toBeTruthy()
        expect(is(String, new String(''))).toBeTruthy()
        expect(is(Object, {})).toBeTruthy()
        expect(is(Number, 1)).toBeTruthy()
    })

    it('should return false when type is incorrect', () => {
        expect(is(String, 1)).toBeFalsy()
        expect(is(Object, '')).toBeFalsy()
        expect(is(Number, {})).toBeFalsy()
    })
})
