import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useEffect } from "react";
import { MultilineTextBox } from 'smart-webcomponents-react/multilinetextbox';

function App() {
    // Equivalent to the init function and componentDidMount
    useEffect(() => {
        // init logic (currently empty)
    }, []);

    return (
        <div>
            <MultilineTextBox placeholder="Enter Text" autoExpand></MultilineTextBox>
        </div>
    );
}

export default App;