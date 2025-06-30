import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { ListBox } from 'smart-webcomponents-react/listbox';

const App = () => {
  const listbox = useRef(null);

  const dataSource = [
    "Affogato", "Americano", "Bicerin", "Breve", "Café Bombón", "Café au lait", 
    "Caffé Corretto", "Café Crema", "Caffé Latte", "Caffé macchiato", "Café mélange", 
    "Coffee milk", "Cafe mocha", "Cappuccino", "Carajillo", "Cortado", "Cuban espresso", 
    "Espresso", "Eiskaffee", "The Flat White", "Frappuccino", "Galao", "Greek frappé coffee", 
    "Iced Coffee﻿", "Indian filter coffee", "Instant coffee", "Irish coffee", "Liqueur coffee"
  ];

  const handleScrollBottomReached = () => {
    const list = listbox.current;
    list.displayLoadingIndicator = true;

    setTimeout(() => {
      const index = list.items.length;
      let items = [];

      for (let i = 0; i < 10; i++) {
        items.push("Item " + (i + index));
      }

      list.insert(index, items);
      list.displayLoadingIndicator = false;
    }, 1000);
  };

  return (
    <div>
      <i>Hint: Scroll to the bottom to lazy load items.</i>
      <ListBox
        ref={listbox}
        dataSource={dataSource}
        onScrollBottomReached={handleScrollBottomReached}
      />
    </div>
  );
};

export default App;
