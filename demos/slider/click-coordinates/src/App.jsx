import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { Slider } from 'smart-webcomponents-react/slider';

function App() {
  const x = useRef(null);
  const y = useRef(null);

  const handleSliderClick = (event) => {
    if (x.current && y.current) {
      x.current.innerHTML = event.pageX;
      y.current.innerHTML = event.pageY;
    }
  };

  return (
    <div>
      <Slider
        id="slider"
        showTooltip
        orientation="horizontal"
        min="0"
        max="100"
        value="30"
        scalePosition="near"
        onClick={handleSliderClick}
      ></Slider>
      <div className="options">
        <div className="caption">Settings</div>
        <div className="option">
          <div>
            <strong>Coorinates:</strong> (<span ref={x} id="x"></span>, <span ref={y} id="y"></span>)
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;