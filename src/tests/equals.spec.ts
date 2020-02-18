import { equals } from '../helpers/equals'

describe('equals', () => {
    it('should return true', () => {
        const arg1 = {
            a: 1,
            b: 2,
            c: [
                {
                    c: 1,
                    b: 2
                },
                [
                    {
                        a: 1
                    }
                ]
            ]
        }
        const arg2 = {
            c: [
                {
                    b: 2,
                    c: 1
                },
                [
                    {
                        a: 1
                    }
                ]
            ],
            a: 1,
            b: 2
        }

        expect(equals(arg1, arg2)).toBeTruthy()
        expect(equals('abc', 'abc')).toBeTruthy()
        expect(equals(123.123, 123.123)).toBeTruthy()
    })

    it('should return false', () => {
        const arg1 = {
            a: 1,
            b: 2,
            c: [
                {
                    c: 2
                },
                [
                    {
                        a: 1
                    }
                ]
            ]
        }
        const arg2 = {
            a: 1,
            b: 2,
            c: [
                {
                    c: 1
                },
                [
                    {
                        a: 1
                    }
                ]
            ]
        }

        expect(equals(arg1, arg2)).toBeFalsy()
        expect(equals('abcd', 'abc')).toBeFalsy()
        expect(equals(123.124, 123.123)).toBeFalsy()
    })
})
