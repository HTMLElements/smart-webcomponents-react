import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { MultilineTextBox } from 'smart-webcomponents-react/multilinetextbox';

function App() {
    // If you want to use lifecycle logic, you can add useEffect here

    return (
        <div>
            <MultilineTextBox
                enterKeyBehavior="newLine"
                selectAllOnFocus
                autoFocus
                placeholder="smart Text Area"
            />
        </div>
    );
}

export default App;