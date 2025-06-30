import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { DropDownList } from 'smart-webcomponents-react/dropdownlist';

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
    "Indian filter coffee",
    "Instant coffee",
    "Irish coffee",
    "Liqueur coffee"
  ];

  return (
    <div>
      <DropDownList 
        selectedIndexes={[0]} 
        minLength={1}
        selectionMode="zeroOrOne" 
        dataSource={dataSource}
      />
      <br/>
      <br/>
      <br/>
      <div className="description">
        Open the DropDownList and press "F" to select the "Frappuccino" item.
      </div>
    </div>
  );
};

export default App;