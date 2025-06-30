import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { Button } from 'smart-webcomponents-react/button';
import { NumericTextBox } from 'smart-webcomponents-react/numerictextbox';

function App() {
    const numerictextbox = useRef(null);

    const handleSetSignificantDigitsClick = () => {
        if (numerictextbox.current) {
            numerictextbox.current.significantDigits = 5;
        }
    };

    const handleSetPrecisionDigitsClick = () => {
        if (numerictextbox.current) {
            numerictextbox.current.precisionDigits = 5;
        }
    };

    const handleSetValueClick = () => {
        if (numerictextbox.current) {
            numerictextbox.current.value = '5e12 + 1.6e3i';
        }
    };

    const handleSetScientificNotationValueClick = () => {
        if (numerictextbox.current) {
            numerictextbox.current.value = '34E - 12i';
        }
    };

    return (
        <div>
            <NumericTextBox
                ref={numerictextbox}
                id="myCustomElement"
                inputFormat="complex"
                value="3.14159265359+0.3i"
                spinButtons
                spinButtonsPosition="left"
                spinButtonsStep="1 + 1i"
                enableMouseWheelAction
            ></NumericTextBox>
            <br />
            <Button id="setSignificantDigits" onClick={handleSetSignificantDigitsClick}>significantDigits = 5</Button>
            <Button id="setPrecisionDigits" onClick={handleSetPrecisionDigitsClick}>precisionDigits = 5</Button>
            <br />
            <br />
            <Button id="setValue" onClick={handleSetValueClick}>set value to "5e12 + 1.6e3i"</Button>
            <Button id="setScientificNotationValue" onClick={handleSetScientificNotationValueClick}>set value to "34E - 12i"</Button>
        </div>
    );
}

export default App;