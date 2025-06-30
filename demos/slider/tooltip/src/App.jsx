import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { Button } from 'smart-webcomponents-react/button';
import { Slider } from 'smart-webcomponents-react/slider';

function App() {
    const slider = useRef();
    const slider2 = useRef();
    const button = useRef();
    const button2 = useRef();

    const handleButtonClick = () => {
        if (slider.current.tooltipPosition === 'near') {
            slider.current.tooltipPosition = 'far';
        } else {
            slider.current.tooltipPosition = 'near';
        }

        if (slider2.current.tooltipPosition === 'near') {
            slider2.current.tooltipPosition = 'far';
        } else {
            slider2.current.tooltipPosition = 'near';
        }
    };

    const handleButton2Click = () => {
        slider.current.showTooltip = false;
        slider2.current.showTooltip = false;
        button.current.disabled = true;
        button2.current.disabled = true;
    };

    return (
        <div>
            <p>Move the slider thumbs to see the tooltips.</p>
            <Slider
                ref={slider}
                id="horizontalSlider"
                showTooltip
                tooltipPosition="near"
                orientation="horizontal"
                min="0"
                max="100"
                value="95"
                scalePosition="none"
            />
            <br />
            <Slider
                ref={slider2}
                id="verticalSlider"
                showTooltip
                tooltipPosition="near"
                orientation="vertical"
                min="0"
                max="100"
                value="33"
                scalePosition="none"
            />
            <br />
            <div className="options">
                <div className="caption">Settings</div>
                <div className="option">
                    <Button
                        ref={button}
                        id="toggleTooltipPositionButton"
                        onClick={handleButtonClick}
                    >
                        Flip Tooltip
                    </Button>
                    <br /><br />
                    <Button
                        ref={button2}
                        id="disableTooltipsButton"
                        onClick={handleButton2Click}
                    >
                        Disable Tooltip
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default App;
