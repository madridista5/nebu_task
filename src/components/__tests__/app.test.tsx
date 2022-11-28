import {cleanup, render} from "@testing-library/react";
import {App} from "../../App";

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
});