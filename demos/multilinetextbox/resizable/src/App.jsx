import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { MultilineTextBox } from 'smart-webcomponents-react/multilinetextbox';

function App() {
    // You can use useEffect for componentDidMount equivalent if needed
    // React.useEffect(() => {
    //     // componentDidMount logic
    // }, []);
    
    return (
        <div>
            <MultilineTextBox
                enterKeyBehavior="newLine"
                selectAllOnFocus
                resizable
                placeholder="smart Text Area"
            />
        </div>
    );
}

export default App;
