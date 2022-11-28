import {cleanup, render} from "@testing-library/react";
import {App} from "../../App";
import { Header } from "../Header/Header";
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
});