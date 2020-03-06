import { compareFunctions } from '../utils'

describe('compareFunctions', () => {
    it('should return true when functions are equal', () => {
        const fn1 = () => {}
        const fn2 = () => {}

        const fn3 = () => 'fn3'
        const fn4 = () => 'fn3'

        const fn5 = () => 0
        const fn6 = () => 0

        const fn7 = (prop: string) => prop
        const fn8 = (prop: string) => prop

        expect(compareFunctions(fn1, fn2)).toBeTruthy()
        expect(compareFunctions(fn3, fn4)).toBeTruthy()
        expect(compareFunctions(fn5, fn6)).toBeTruthy()
        expect(compareFunctions(fn7, fn8)).toBeTruthy()
    })

    it('should return false when functions are not equal', () => {
        const fn1 = () => {}
        const fn2 = () => []

        const fn3 = () => 'fn3'
        const fn4 = () => 'fn4'

        const fn5 = () => 0
        const fn6 = () => 5

        const fn7 = (prop: string) => {
            const a = 'test'

            return `${a}${prop}`
        }
        const fn8 = (prop: string) => {
            const a = 'differentValue'

            return `${a}${prop}`
        }

        expect(compareFunctions(fn1, fn2)).toBeFalsy()
        expect(compareFunctions(fn3, fn4)).toBeFalsy()
        expect(compareFunctions(fn5, fn6)).toBeFalsy()
        expect(compareFunctions(fn7, fn8)).toBeFalsy()
    })
})
