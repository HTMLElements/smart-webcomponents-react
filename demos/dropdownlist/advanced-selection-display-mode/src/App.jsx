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

function App() {
    // Add any useEffect hooks here if you need componentDidMount functionality in the future.
    return (
        <div>
            <DropDownList
                selectionDisplayMode="tokens"
                selectionMode="checkBox"
                placeholder="Select Item:"
                dataSource={dataSource}
            ></DropDownList>
        </div>
    );
}

export default App;