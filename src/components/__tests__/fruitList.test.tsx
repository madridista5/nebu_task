import {cleanup, render, screen} from "@testing-library/react";
import {FruitList} from "../FruitList/FruitList";

afterEach(() => {
    cleanup();
});

describe('Fruit List Component', () => {

    test('renders FruitList Component', () => {
        render(<FruitList/>);
    });

    test('renders h2 element with string: "Fruit I need to buy"', () => {
        render(<FruitList/>);
        const h2Element = screen.getByText('Fruit I need to buy');
        expect(h2Element).toBeInTheDocument();
    });

    test('renders h2 element with string: "Fruit I have"', () => {
        render(<FruitList/>);
        const h2Element = screen.getByText('Fruit I have');
        expect(h2Element).toBeInTheDocument();
    });


});