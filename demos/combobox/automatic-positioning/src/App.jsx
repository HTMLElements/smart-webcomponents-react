import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from 'react';
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

  return (
    <div>
      <ComboBox id="first" dataSource={dataSource}></ComboBox>
      <ComboBox id="last" dataSource={dataSource}></ComboBox>
    </div>
  );
};

export default App;
