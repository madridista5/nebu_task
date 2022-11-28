import {cleanup, render, screen} from "@testing-library/react";
import {Header} from "../Header/Header";

afterEach(() => {
    cleanup();
});

describe('Header Component', () => {

    test('renders Header Component', () => {
        render(<Header/>);
    });

    test('Header Component contains header and h1', () => {
        // Arrange
        render(<Header/>);
        const headerElement = screen.getByTestId('header');
        const h1Element = screen.getByTestId('h1');

        // Assert
        expect(headerElement).toContainElement(h1Element);
        expect(h1Element).toBeInTheDocument();
    });

});