import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { Slider } from 'smart-webcomponents-react/slider';

function App() {
  const slider = useRef();
  const slider2 = useRef();
  const slider3 = useRef();

  const handleToggleCustomIntervalChange = (event) => {
    const checked = event.detail.value;
    slider.current.customInterval = checked;
    slider2.current.customInterval = checked;
    slider3.current.customInterval = checked;
  };

  const handleToggleCoerceChange = (event) => {
    const checked = event.detail.value;
    slider.current.coerce = checked;
    slider2.current.coerce = checked;
    slider3.current.coerce = checked;
  };

  return (
    <div>
      <Slider
        ref={slider}
        id="slider1"
        orientation="horizontal"
        min="100"
        max="10000"
        value="1000"
        coerce
        customInterval
        customTicks={[200, 1000, 8000]}
      ></Slider>
      <p>Slider with floating point scale:</p>
      <br />
      <Slider
        ref={slider2}
        id="slider2"
        orientation="horizontal"
        scaleType="integer"
        word-length="int64"
        min="-9223372036854775808"
        max="9223372036854775807"
        value="1000"
        coerce
        customInterval
        customTicks={[-9e18, 0, 1e18, 5e18]}
      ></Slider>
      <p>Slider with integer scale:</p>
      <br />
      <Slider
        ref={slider3}
        id="slider3"
        orientation="horizontal"
        min="100"
        max="10000"
        logarithmic-scale
        value="1000"
        coerce
        customInterval
        customTicks={[100, 200, 1000, 8000, 10000]}
      ></Slider>
      <p>Slider with logarithmic scale:</p>
      <div className="options">
        <div className="caption">Settings</div>
        <div className="option">
          <CheckBox
            id="toggleCustomInterval"
            checked
            onChange={handleToggleCustomIntervalChange}
          >
            Custom interval
          </CheckBox>
        </div>
        <div className="option">
          <CheckBox
            id="toggleCoerce"
            checked
            onChange={handleToggleCoerceChange}
          >
            Coerce
          </CheckBox>
        </div>
      </div>
    </div>
  );
}

export default App;