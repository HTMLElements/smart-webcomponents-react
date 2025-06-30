import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useCallback } from "react";
import { Slider } from 'smart-webcomponents-react/slider';
import { ToggleButton } from 'smart-webcomponents-react/button';

function App() {
    const slider = useRef(null);
    const slider2 = useRef(null);

    const handleToggleButtonsChange = useCallback((event) => {
        if (slider.current && slider2.current) {
            slider.current.showButtons = event.detail.value;
            slider2.current.showButtons = event.detail.value;
        }
    }, []);

    return (
        <div>
            <Slider
                ref={slider}
                showTooltip
                id="horizontalSlider"
                min="0"
                max="100"
                value="50"
                scalePosition="both"
                showButtons
            />
            <br />
            <Slider
                ref={slider2}
                showTooltip
                id="verticalSlider"
                orientation="vertical"
                tooltipPosition="far"
                min="0"
                max="100"
                coerce
                interval="0.5"
                scalePosition="both"
                rangeSlider
                values={[10, 30]}
                showButtons
            />
            <br />
            <div className="options">
                <div className="caption">Settings</div>
                <div className="option">
                    <ToggleButton
                        id="toggleButtons"
                        checked
                        onChange={handleToggleButtonsChange}
                    >
                        Toggle slider buttons
                    </ToggleButton>
                </div>
            </div>
        </div>
    );
}

export default App;