import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from 'react';
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { NumericTextBox } from 'smart-webcomponents-react/numerictextbox';
import { Tank } from 'smart-webcomponents-react/tank';

const App = () => {
  const tank = useRef(null);
  const tank2 = useRef(null);
  const tank3 = useRef(null);
  const tank4 = useRef(null);

  const handleNumerictextboxChange = (event) => {
    const value = event.detail.value;

    if (tank.current) tank.current.value = value;
    if (tank2.current) tank2.current.value = value;
    if (tank3.current) tank3.current.value = value;
    if (tank4.current) tank4.current.value = value;
  };

  const handleCheckboxChange = (event) => {
    const value = event.detail.value;

    if (tank.current) tank.current.showUnit = value;
    if (tank2.current) tank2.current.showUnit = value;
    if (tank3.current) tank3.current.showUnit = value;
    if (tank4.current) tank4.current.showUnit = value;
  };

  return (
    <div>
      <div>Horizontal tank</div>Value: <span id="horizontalTankValue">50000</span>
      <Tank
        ref={tank}
        id="horizontalTank"
        orientation="horizontal"
        min={0}
        max={100000}
        value={50000}
        scalePosition="both"
      ></Tank>

      <br />
      <br />
      <br />

      <div>Inverted horizontal tank</div>Value: <span id="invertedHorizontalTankValue">50000</span>
      <Tank
        ref={tank2}
        id="invertedHorizontalTank"
        orientation="horizontal"
        inverted
        min={0}
        max={100000}
        value={50000}
        scalePosition="both"
      ></Tank>

      <br />
      <br />
      <br />

      <div>Vertical Tank</div>Value: <span id="verticalTankValue">50000</span>
      <Tank
        ref={tank3}
        id="verticalTank"
        orientation="vertical"
        min={0}
        max={100000}
        value={50000}
        scalePosition="both"
      ></Tank>

      <br />
      <br />
      <br />

      <div>Inverted vertical Tank</div>Value: <span id="invertedVerticalTankValue">50000</span>
      <Tank
        ref={tank4}
        id="invertedVerticalTank"
        orientation="vertical"
        inverted
        min={0}
        max={100000}
        value={50000}
        scalePosition="both"
      ></Tank>

      <div className="options">
        <div className="caption">Settings</div>
        <div className="option">
          <h3>Set Tanks value:</h3>
          <NumericTextBox
            id="numericTextBox1"
            spinButtons
            spinButtonsStep={10000}
            value={50000}
            inputFormat="floatingPoint"
            onChange={handleNumerictextboxChange}
          ></NumericTextBox>
          <br />
          <br />
          <CheckBox id="checkboxShowUnit" onChange={handleCheckboxChange}>
            Show unit
          </CheckBox>
          <br />
        </div>
      </div>
    </div>
  );
};

export default App;
