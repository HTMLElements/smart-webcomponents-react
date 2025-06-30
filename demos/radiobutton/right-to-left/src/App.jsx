Here is your converted functional component:

import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

function App() {
    return (
        <div>
            <RadioButton rightToLeft>לחצן רדיו 1</RadioButton>
            <RadioButton checked rightToLeft>לחצן רדיו 2</RadioButton>
        </div>
    );
}

export default App;

No lifecycle methods were used, so there's no need for useEffect. Let me know if you need anything else!