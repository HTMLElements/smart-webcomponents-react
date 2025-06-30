import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useEffect, useRef } from "react";
import { DropDownButton } from 'smart-webcomponents-react/dropdownbutton';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';
import { Tank } from 'smart-webcomponents-react/tank';

const App = () => {
  const dropdownbutton = useRef(null);
  const tank = useRef(null);

  const handleDropDownButtonPositionButtonClick = (event) => {
    let mode = event.target.textContent.trim();
    if (dropdownbutton.current) {
      dropdownbutton.current.dropDownButtonPosition = mode.charAt(0).toLowerCase() + mode.slice(1);
    }
  };

  const handleDropDownOpenMode = (event) => {
    let mode = event.target.textContent.trim();
    if (dropdownbutton.current) {
      dropdownbutton.current.dropDownOpenMode = mode.charAt(0).toLowerCase() + mode.slice(1);
    }
  };

  useEffect(() => {
    if (dropdownbutton.current && tank.current) {
      dropdownbutton.current.placeholder = tank.current.value.toString();
    }
  }, []);

  return (
    <div>
      <div id="container">
        <DropDownButton ref={dropdownbutton} dropDownWidth="auto">
          <Tank
            ref={tank}
            id="tank"
            className="animation"
            max={100}
            scaleType="integer"
            value={75}
            interval={10}
          ></Tank>
        </DropDownButton>
        <div className="options">
          <div className="option">
            <div>Button Position:</div>
            <RadioButton onClick={handleDropDownButtonPositionButtonClick}>Left</RadioButton>
            <br />
            <RadioButton checked onClick={handleDropDownButtonPositionButtonClick}>Right</RadioButton>
            <br />
            <RadioButton onClick={handleDropDownButtonPositionButtonClick}>Top</RadioButton>
            <br />
            <RadioButton onClick={handleDropDownButtonPositionButtonClick}>Bottom</RadioButton>
            <br />
          </div>
          <div className="option">
            <div>Open Mode:</div>
            <RadioButton checked onClick={handleDropDownOpenMode}>Default</RadioButton>
            <br />
            <RadioButton onClick={handleDropDownOpenMode}>DropDownButton</RadioButton>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;