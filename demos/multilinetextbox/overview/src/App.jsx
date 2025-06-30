import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { MultilineTextBox } from 'smart-webcomponents-react/multilinetextbox';

function App() {
    // Equivalent of init() and componentDidMount
    // React.useEffect(() => {
    //   // Your code here (similar to componentDidMount/init)
    // }, []);

    return (
        <div>
            <p>Text areas should have a visible border, using the same color and thickness
                as the input line.</p>
            <MultilineTextBox></MultilineTextBox>
            <br />
            <MultilineTextBox disabled></MultilineTextBox>
            <p>Disabled</p>
        </div>
    );
}

export default App;