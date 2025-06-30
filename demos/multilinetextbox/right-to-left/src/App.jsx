import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { MultilineTextBox } from 'smart-webcomponents-react/multilinetextbox';

function App() {
    // Initialization or side-effects would go in useEffect, if needed
    // React.useEffect(() => {
    //     // componentDidMount logic here
    // }, []);

    return (
        <div>
            <MultilineTextBox 
                enterKeyBehavior="newLine"
                placeholder="ממתין לקלט ..."
                rightToLeft
            />
        </div>
    );
}

export default App;