import React, {useEffect, useState} from "react";
import {FruitArr, ListType} from "../../types/fruitInterface";
import {fruitData} from "../../data/fruitData";

import './FruitList.css';

export const FruitList = () => {
    const [fruitList, setFruitList] = useState<FruitArr>([]);

    useEffect(() => {
        setFruitList([...fruitData]);
    }, []);

    const handleBtn = (id: number) => {
        setFruitList(prevArr => {
            let newArr = prevArr.filter(fruit => fruit.id !== id);
            const fruitToChange = prevArr.find(fruit => fruit.id === id);
            if(fruitToChange) {
                fruitToChange.list = fruitToChange.list === ListType.A ? ListType.B : ListType.A;
                newArr = [...newArr, fruitToChange];
            }
            return newArr;
        })
    }

    return (
        <div className="fruit-list" data-testid="fruit-list-wrapper">
            <div className="fruit-list__left">
                <h2>Fruit I need to buy</h2>
                <div data-testid="list-a">
                    {fruitList
                        .filter(fruit => fruit.list === ListType.A)
                        .map(fruit => (
                            <button key={fruit.id} data-testid="item-list-A" onClick={() => handleBtn(fruit.id)}>{fruit.name}</button>
                        ))}
                </div>
            </div>
            <div className="fruit-list__right">
                <h2>Fruit I have</h2>
                <div data-testid="list-b">
                    {fruitList
                        .filter(fruit => fruit.list === ListType.B)
                        .map(fruit => (
                            <button key={fruit.id} data-testid="item-list-B" onClick={() => handleBtn(fruit.id)}>{fruit.name}</button>
                        ))}
                </div>
            </div>
        </div>
    );
}