import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { DropDownList } from 'smart-webcomponents-react/dropdownlist';

const dataSource = [
    "Affogato",
    "Americano",
    "Bicerin",
    "Breve",
    "Café Bombón",
    "Café au lait",
    "Caffé Corretto",
    "Café Crema",
    "Caffé Latte",
    "Caffé macchiato",
    "Café mélange",
    "Coffee milk",
    "Cafe mocha",
    "Cappuccino",
    "Carajillo",
    "Cortado",
    "Cuban espresso",
    "Espresso",
    "Eiskaffee",
    "The Flat White",
    "Frappuccino",
    "Galao",
    "Greek frappé coffee",
    "Alabala",
    "Indian filter coffee",
    "Instant coffee",
    "Irish coffee",
    "Liqueur coffee"
];

const App = () => {
    return (
        <div>
            <DropDownList dataSource={dataSource}></DropDownList>
            <DropDownList id="last" dataSource={dataSource}></DropDownList>
        </div>
    );
};

export default App;