import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { Button } from 'smart-webcomponents-react/button';
import { NumericTextBox } from 'smart-webcomponents-react/numerictextbox';

function App() {
    const numerictextbox = useRef();

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

    return (
        <div>
            <NumericTextBox
                ref={numerictextbox}
                id="myCustomElement"
                inputFormat="floatingPoint"
                value="3.14159265359"
                spinButtons
                spinButtonsPosition="right"
                spinButtonsStep="1"
                enableMouseWheelAction
            />
            <br />
            <Button
                id="setSignificantDigits"
                onClick={handleSetSignificantDigitsClick}
            >
                significantDigits = 5
            </Button>
            <Button
                id="setPrecisionDigits"
                onClick={handleSetPrecisionDigitsClick}
            >
                precisionDigits = 5
            </Button>
        </div>
    );
}

export default App;
