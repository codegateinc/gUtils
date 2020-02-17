import { hasElements } from '../utils'

describe('hasElements', () => {
    it('should return false for value different than array', () => {
        const subject1 = false
        const subject2 = 12
        const subject3 = 'string'
        const subject4 = {}
        const subject5 = () => {}

        expect(hasElements(subject1)).toBeFalsy()
        expect(hasElements(subject2)).toBeFalsy()
        expect(hasElements(subject3)).toBeFalsy()
        expect(hasElements(subject4)).toBeFalsy()
        expect(hasElements(subject5)).toBeFalsy()
    })

    it('should return false for empty array', () => {
        expect(hasElements([])).toBeFalsy()
    })

    it('should return true for array with at least one element', () => {
        expect(hasElements([1])).toBeTruthy()
        expect(hasElements([false, {}])).toBeTruthy()
        expect(hasElements(['a', 'b', 'c'])).toBeTruthy()
    })
})
