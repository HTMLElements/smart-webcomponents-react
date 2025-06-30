import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { Button, ToggleButton } from 'smart-webcomponents-react/button';
import { NumericTextBox } from 'smart-webcomponents-react/numerictextbox';
import { Slider } from 'smart-webcomponents-react/slider';

function App() {
    const slider = useRef();
    const numerictextbox = useRef();

    const handleIntervalChange = () => {
        slider.current.interval = numerictextbox.current.value;
    };

    const handleToggleCoercionChange = (event) => {
        slider.current.coerce = event.detail.value;
    };

    const handleSetValueClick = () => {
        slider.current.val(99);
    };

    return (
        <div>
            <Slider
                ref={slider}
                showTooltip
                id="horizontalSlider"
                min="0"
                max="100"
                value="77"
                scalePosition="both"
                coerce
                interval="5"
            />
            <br />
            <div className="options">
                <div className="caption">Set coercion interval</div>
                <div className="option">
                    <NumericTextBox
                        ref={numerictextbox}
                        id="interval"
                        spinButtons
                        inputFormat="integer"
                        value="5"
                        onChange={handleIntervalChange}
                    />
                </div>
                <div className="option">
                    <ToggleButton
                        id="toggleCoercion"
                        checked
                        onChange={handleToggleCoercionChange}
                    >
                        Toggle coercion
                    </ToggleButton>
                </div>
                <div className="option">
                    <Button
                        id="setValue"
                        onClick={handleSetValueClick}
                    >
                        Set value to 99
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default App;