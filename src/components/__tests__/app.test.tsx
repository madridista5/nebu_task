import {cleanup, render, screen} from "@testing-library/react";
import {App} from "../../App";
import {Header} from "../Header/Header";
import {FruitList} from "../FruitList/FruitList";

afterEach(() => {
    cleanup();
});

describe('App Component', () => {

    test('renders App Component', () => {
        render(<App/>);
    });

    test('renders Header Component', () => {
        render(<Header/>);
    });

    test('renders FruitList Component', () => {
        render(<FruitList/>);
    });

    test('App Component contains Header Component', () => {
        // Arrange
        render(<App/>);
        const appComponent = screen.getByTestId('app');
        const headerComponent = screen.getByTestId('header');

        // Assert
        expect(appComponent).toContainElement(headerComponent);
    });
});