import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { Gauge } from 'smart-webcomponents-react/gauge';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

function App() {
  const gauge = useRef(null);

  const handleNeedleChange = () => {
    gauge.current.analogDisplayType = 'needle';
  };

  const handleFillChange = () => {
    gauge.current.analogDisplayType = 'fill';
  };

  const handleLineChange = () => {
    gauge.current.analogDisplayType = 'line';
  };

  return (
    <div>
      <Gauge
        ref={gauge}
        id="gauge"
        analogDisplayType="fill"
        digitalDisplay
        startAngle={-30}
        endAngle={210}
        min="0"
        max="100"
        value="30"
      ></Gauge>
      <div className="options">
        <div className="caption">Analog Display Type</div>
        <div className="option">
          <RadioButton groupName="analogDisplayType" onChange={handleNeedleChange}>
            needle
          </RadioButton>
          <br />
          <RadioButton checked groupName="analogDisplayType" onChange={handleFillChange}>
            fill
          </RadioButton>
          <br />
          <RadioButton groupName="analogDisplayType" onChange={handleLineChange}>
            line
          </RadioButton>
        </div>
      </div>
    </div>
  );
}

export default App;