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
  return (
    <div>
      <DropDownList
        selectionMode="zeroOrMany"
        selectionDisplayMode="tokens"
        placeholder="Select items:"
        dataSource={dataSource}
      />
    </div>
  );
}

export default App;