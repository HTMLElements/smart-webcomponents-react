import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { PasswordTextBox } from 'smart-webcomponents-react/passwordtextbox';

const App = () => {
    return (
        <div>
            <div className="demo-description">Start typing to see the strength popup feedback positioned differently.</div>
            <PasswordTextBox
                showPasswordStrength
                showPasswordIcon
                selectAllOnFocus
                tooltipArrow
                placeholder="Popup on top"
                tooltipPosition="top"
            />
            <br />
            <br />
            <PasswordTextBox
                showPasswordStrength
                showPasswordIcon
                selectAllOnFocus
                tooltipArrow
                placeholder="Popup on right"
                tooltipPosition="right"
            />
            <br />
            <br />
            <PasswordTextBox
                showPasswordStrength
                showPasswordIcon
                selectAllOnFocus
                tooltipArrow
                placeholder="Popup on bottom + icon"
                tooltipPosition="bottom"
            />
        </div>
    );
};

export default App;