import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { MultilineTextBox } from 'smart-webcomponents-react/multilinetextbox';

function App() {
    // You can use useEffect here for lifecycle methods if needed
    // React.useEffect(() => {
    //     // componentDidMount logic
    // }, []);

    return (
        <div>
            <MultilineTextBox
                enterKeyBehavior="newLine"
                verticalScrollBarVisibility="auto"
                horizontalScrollBarVisibility="auto"
                placeholder="Auto Scrollbars"
            ></MultilineTextBox>
            <MultilineTextBox
                enterKeyBehavior="newLine"
                verticalScrollBarVisibility="disabled"
                horizontalScrollBarVisibility="disabled"
                placeholder="Disabled Scrollbars"
            ></MultilineTextBox>
            <MultilineTextBox
                enterKeyBehavior="newLine"
                verticalScrollBarVisibility="visible"
                horizontalScrollBarVisibility="visible"
                placeholder="Visible Scrollbars"
            ></MultilineTextBox>
            <MultilineTextBox
                enterKeyBehavior="newLine"
                verticalScrollBarVisibility="hidden"
                horizontalScrollBarVisibility="hidden"
                placeholder="Hidden Scrollbars"
            ></MultilineTextBox>
        </div>
    );
}

export default App;