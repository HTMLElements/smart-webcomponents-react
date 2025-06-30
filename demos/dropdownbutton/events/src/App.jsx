import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useEffect, useRef } from "react";
import { DropDownButton } from 'smart-webcomponents-react/dropdownbutton';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

const App = () => {
    const dropdownbutton = useRef(null);
    const log = useRef(null);

    const handleClick = (event) => {
        const dropDownButton = dropdownbutton.current;
        let mode = event.target.textContent.trim();

        dropDownButton.dropDownOpenMode = mode.charAt(0).toLowerCase() + mode.slice(1);
        dropDownButton.placeholder = mode === 'Default' ? 'Button' : 'Action';
    };

    const handleDropDownButtonEvent = (event) => {
        log.current.innerHTML += event.type + '<br />';
    };

    useEffect(() => {
        // Equivalent to componentDidMount if needed
    }, []);

    return (
        <div>
            <DropDownButton 
                ref={dropdownbutton} 
                placeholder="Button" 
                onActionButtonClick={handleDropDownButtonEvent} 
                onDropDownButtonClick={handleDropDownButtonEvent}
                onOpening={handleDropDownButtonEvent} 
                onClosing={handleDropDownButtonEvent}
            >
                What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the industry's standard
                dummy text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s with the
                release of Letraset sheets containing Lorem Ipsum passages, and more recently
                with desktop publishing software like Aldus PageMaker including versions
                of Lorem Ipsum.
            </DropDownButton>

            <div className="options">
                <div className="caption">Settings</div>
                <div className="option">
                    <div>Open Mode:</div>
                    <RadioButton checked onClick={handleClick}>Default</RadioButton>
                    <br />
                    <RadioButton onClick={handleClick}>DropDownButton</RadioButton>
                </div>

                <div className="option" id="eventLog">
                    <h4>Event log:</h4>
                    <div ref={log} id="log"></div>
                </div>
            </div>
        </div>
    );
};

export default App;
