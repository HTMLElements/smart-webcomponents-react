import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useEffect } from "react";
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

const App = () => {

    useEffect(() => {
        // Your code here (was in init and componentDidMount)
    }, []);

    return (
        <div>
            <RadioButton checked className="heart">On</RadioButton>
            <RadioButton className="heart">Off</RadioButton>
        </div>
    );
};

export default App;