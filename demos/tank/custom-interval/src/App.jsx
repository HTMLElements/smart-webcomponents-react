import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { Tank } from 'smart-webcomponents-react/tank';

function App() {
  const tank = useRef(null);
  const tank2 = useRef(null);
  const tank3 = useRef(null);

  const handleToggleCustomIntervalChange = (event) => {
    const checked = event.detail.value;

    if (tank.current) tank.current.customInterval = checked;
    if (tank2.current) tank2.current.customInterval = checked;
    if (tank3.current) tank3.current.customInterval = checked;
  };

  const handleToggleCoerceChange = (event) => {
    const checked = event.detail.value;

    if (tank.current) tank.current.coerce = checked;
    if (tank2.current) tank2.current.coerce = checked;
    if (tank3.current) tank3.current.coerce = checked;
  };

  return (
    <div>
      <p>Tank with floating point scale:</p>
      <Tank
        ref={tank}
        id="tank1"
        orientation="horizontal"
        min={100}
        max={10000}
        value={1000}
        coerce
        customInterval
        customTicks={[100, 200, 1000, 8000, 10000]}
      ></Tank>

      <p>Tank with integer scale:</p>
      <Tank
        ref={tank2}
        id="tank2"
        orientation="horizontal"
        scaleType="integer"
        wordLength="int64"
        min={-9223372036854775808}
        max={9223372036854775807}
        value={1000}
        coerce
        customInterval
        customTicks={[-9e18, 0, 1e18, 5e18]}
      ></Tank>

      <p>Tank with logarithmic scale:</p>
      <Tank
        ref={tank3}
        id="tank3"
        orientation="horizontal"
        min={100}
        max={10000}
        logarithmicScale
        value={1000}
        coerce
        customInterval
        customTicks={[100, 200, 1000, 8000, 10000]}
      ></Tank>

      <div className="options">
        <div className="option">
          <p>Settings</p>
          <CheckBox id="toggleCustomInterval" checked onChange={handleToggleCustomIntervalChange}>
            Custom interval
          </CheckBox>
          <CheckBox id="toggleCoerce" checked onChange={handleToggleCoerceChange}>
            Coerce
          </CheckBox>
        </div>
      </div>
    </div>
  );
}

export default App;
