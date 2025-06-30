import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { Button } from 'smart-webcomponents-react/button';
import { Slider } from 'smart-webcomponents-react/slider';

function App() {
    const slider = useRef(null);
    const slider2 = useRef(null);

    const handleButtonClick = () => {
        slider.current.val([55, 100]);
        slider2.current.val([55, 100]);
    };

    return (
        <div>
            <Slider
                ref={slider}
                id="horizontalSlider"
                showTooltip
                min="0"
                max="100"
                coerce
                interval="10"
                scalePosition="both"
                rangeSlider
                values={[10, 30]}
            ></Slider>
            <br />
            <br />
            <br />
            <Slider
                ref={slider2}
                id="verticalSlider"
                showTooltip
                tooltipPosition="far"
                orientation="vertical"
                inverted
                min="0"
                max="100"
                coerce
                interval="0.5"
                scalePosition="both"
                rangeSlider
                values={[10, 30]}
            ></Slider>
            <br />
            <div className="options">
                <div className="caption">Settings</div>
                <div className="option">
                    <Button id="setValues" onClick={handleButtonClick}>
                        Set <strong>values</strong> to [55, 100]
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default App;