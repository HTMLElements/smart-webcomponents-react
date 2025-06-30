import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { PasswordTextBox } from 'smart-webcomponents-react/passwordtextbox';

const App = () => {
    const passwordtextbox = useRef(null);
    const log = useRef(null);

    const handleChange = (event) => {
        if (log.current && passwordtextbox.current) {
            log.current.innerHTML = passwordtextbox.current.value;
        }
    };

    return (
        <div>
            <PasswordTextBox
                ref={passwordtextbox}
                onChange={handleChange}
                placeholder="Your password"
            />
            <div className="options">
                <div className="caption">Events Log</div>
                <div className="option">
                    <div ref={log} id="eventLog"></div>
                </div>
            </div>
        </div>
    );
};

export default App;
