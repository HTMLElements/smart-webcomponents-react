import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { Menu, MenuItem, MenuItemsGroup } from 'smart-webcomponents-react/menu';

const App = () => {
    // The class's 'init' and 'componentDidMount' methods were empty, so hooks are not needed here.

    return (
        <div>
            <Menu id="menu" dropDownAppendTo="body">
                <MenuItemsGroup>File
                    <MenuItem shortcut="Ctrl+N">New</MenuItem>
                    <MenuItem shortcut="Ctrl+0">Open</MenuItem>
                    <MenuItemsGroup>Open Containing Folder
                        <MenuItem>Explorer</MenuItem>
                        <MenuItem>cmd</MenuItem>
                    </MenuItemsGroup>
                    <MenuItem shortcut="Ctrl+S" disabled>Save</MenuItem>
                    <MenuItem shortcut="Ctrl+Alt+S" separator>Save As...</MenuItem>
                    <MenuItem shortcut="Alt+F4">Exit</MenuItem>
                </MenuItemsGroup>
                <MenuItemsGroup>Edit
                    <MenuItem shortcut="Ctrl+Z">Undo</MenuItem>
                    <MenuItem shortcut="Ctrl+Y" separator>Redo</MenuItem>
                    <MenuItem shortcut="Ctrl+X">Cut</MenuItem>
                    <MenuItem shortcut="Ctrl+C">Copy</MenuItem>
                    <MenuItem shortcut="Ctrl+V" disabled>Paste</MenuItem>
                </MenuItemsGroup>
                <MenuItemsGroup id="help">
                    <img id="helpIcon" src="https://www.htmlelements.com/demos/images/help-icon.png" title="help" />
                    <MenuItem>About</MenuItem>
                    <MenuItem>Help center</MenuItem>
                    <MenuItem>Feedback</MenuItem>
                </MenuItemsGroup>
            </Menu>
        </div>
    );
};

export default App;