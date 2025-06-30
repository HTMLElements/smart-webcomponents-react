import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useEffect, useRef } from "react";
import { NumericTextBox } from 'smart-webcomponents-react/numerictextbox';

function App() {
    const numerictextbox = useRef(null);

    useEffect(() => {
        if (numerictextbox.current) {
            const messagesEnglish = numerictextbox.current.messages.en;
            messagesEnglish.binary = 'binary';
            messagesEnglish.octal = 'octal';
            messagesEnglish.decimal = 'decimal';
            messagesEnglish.hexadecimal = 'hexadecimal';
        }
    }, []);

    return (
        <div>
            <NumericTextBox
                ref={numerictextbox}
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
            ></NumericTextBox>
        </div>
    );
}

export default App;
