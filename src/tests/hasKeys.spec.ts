import { hasKeys } from '../utils'

describe('hasKeys', () => {
    it('should return false', () => {
        const arg1 = 1
        const arg2 = 'test'
        const arg3 = []
        const arg4 = {}

        expect(hasKeys(arg1)).toBeFalsy()
        expect(hasKeys(arg2)).toBeFalsy()
        expect(hasKeys(arg3)).toBeFalsy()
        expect(hasKeys(arg4)).toBeFalsy()
    })

    it('should return true', () => {
        const arg1 = {
            a: 1
        }

        expect(hasKeys(arg1)).toBeTruthy()
    })
})
