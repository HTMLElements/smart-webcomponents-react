import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { Menu, MenuItem, MenuItemsGroup } from 'smart-webcomponents-react/menu';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

function App() {
    const menu = useRef();
    const radiobutton = useRef();
    const radiobutton2 = useRef();
    const radiobutton3 = useRef();
    const radiobutton4 = useRef();
    const radiobutton5 = useRef();
    const radiobutton6 = useRef();
    const radiobutton7 = useRef();

    const handleAutoChange = () => {
        menu.current.dropDownPosition = 'auto';
    };

    const handleBottomLeftChange = () => {
        menu.current.dropDownPosition = 'bottom-left';
    };

    const handleBottomRightChange = () => {
        menu.current.dropDownPosition = 'bottom-right';
    };

    const handleTopLeftChange = () => {
        menu.current.dropDownPosition = 'top-left';
    };

    const handleTopRightChange = () => {
        menu.current.dropDownPosition = 'top-right';
    };

    const handleOverlayLeftChange = () => {
        menu.current.dropDownPosition = 'overlay-left';
    };

    const handleOverlayRightChange = () => {
        menu.current.dropDownPosition = 'overlay-right';
    };

    return (
        <div>
            <Menu ref={menu} id="menu" className="material animation" dropDownPosition="auto">
                <MenuItemsGroup>File
                    <MenuItem shortcut="Ctrl+N">New</MenuItem>
                    <MenuItem shortcut="Ctrl+0">Open</MenuItem>
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
            </Menu>
            <div className="options">
                <div className="caption">Dropdown Position</div>
                <div className="option">
                    <RadioButton ref={radiobutton} checked onChange={handleAutoChange}>Auto (browser bounds detection)</RadioButton>
                    <br />
                    <RadioButton ref={radiobutton2} onChange={handleBottomLeftChange}>Bottom left</RadioButton>
                    <br />
                    <RadioButton ref={radiobutton3} onChange={handleBottomRightChange}>Bottom right</RadioButton>
                    <br />
                    <RadioButton ref={radiobutton4} onChange={handleTopLeftChange}>Top left</RadioButton>
                    <br />
                    <RadioButton ref={radiobutton5} onChange={handleTopRightChange}>Top right</RadioButton>
                    <br />
                    <RadioButton ref={radiobutton6} onChange={handleOverlayLeftChange}>Overlay left</RadioButton>
                    <br />
                    <RadioButton ref={radiobutton7} onChange={handleOverlayRightChange}>Overlay right</RadioButton>
                </div>
            </div>
        </div>
    );
}

export default App;