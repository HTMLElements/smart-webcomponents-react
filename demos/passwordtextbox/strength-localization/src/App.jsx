import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { PasswordTextBox } from 'smart-webcomponents-react/passwordtextbox';

const messages = {
    'en': {
        'passwordStrength': 'Password strength',
        'short': 'Short',
        'weak': 'Weak',
        'far': 'Far',
        'good': 'Good',
        'strong': 'Strong',
        'showPassword': 'Show password'
    },
    'de': {
        'passwordStrength': 'Passwortstärke',
        'short': 'kurz',
        'weak': 'schwach',
        'far': 'weit',
        'good': 'gut',
        'strong': 'stark',
        'showPassword': 'Passwort anzeigen'
    }
};

const locale = 'de';

const App = () => {
    return (
        <div>
            <div className="demo-description">
                Start typing to see the localized strength popup feedback
            </div>
            <PasswordTextBox
                showPasswordStrength
                showPasswordIcon
                selectAllOnFocus
                messages={messages}
                locale={locale}
                tooltipArrow
                placeholder="Your password"
            />
        </div>
    );
};

export default App;
