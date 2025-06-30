import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { NumericTextBox } from 'smart-webcomponents-react/numerictextbox';

function App() {
    const logRef = useRef();

    const handleChange = (event) => {
        const newValue = event.detail.value,
              oldValue = event.detail.oldValue;
        if (logRef.current) {
            logRef.current.innerHTML = 'New: ' + newValue + '; old: ' + oldValue;
        }
    };

    return (
        <div>
            <NumericTextBox
                id="myCustomElement"
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
                onChange={handleChange}
            ></NumericTextBox>
            <div ref={logRef} id="log"></div>
        </div>
    );
}

export default App;
