import {cleanup, render, screen} from "@testing-library/react";
import {FruitList} from "../FruitList/FruitList";
import {fruitData} from "../../data/fruitData";

afterEach(() => {
    cleanup();
});

describe('Fruit List Component', () => {

    test('renders FruitList Component', () => {
        render(<FruitList/>);
    });

    test('renders h2 element with string: "Fruit I need to buy"', () => {
        // Arrange
        render(<FruitList/>);
        const h2Element = screen.getByText('Fruit I need to buy');

        // Assert
        expect(h2Element).toBeInTheDocument();
    });

    test('renders h2 element with string: "Fruit I have"', () => {
        // Arrange
        render(<FruitList/>);
        const h2Element = screen.getByText('Fruit I have');

        // Assert
        expect(h2Element).toBeInTheDocument();
    });

    test('renders buttons on the "Fruit to buy" list if getting data is succeed', async () => {
        // Arrange
        render(<FruitList/>);
        const fruitToBuyWrapper = screen.getByTestId('list-a');
        const listAElements = await screen.findAllByTestId('item-list-A');
        const lengthOfFruitToBuyAtTheBeginning = fruitData.length;

        // Assert
        for (const element of listAElements) {
            expect(fruitToBuyWrapper).toContainElement(element);
        }
        expect(listAElements).toHaveLength(lengthOfFruitToBuyAtTheBeginning);
    });

});