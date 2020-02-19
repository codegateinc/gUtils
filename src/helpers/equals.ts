import { toPairs, values, is } from '../utils'

const compareObjects = (obj1: Object, obj2: Object) => {
    const obj1Length = values(obj1).length
    const obj2Length = values(obj2).length
    const subject1 = obj1Length > obj2Length ? toPairs(obj1) : toPairs(obj2)
    const subject2 = obj1Length > obj2Length ? toPairs(obj2) : toPairs(obj1)

    return subject1
        .every(([key, sub1], index) => {
            const [field] = subject2.filter(([sub2Key]) => sub2Key === key)

            if (!field) {
                return false
            }

            const [, sub2] = field

            if ((sub2 && sub1) && is(Object, sub2) && is(Object, sub1)) {
                return compareObjects(sub2, sub1)
            }

            if ((sub2 && sub1) && (Array.isArray(sub1) && Array.isArray(sub2))) {
                return compareArrays(sub1 as [], sub2 as [])
            }

            return sub2 && sub1
                ? sub2 === sub1
                : false
        })
}

const compareArrays = (arr1: [], arr2: []) => {
    const array1 = arr1.length > arr2.length ? arr1 : arr2
    const array2 = arr1.length > arr2.length ? arr2 : arr1

    return array1
        .every((arrItem, index) => {
            if (is(Object, arrItem) && array2[index]) {
                return compareObjects(array1, array2[index])
            }

            return array2[index] === arrItem
        })
}

export const equals = (arg1: any, arg2: any) => {
    switch (true) {
        case is(String, arg1) && is(String, arg2):
            return arg1 === arg2
        case is(Number, arg1) && is(Number, arg2):
            return arg1 === arg2
        case is(Boolean, arg1) && is(Boolean, arg2):
            return arg1 === arg2
        case is(Object, arg1) && is(Object, arg2):
            return compareObjects(arg1, arg2)
        case Array.isArray(arg1) && Array.isArray(arg2):
            return compareArrays(arg1, arg2)
        default:
            return false
    }
}
