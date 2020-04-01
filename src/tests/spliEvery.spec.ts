import { splitEvery } from '../utils'

describe('splitEvery', () => {
    it('should return splitted array', () => {
        const collection = [1, 2, 3, 4, 5]

        expect(splitEvery(2, collection)).toEqual([[1, 2], [3, 4], [5]])
    })

    it('should return splitted string', () => {
        const collection = 'Test string'

        expect(splitEvery(5, collection)).toEqual(['Test ', 'strin', 'g'])
    })
})
