import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from 'react';
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { Tank } from 'smart-webcomponents-react/tank';

const App = () => {
  const tank = useRef(null);

  const handleCheckboxEnableTooltipChange = (event) => {
    tank.current.showTooltip = event.detail.value;
  };

  const handleCheckboxFarTooltipChange = (event) => {
    tank.current.tooltipPosition = event.detail.value ? 'far' : 'near';
  };

  return (
    <div>
      <Tank
        ref={tank}
        id="tank"
        tooltipPosition="far"
        showTooltip
        orientation="vertical"
        min={0}
        max={10}
        value={5}
        scalePosition="both"
      ></Tank>
      <br />
      <div className="options">
        <div className="caption">Settings</div>
        <div className="option">
          <CheckBox
            checked
            id="checkboxEnableTooltip"
            onChange={handleCheckboxEnableTooltipChange}
          >
            Enable tooltip
          </CheckBox>
          <br />
          <CheckBox
            checked
            id="checkboxFarTooltip"
            onChange={handleCheckboxFarTooltipChange}
          >
            Set tooltipPosition 'far'
          </CheckBox>
        </div>
      </div>
    </div>
  );
};

export default App;
