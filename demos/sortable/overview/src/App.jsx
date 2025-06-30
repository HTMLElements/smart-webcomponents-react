import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { Sortable } from 'smart-webcomponents-react/sortable';

const App = () => {
  const sortableRef = useRef(null);

  const handleChange = (event) => {
    const sortable = sortableRef.current;
    if (!sortable) return;

    if (event.detail.value) {
      sortable.dragMode = 'handle';
      sortable.handleVisibility = 'visible';
    } else {
      sortable.dragMode = 'item';
    }
  };

  return (
    <div>
      <em>Drag and drop to change list order</em>
      <Sortable
        id="sortable"
        items="li"
        ref={sortableRef}
      >
        <ol>
          <li>Strawberries</li>
          <li>Mango</li>
          <li>Watermelon</li>
          <li>Apples</li>
          <li>Bananas</li>
          <li>Grapes</li>
          <li>Pineapples</li>
          <li>Oranges</li>
          <li>Raspberries</li>
          <li>Peaches</li>
          <li>Cherries</li>
          <li>Kiwi</li>
          <li>Blueberries</li>
          <li>Pomegranate</li>
          <li>Lemons</li>
        </ol>
      </Sortable>
      <div className="options">
        <CheckBox onChange={handleChange} id="handle">
          <code>drag-mode="handle"</code>
        </CheckBox>
      </div>
    </div>
  );
};

export default App;