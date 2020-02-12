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
        expect(testCond('c')).toBeTruthy()
    })

    it('should return undefined when not match', () => {
        expect(cond([
            [
                testItem => testItem === 'a',
                () => 1
            ],
            [
                testItem => testItem === 'a' || testItem === 'b',
                () => 2
            ]
        ])('c')).toBeUndefined()
    })
})
