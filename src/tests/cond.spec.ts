import { cond } from '../utils'

describe('cond', () => {
    const testCond = (testItem: any) => cond([
        [
            testItem => testItem === 'a',
            () => 1
        ],
        [
            testItem => testItem === 'a' || testItem === 'b',
            () => 2
        ],
        [
            () => true,
            () => 3
        ]
    ])(testItem)

    it('should return 1 when testItem is equal "a"', () => {
        expect(testCond('a')).toEqual(1)
    })

    it('should return 2 when testItem is equal "b"', () => {
        expect(testCond('b')).toEqual(2)
    })

    it('should return 3 when testItem not match', () => {
        expect(testCond('c')).toEqual(3)
    })

    it('should return undefined when not match', () => {
        const testedCond = (testItem: string) => cond([
            [
                testItem => testItem === 'a',
                () => 1
            ]
        ])(testItem)

        expect(testedCond('c')).toBeUndefined()
    })

    it('should return undefined when not match', () => {
        const result = cond([])(123)

        expect(result).toBeUndefined()
    })
})
