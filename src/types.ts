export type KeyValuePair<T = any> = {
    [key: string]: T
}

export type CondItem<T, S> = [(element: T) => boolean, (element: T) => S]
