import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { MultiSplitButton } from 'smart-webcomponents-react/multisplitbutton';

const App = () => {
    const log = useRef(null);

    const buttonsDataSource = ['Button 1', 'Button 2', 'Button 3'];
    const dropDownButtonPosition = 'right';

    const handleButtonClick = (event) => {
        if (log.current) {
            log.current.innerHTML = "Clicked Button " + event.detail.index;
        }
    };

    return (
        <div>
            <MultiSplitButton
                buttonsDataSource={buttonsDataSource}
                dropDownButtonPosition={dropDownButtonPosition}
                id="multiSplitButton"
                onButtonClick={handleButtonClick}
            ></MultiSplitButton>

            <div className="options">
                <div className="caption">Events</div>
                <div className="option">
                    <div ref={log} id="log"></div>
                </div>
            </div>
        </div>
    );
};

export default App;