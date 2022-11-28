type listType = 'A' | 'B';

export interface Fruit {
    id: number,
    name: string,
    list: listType,
}

export type FruitArr = Fruit[];