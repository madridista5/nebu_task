import {cleanup, render, screen} from "@testing-library/react";
import {FruitList} from "../FruitList/FruitList";
import {fruitData} from "../../data/fruitData";
import userEvent from "@testing-library/user-event";

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

    // test('when I click element in list A it is moved to list B', async () => {
    //     // Arrange
    //     render(<FruitList/>);
    //     const listAElements = await screen.findAllByTestId('item-list-A');
    //     const listB = screen.getByTestId('list-b');
    //
    //     // Act
    //     for (const element of listAElements) {
    //         await userEvent.click(element);
    //     }
    //
    //     // Assert
    //     const listBElements = await screen.findAllByTestId('item-list-B');
    //     for (const elementB of listBElements) {
    //         expect(listB).toContainElement(elementB);
    //     }
    // });

    // test('when I click element in list A it is no more in list A', async () => {
    //     // Arrange
    //     render(<FruitList/>);
    //     const listAElements = await screen.findAllByTestId('item-list-A');
    //     const listA = screen.getByTestId('list-a');
    //
    //     // Act
    //     for (const element of listAElements) {
    //         await userEvent.click(element);
    //     }
    //
    //     // Assert
    //     for (const element of listAElements) {
    //         expect(listA).not.toContainElement(element);
    //     }
    // });

    test('When I click element in listB it is moved to listA', async () => {
        // Arrange
        render(<FruitList/>);
        const listAElements = await screen.findAllByTestId('item-list-A');
        const listB = screen.getByTestId('list-b');
        const listA = screen.getByTestId('list-a');

        // Act
        for (const elementA of listAElements) {
            await userEvent.click(elementA);
        }
        const listBElements = await screen.findAllByTestId('item-list-B');

        for (const elementB of listBElements) {
            expect(listB).toContainElement(elementB);
            await userEvent.click(elementB);
        }

        // Assert
        const listAElementsInTheEnd = await screen.findAllByTestId('item-list-A');
        for (const element of listAElementsInTheEnd) {
            expect(listA).toContainElement(element);
        }
    });

});