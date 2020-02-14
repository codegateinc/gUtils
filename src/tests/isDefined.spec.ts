import { isDefined } from '../utils'

describe('isDefined', () => {
    it('should return true', () => {
        const arg1 = 1
        const arg2 = ''
        const arg3 = {}
        const arg4 = []

        expect(isDefined(arg1)).toBeTruthy()
        expect(isDefined(arg2)).toBeTruthy()
        expect(isDefined(arg3)).toBeTruthy()
        expect(isDefined(arg4)).toBeTruthy()
    })

    it('should return false', () => {
        const arg1 = undefined
        const arg2 = null

        expect(isDefined(arg1)).toBeFalsy()
        expect(isDefined(arg2)).toBeFalsy()
    })
})
