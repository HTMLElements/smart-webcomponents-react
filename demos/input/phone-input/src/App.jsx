import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useEffect } from "react";
import { PhoneInput } from 'smart-webcomponents-react/phoneinput';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

function App() {
    const input = useRef();

    useEffect(() => {
        // Equivalent to init()
        let phoneInput = input.current;
        // Add any extra initialization logic here if needed
    }, []);

    return (
        <div>
            <PhoneInput ref={input} placeholder="Empty"></PhoneInput>
        </div>
    );
}

export default App;