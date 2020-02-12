export type KeyValuePair<T = any> = {
    [key: string]: T
}

export type CondItem<S> = [(element: any) => boolean, () => S]
