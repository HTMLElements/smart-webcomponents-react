import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { DropDownList, ListItem } from 'smart-webcomponents-react/dropdownlist';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

const resizeModes = {
  none: 'None',
  horizontal: 'Horizontal',
  both: 'Both',
  vertical: 'Vertical'
};

const dropDownPositions = {
  bottom: 'Bottom',
  top: 'Top'
};

function App() {
  const dropdownlist = useRef();

  const handleResizeModeButtonClick = mode => {
    const dropDownList = dropdownlist.current;
    if (dropDownList) {
      dropDownList.resizeMode = mode.toLowerCase();
    }
  };

  const handleDropDownPositionButtonClick = mode => {
    const dropDownList = dropdownlist.current;
    if (dropDownList) {
      dropDownList.dropDownPosition = mode.toLowerCase();
    }
  };

  return (
    <div>
      <div>
        <h3>Resize Mode:</h3>
        <RadioButton onClick={() => handleResizeModeButtonClick(resizeModes.none)}>
          {resizeModes.none}
        </RadioButton>
        <RadioButton onClick={() => handleResizeModeButtonClick(resizeModes.horizontal)}>
          {resizeModes.horizontal}
        </RadioButton>
        <RadioButton onClick={() => handleResizeModeButtonClick(resizeModes.both)}>
          {resizeModes.both}
        </RadioButton>
        <RadioButton checked onClick={() => handleResizeModeButtonClick(resizeModes.vertical)}>
          {resizeModes.vertical}
        </RadioButton>
      </div>
      <br />
      <div>
        <h3>DropDown position:</h3>
        <RadioButton onClick={() => handleDropDownPositionButtonClick(dropDownPositions.bottom)}>
          {dropDownPositions.bottom}
        </RadioButton>
        <RadioButton onClick={() => handleDropDownPositionButtonClick(dropDownPositions.top)}>
          {dropDownPositions.top}
        </RadioButton>
      </div>
      <DropDownList ref={dropdownlist} resizeMode="vertical">
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
      </DropDownList>
    </div>
  );
}

export default App;