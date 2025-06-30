import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { Button, ToggleButton } from 'smart-webcomponents-react/button';
import { Gauge } from 'smart-webcomponents-react/gauge';

const App = () => {
  const gauge = useRef();

  const handleToggleCoerceChange = (event) => {
    gauge.current.coerce = event.detail.value;
  };

  const handleSetIntervalClick = () => {
    gauge.current.interval = 2;
  };

  return (
    <div>
      <Gauge
        ref={gauge}
        id="gauge"
        analogDisplayType="needle"
        digitalDisplay
        startAngle={-30}
        endAngle={210}
        min="0"
        max="21"
        value="1"
        coerce
        interval="1"
      ></Gauge>
      <div className="options">
        <div className="caption">Settings</div>
        <div className="option">
          <ToggleButton
            id="toggleCoerce"
            checked
            onChange={handleToggleCoerceChange}
          >
            Toggle <strong>coerce</strong>
          </ToggleButton>
        </div>
        <div className="option">
          <Button
            id="setInterval"
            onClick={handleSetIntervalClick}
          >
            Set <strong>interval</strong> to <em>2</em>
          </Button>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="description">
        Coercion - snapping to the nearest value according to the coercion interval setting.
      </div>
    </div>
  );
};

export default App;