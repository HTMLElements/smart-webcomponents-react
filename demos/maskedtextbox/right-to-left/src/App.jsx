import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { MaskedTextBox } from 'smart-webcomponents-react/maskedtextbox';

function App() {
    // No logic needed for componentDidMount since it's empty

    return (
        <div>
            <MaskedTextBox label="מספר טלפון" mask="+1 (###) ### - ####" rightToLeft></MaskedTextBox>
        </div>
    );
}

export default App;