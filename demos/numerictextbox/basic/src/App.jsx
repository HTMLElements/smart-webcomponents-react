import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { NumericTextBox } from 'smart-webcomponents-react/numerictextbox';

function App() {
    // You can use useEffect for componentDidMount or initialization logic if needed
    // React.useEffect(() => {
    //     // componentDidMount logic here
    // }, []);

    return (
        <div>
            <NumericTextBox
                id="myCustomElement"
                inputFormat="floatingPoint"
                value="100"
                spinButtons
                spinButtonsPosition="right"
                spinButtonsStep="1"
                enableMouseWheelAction
            ></NumericTextBox>
        </div>
    );
}

export default App;