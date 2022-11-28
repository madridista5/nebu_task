import React from 'react';
import { Header } from './components/Header/Header';
import {FruitList} from "./components/FruitList/FruitList";

export const App = () => (
    <div className="App" data-testid="app">
        <Header/>
        <FruitList/>
    </div>
)
