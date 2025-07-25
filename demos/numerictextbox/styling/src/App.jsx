import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { NumericTextBox } from 'smart-webcomponents-react/numerictextbox';

function App() {
  // You can use useEffect here if needed (componentDidMount or init equivalents)
  // React.useEffect(() => {}, []);

  return (
    <div>
      <p>Default look:</p>
      <NumericTextBox
        id="numericTextBox1"
        inputFormat="floatingPoint"
        value="100"
        spinButtons
        spinButtonsPosition="right"
        spinButtonsStep="1"
        enableMouseWheelAction
      />
      <br />
      <p>Spin buttons "outside" the input (similar to the appearance of DateTimePicker):</p>
      <NumericTextBox
        id="numericTextBox2"
        className="non-default-look"
        inputFormat="floatingPoint"
        value="100"
        spinButtons
        spinButtonsPosition="right"
        spinButtonsStep="1"
        enableMouseWheelAction
      />
      <br />
      <p>Spin buttons "inside" the input:</p>
      <NumericTextBox
        id="numericTextBox3"
        className="non-default-look"
        inputFormat="floatingPoint"
        value="100"
        spinButtons
        spinButtonsPosition="right"
        spinButtonsStep="1"
        enableMouseWheelAction
      />
      <p>Default look (spin buttons on the left):</p>
      <NumericTextBox
        id="numericTextBox4"
        inputFormat="floatingPoint"
        value="100"
        spinButtons
        spinButtonsPosition="left"
        spinButtonsStep="1"
        enableMouseWheelAction
      />
      <br />
      <p>Spin buttons on the left, "outside" the input:</p>
      <NumericTextBox
        id="numericTextBox5"
        className="non-default-look"
        inputFormat="floatingPoint"
        value="100"
        spinButtons
        spinButtonsPosition="left"
        spinButtonsStep="1"
        enableMouseWheelAction
      />
      <br />
      <p>Spin buttons on the left, "inside" the input:</p>
      <NumericTextBox
        id="numericTextBox6"
        className="non-default-look"
        inputFormat="floatingPoint"
        value="100"
        spinButtons
        spinButtonsPosition="left"
        spinButtonsStep="1"
        enableMouseWheelAction
      />
      <br />
      <p>Dropdown styled similar to that of DropDownList:</p>
      <NumericTextBox
        id="numericTextBox7"
        value="0"
        inputFormat="integer"
        wordLength="uint64"
        radixDisplay
        dropDownEnabled
        spinButtons
        spinButtonsPosition="right"
        spinButtonsStep="1"
        placeholder="Please type..."
        enableMouseWheelAction
      />
    </div>
  );
}

export default App;
