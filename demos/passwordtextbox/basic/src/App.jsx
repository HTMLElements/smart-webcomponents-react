import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { PasswordTextBox } from 'smart-webcomponents-react/passwordtextbox';

const App = () => {
    // Equivalent of componentDidMount
    // React.useEffect(() => {
    //     // Any side-effects here
    // }, []);

    return (
        <div>
            <div className="demo-description">Simple password field.</div>
            <PasswordTextBox placeholder="Your password"></PasswordTextBox>
        </div>
    );
};

export default App;