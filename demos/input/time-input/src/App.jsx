import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useEffect } from "react";
import { TimeInput } from 'smart-webcomponents-react/timeinput';

function App() {
    useEffect(() => {
        // Place any initialization logic here if needed
    }, []);

    return (
        <div>
            <div className="demo-description">
                <p> <b>Smart.TimeInput</b> is an input that allows selection of a Time. It
                    uses the Intl.DateTimeFormat API for formatting the time.</p>
            </div>
            <h3>Default</h3>
            <TimeInput placeholder="Please Enter a Time"></TimeInput>
            <br />
            <br />
            <br />
            <h3>Underlined</h3>
            <TimeInput className="underlined" placeholder="Please Enter a Time"></TimeInput>
            <br />
            <br />
            <br />
            <h3>Outlined</h3>
            <TimeInput className="outlined" placeholder="Please Enter a Time"></TimeInput>
        </div>
    );
}

export default App;