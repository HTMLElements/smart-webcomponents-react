import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { Button } from 'smart-webcomponents-react/button';
import { ListBox } from 'smart-webcomponents-react/listbox';

function App() {
  const listbox = useRef();

  const handleClick = () => {
    let array = [];
    for (let i = 0; i < 1000000; i++) {
      array.push("Item" + i);
    }
    listbox.current.dataSource = array;
  };

  return (
    <div>
      <ListBox ref={listbox} itemHeight={36} virtualized id="list"></ListBox>
      <br />
      <div className="options">
        <div className="caption">Virtualization</div>
        <div className="option">
          <Button id="button" onClick={handleClick}>Load 1 million items</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
