import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { MaskedTextBox } from 'smart-webcomponents-react/maskedtextbox';

const App = () => {
    // You can use useEffect if you need componentDidMount logic
    // React.useEffect(() => {
    //   // componentDidMount logic here
    // }, []);

    return (
        <div>
            <MaskedTextBox hidePromptOnLeave mask="00.00.0000"></MaskedTextBox>
        </div>
    );
};

export default App;