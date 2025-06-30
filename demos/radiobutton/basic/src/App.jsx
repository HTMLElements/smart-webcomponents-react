import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

function App() {
    // useEffect hook can be used if you need componentDidMount logic
    // React.useEffect(() => {
    //     // componentDidMount logic here
    // }, []);

    return (
        <div>
            <RadioButton>Radio Button 1</RadioButton>
            <RadioButton checked>Radio Button 2</RadioButton>
        </div>
    );
}

export default App;