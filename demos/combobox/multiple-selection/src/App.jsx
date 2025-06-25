import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useEffect } from 'react';
import { ComboBox } from 'smart-webcomponents-react/combobox';

const App = () => {
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

    useEffect(() => {
        // Any setup logic if needed
    }, []);

    return (
        <div>
            <ComboBox
                selectionMode="zeroOrMany"
                selectionDisplayMode="tokens"
                dataSource={dataSource}
                placeholder="Select items:"
            />
        </div>
    );
};

export default App;
