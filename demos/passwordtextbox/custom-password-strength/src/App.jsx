import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { PasswordTextBox } from 'smart-webcomponents-react/passwordtextbox';

const App = () => {
    const passwordStrength = (password, allowedSymbols) => {
        const passwordLength = password.length;

        if (passwordLength < 3) {
            return 'short';
        }
        else if (passwordLength < 10) {
            return 'weak';
        }
        else {
            return 'strong';
        }
    };

    return (
        <div>
            <PasswordTextBox
                showPasswordStrength
                showPasswordIcon
                passwordStrength={passwordStrength}
                tooltipArrow
                placeholder="Password strength callback"
                tooltipPosition="top"
            />
        </div>
    );
};

export default App;
