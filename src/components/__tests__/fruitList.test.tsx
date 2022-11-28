import {cleanup, render} from "@testing-library/react";
import {FruitList} from "../FruitList/FruitList";

afterEach(() => {
    cleanup();
});

describe('Fruit List Component', () => {

    test('renders FruitList Component', () => {
        render(<FruitList/>);
    });
});