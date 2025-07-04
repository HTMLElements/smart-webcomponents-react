import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { NumericTextBox } from 'smart-webcomponents-react/numerictextbox';

function App() {
  return (
    <div>
      <div className="smart-demo-container">
        <section>
          <div>
            <h2>Numeric Text fields allow users to enter and edit any type of numbers.</h2>
            <div className="module">
              <p>
                Numeric Text fields typically reside in forms but can appear in other
                places, like dialog boxes and search.
              </p>
            </div>
          </div>
        </section>
        <div>
          <NumericTextBox
            placeholder="Enter a number..."
            inputType="integer"
            hint="Idle & empty"
            nullable
            value="null"
          ></NumericTextBox>
          <br />
          <br />
          <br />
          <NumericTextBox
            placeholder="Enter"
            showUnit
            nullable
            value="null"
          ></NumericTextBox>
          <br />
          <br />
          <br />
          <NumericTextBox
            radixDisplay
            value="123"
            nullable
          ></NumericTextBox>
          <br />
          <br />
          <br />
          <NumericTextBox
            disabled
            nullable
          ></NumericTextBox>
          <p>disabled</p>
        </div>
      </div>
    </div>
  );
}

export default App;
