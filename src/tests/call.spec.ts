import { call } from '../utils'

describe('call', () => {
    it('should invoke given fn', () => {
        const fn1 = jest.fn()

        call(fn1)

        expect(fn1).toHaveBeenCalled()
    })
})
