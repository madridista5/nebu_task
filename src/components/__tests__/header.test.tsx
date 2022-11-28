import {cleanup, render} from "@testing-library/react";
import {Header} from "../Header/Header";

afterEach(() => {
    cleanup();
});

describe('Header Component', () => {

    test('renders Header Component', () => {
        render(<Header/>);
    });
});