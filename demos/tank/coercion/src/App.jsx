import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { NumericTextBox } from 'smart-webcomponents-react/numerictextbox';
import { Tank } from 'smart-webcomponents-react/tank';

function App() {
  const tankRef = useRef(null);

  const handleChange = (event) => {
    if (tankRef.current) {
      tankRef.current.interval = event.detail.value;
    }
  };

  return (
    <div>
      <Tank
        ref={tankRef}
        id="tank"
        coerce
        interval={10}
        min={0}
        max={100}
        value={50}
        scalePosition="both"
        scaleType="integer"
      ></Tank>

      <div className="options">
        <div className="option">
          <p>Set coercion interval:</p>
          <NumericTextBox
            id="numericTextBox"
            value={10}
            min={1}
            max={100}
            inputFormat="integer"
            spinButtons
            onChange={handleChange}
          ></NumericTextBox>
        </div>
      </div>
    </div>
  );
}

export default App;
