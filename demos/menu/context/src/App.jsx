import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useEffect } from "react";
import { Menu, MenuItem, MenuItemsGroup } from 'smart-webcomponents-react/menu';

const App = () => {
  const menu = useRef();

  useEffect(() => {
    const menuRef = menu.current;

    const handleContextMenu = (event) => {
      event.preventDefault();
    };

    const handleMouseDown = (event) => {
      if (!menuRef.nativeElement.contains(event.target)) {
        menuRef.close();
      }
    };

    const handleMouseUp = (event) => {
      if (event.which === 3 && !menuRef.nativeElement.contains(event.target)) {
        menuRef.open(event.pageX, event.pageY);
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    // Cleanup function
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div>
      <p>Right-click anywhere to show the context menu.</p>
      <Menu ref={menu} id="menu" mode="dropDown">
        <MenuItem label="Default Formatting" separator></MenuItem>
        <MenuItem label="Format Cells..." separator></MenuItem>
        <MenuItem label="Insert..."></MenuItem>
        <MenuItem label="Delete..."></MenuItem>
        <MenuItem label="Cut"></MenuItem>
        <MenuItem label="Copy"></MenuItem>
        <MenuItem label="Paste"></MenuItem>
        <MenuItem label="Selection List..."></MenuItem>
      </Menu>
    </div>
  );
};

export default App;
