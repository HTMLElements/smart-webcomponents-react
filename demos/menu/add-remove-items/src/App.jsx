import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useCallback } from "react";
import { Button } from 'smart-webcomponents-react/button';
import { Menu, MenuItem, MenuItemsGroup } from 'smart-webcomponents-react/menu';

function App() {
  const menu = useRef();
  const button3 = useRef();

  // Using useRef for mutable item counts that don't cause re-renders
  const itemCount = useRef(1);
  const subItemCount = useRef(0);

  const handleAddItemClick = useCallback(() => {
    itemCount.current++;
    const newItem = document.createElement('smart-menu-item');
    newItem.innerHTML = 'Item ' + itemCount.current;
    menu.current.addItem(newItem);
  }, []);

  const handleAddSubItemClick = useCallback(() => {
    subItemCount.current++;
    const newItem = document.createElement('smart-menu-item');
    newItem.innerHTML = 'Item 0.' + subItemCount.current;
    menu.current.addItem(newItem, '0');
  }, []);

  const handleRemoveItemClick = useCallback(() => {
    menu.current.removeItem('1');
    if (button3.current) {
      button3.current.disabled = true;
    }
  }, []);

  return (
    <div>
      <Menu ref={menu} id="menu" drop-down-append-to="body">
        <MenuItemsGroup>Item 0
          <MenuItem>Item 0.0</MenuItem>
        </MenuItemsGroup>
        <MenuItem>Item 1</MenuItem>
      </Menu>
      <div className="options">
        <div className="caption">Settings</div>
        <div className="option">
          <Button id="addItem" className="demoButton" onClick={handleAddItemClick}>Add item</Button>
        </div>
        <div className="option">
          <Button id="addSubItem" className="demoButton" onClick={handleAddSubItemClick}>Add to "Item 0"</Button>
        </div>
        <div className="option">
          <Button ref={button3} id="removeItem" className="demoButton" onClick={handleRemoveItemClick}>Remove "Item 1"</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
