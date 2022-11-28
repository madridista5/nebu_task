import React, {useEffect, useState} from "react";
import {FruitArr, ListType} from "../../types/fruitInterface";
import {fruitData} from "../../data/fruitData";

import './FruitList.css';

export const FruitList = () => {
    const [fruitList, setFruitList] = useState<FruitArr>([]);

    useEffect(() => {
        setFruitList([...fruitData]);
    }, []);

    return (
        <div className="fruit-list" data-testId="fruit-list-wrapper">
            <div className="fruit-list__left">
                <h2>Fruit I need to buy</h2>
                <div data-testId="list-a">
                    {fruitList
                        .filter(fruit => fruit.list === ListType.A)
                        .map(fruit => (
                            <button key={fruit.id} data-testId="item-list-A">{fruit.name}</button>
                        ))}
                </div>
            </div>
            <div className="fruit-list__right">
                <h2>Fruit I have</h2>
                <div>list B</div>
            </div>
        </div>
    );
}