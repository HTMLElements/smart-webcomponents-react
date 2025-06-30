import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { NumericTextBox } from 'smart-webcomponents-react/numerictextbox';
import { ToggleButton } from 'smart-webcomponents-react/button';

function App() {
  const numerictextbox = useRef(null);
  const numerictextbox2 = useRef(null);

  const handleChange = (event) => {
    const enabled = event.detail.value;

    if (numerictextbox.current) {
      numerictextbox.current.scientificNotation = enabled;
    }
    if (numerictextbox2.current) {
      numerictextbox2.current.scientificNotation = enabled;
    }
  };

  return (
    <div>
      <NumericTextBox
        ref={numerictextbox}
        id="floatingPointNumericTextBox"
        inputFormat="floatingPoint"
        value="300000000"
        scientificNotation
        spinButtons
        spinButtonsPosition="right"
        spinButtonsStep="1"
        enableMouseWheelAction
      ></NumericTextBox>
      <br />
      <NumericTextBox
        ref={numerictextbox2}
        id="complexNumericTextBox"
        inputFormat="complex"
        value="300000000 + 5000i"
        scientificNotation
        spinButtons
        spinButtonsPosition="right"
        spinButtonsStep="1 + 1i"
        enableMouseWheelAction
      ></NumericTextBox>
      <div className="options">
        <div className="caption">Settings</div>
        <div className="option">
          <ToggleButton
            id="toggleScientificNotation"
            checked
            onChange={handleChange}
          >
            Toggle SI notation
          </ToggleButton>
        </div>
      </div>
    </div>
  );
}

export default App;
