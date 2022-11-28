export enum ListType {
    A = 'A',
    B = 'B',
}

export interface Fruit {
    id: number,
    name: string,
    list: ListType,
}

export type FruitArr = Fruit[];