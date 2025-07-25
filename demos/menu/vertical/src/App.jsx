import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { Menu, MenuItem, MenuItemsGroup } from 'smart-webcomponents-react/menu';

function App() {
    return (
        <div>
            <Menu id="menu" mode="vertical">
                <MenuItemsGroup label="File">
                    <MenuItem label="New" shortcut="Ctrl+N"></MenuItem>
                    <MenuItem label="Open" shortcut="Ctrl+0"></MenuItem>
                    <MenuItemsGroup label="Open Containing Folder">
                        <MenuItem label="Explorer"></MenuItem>
                        <MenuItem label="cmd"></MenuItem>
                    </MenuItemsGroup>
                    <MenuItem label="Save" shortcut="Ctrl+S" disabled></MenuItem>
                    <MenuItem label="Save As..." shortcut="Ctrl+Alt+S" separator></MenuItem>
                    <MenuItem label="Exit" shortcut="Alt+F4"></MenuItem>
                </MenuItemsGroup>
                <MenuItemsGroup label="Edit">
                    <MenuItem label="Undo" shortcut="Ctrl+Z"></MenuItem>
                    <MenuItem label="Redo" shortcut="Ctrl+Y" separator></MenuItem>
                    <MenuItem label="Cut" shortcut="Ctrl+X"></MenuItem>
                    <MenuItem label="Copy" shortcut="Ctrl+C"></MenuItem>
                    <MenuItem label="Paste" shortcut="Ctrl+V" disabled></MenuItem>
                </MenuItemsGroup>
                <MenuItemsGroup label="Encoding">
                    <MenuItem label="Encode in ANSI"></MenuItem>
                    <MenuItem label="Encode in UTF-8"></MenuItem>
                    <MenuItem label="Encode in UTF-8-BOM"></MenuItem>
                    <MenuItem label="Encode in UTCS-2 BE BOM"></MenuItem>
                    <MenuItem label="Encode in UTCS-2 LE BOM" separator></MenuItem>
                    <MenuItemsGroup label="Character sets">
                        <MenuItemsGroup label="Cyrillic">
                            <MenuItem label="ISO 8859-5"></MenuItem>
                            <MenuItem label="KOI8-R"></MenuItem>
                            <MenuItem label="KOI8-U"></MenuItem>
                            <MenuItem label="Windows-1251"></MenuItem>
                        </MenuItemsGroup>
                        <MenuItemsGroup label="Chinese">
                            <MenuItem label="Big5 (Traditional)"></MenuItem>
                            <MenuItem label="GB2312 (Simplified)"></MenuItem>
                        </MenuItemsGroup>
                        <MenuItemsGroup label="Western European">
                            <MenuItem label="ISO 8859-1"></MenuItem>
                            <MenuItem label="ISO 8859-15"></MenuItem>
                            <MenuItem label="OEM 850"></MenuItem>
                            <MenuItem label="Windows-1252"></MenuItem>
                        </MenuItemsGroup>
                    </MenuItemsGroup>
                </MenuItemsGroup>
            </Menu>
        </div>
    );
}

export default App;