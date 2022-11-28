import React from "react";

import './FruitList.css';

export const FruitList = () => {
    return (
        <div className="fruit-list" data-testId="fruit-list-wrapper">
            <div className="fruit-list__left">
                <h2>Fruit I need to buy</h2>
                <div>List A</div>
            </div>
            <div className="fruit-list__right">
                <h2>Fruit I have</h2>
                <div>list B</div>
            </div>
        </div>
    );
}