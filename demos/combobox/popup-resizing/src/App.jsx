import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { ComboBox, ListItem } from 'smart-webcomponents-react/combobox';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

const App = () => {
    const comboboxRef = useRef(null);

    const handleResizeModeButtonClick = (event) => {
        const combobox = comboboxRef.current;
        let mode = event.target.textContent.trim();
        combobox.resizeMode = mode.charAt(0).toLowerCase() + mode.slice(1);
    };

    const handleDropDownPositionButtonClick = (event) => {
        const combobox = comboboxRef.current;
        let mode = event.target.textContent.trim();
        combobox.dropDownPosition = mode.charAt(0).toLowerCase() + mode.slice(1);
    };

    return (
        <div>
            <ComboBox ref={comboboxRef} resizeMode="vertical">
                <ListItem value="1">Affogato</ListItem>
                <ListItem value="2">Americano</ListItem>
                <ListItem value="3">Bicerin</ListItem>
                <ListItem value="4">Breve</ListItem>
                <ListItem value="5">Cappuccino</ListItem>
                <ListItem value="6">Cafe Crema</ListItem>
                <ListItem value="7">Cafe Corretto</ListItem>
                <ListItem value="8">Cafe macchiato</ListItem>
                <ListItem value="9">Cafe mocha</ListItem>
                <ListItem value="10">Cortado</ListItem>
                <ListItem value="11">Cuban espresso</ListItem>
                <ListItem value="12">Espresso</ListItem>
                <ListItem value="13">Eiskaffee</ListItem>
                <ListItem value="14">Frappuccino</ListItem>
                <ListItem value="15">Galao</ListItem>
                <ListItem value="16">Greek frappe coffee</ListItem>
                <ListItem value="17">Iced Coffee﻿</ListItem>
                <ListItem value="18">Instant Coffee﻿</ListItem>
                <ListItem value="19">Latte</ListItem>
                <ListItem value="20">Liqueur coffee</ListItem>
            </ComboBox>

            <div className="options">
                <div className="caption">Resize Mode</div>
                <div className="option">
                    <RadioButton onClick={handleResizeModeButtonClick}>None</RadioButton>
                    <br /><br />
                    <RadioButton onClick={handleResizeModeButtonClick}>Horizontal</RadioButton>
                    <br /><br />
                    <RadioButton onClick={handleResizeModeButtonClick}>Both</RadioButton>
                    <br /><br />
                    <RadioButton checked onClick={handleResizeModeButtonClick}>Vertical</RadioButton>
                    <br /><br />
                </div>
                <div className="ddp caption">DropDown position</div>
                <div className="ddp option">
                    <RadioButton checked onClick={handleDropDownPositionButtonClick}>Bottom</RadioButton>
                    <RadioButton onClick={handleDropDownPositionButtonClick}>Top</RadioButton>
                </div>
            </div>
        </div>
    );
};

export default App;
