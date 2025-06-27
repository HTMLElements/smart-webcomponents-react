import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { Tank } from 'smart-webcomponents-react/tank';

function App() {
  const horizontalTankValue = useRef();
  const verticalTankValue = useRef();
  const invertedHorizontalTankValue = useRef();
  const invertedVerticalTankValue = useRef();

  const handleHorizontalTankChange = (event) => {
    const value = event.detail.value;
    horizontalTankValue.current.innerHTML = parseFloat(value).toFixed(2);
  };

  const handleVerticalTankChange = (event) => {
    const value = event.detail.value;
    verticalTankValue.current.innerHTML = parseFloat(value).toFixed(2);
  };

  const handleInvertedHorizontalTankChange = (event) => {
    const value = event.detail.value;
    invertedHorizontalTankValue.current.innerHTML = parseFloat(value).toFixed(2);
  };

  const handleInvertedVerticalTankChange = (event) => {
    const value = event.detail.value;
    invertedVerticalTankValue.current.innerHTML = parseFloat(value).toFixed(2);
  };

  return (
    <div>
      <div className="underlined">Horizontal tank</div>
      Value: <span ref={horizontalTankValue} id="horizontalTankValue">30.00</span>
      <Tank
        id="horizontalTank"
        orientation="horizontal"
        min={0}
        max={100}
        value={30}
        scalePosition="none"
        onChange={handleHorizontalTankChange}
      ></Tank>
      <br /><br /><br />
      <div className="underlined">Inverted horizontal tank</div>
      Value: <span ref={invertedHorizontalTankValue} id="invertedHorizontalTankValue">30.00</span>
      <Tank
        id="invertedHorizontalTank"
        orientation="horizontal"
        inverted
        min={0}
        max={100}
        value={30}
        scalePosition="none"
        onChange={handleInvertedHorizontalTankChange}
      ></Tank>
      <br /><br /><br />
      <div className="underlined">Vertical Tank</div>
      Value: <span ref={verticalTankValue} id="verticalTankValue">30.00</span>
      <Tank
        id="verticalTank"
        orientation="vertical"
        min={0}
        max={100}
        value={30}
        scalePosition="none"
        onChange={handleVerticalTankChange}
      ></Tank>
      <br /><br /><br />
      <div className="underlined">Inverted vertical Tank</div>
      Value: <span ref={invertedVerticalTankValue} id="invertedVerticalTankValue">30.00</span>
      <Tank
        id="invertedVerticalTank"
        orientation="vertical"
        inverted
        min={0}
        max={100}
        value={30}
        scalePosition="none"
        onChange={handleInvertedVerticalTankChange}
      ></Tank>
    </div>
  );
}

export default App;
