import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { Slider } from 'smart-webcomponents-react/slider';

function App() {
    return (
        <div>
            <Slider
                showTooltip
                orientation="horizontal"
                min="0"
                max="100"
                value="30"
                scalePosition="near"
                showUnit
                rightToLeft
                unit='ק"ג'
            />
            <Slider
                showTooltip
                orientation="vertical"
                min="0"
                max="100"
                value="30"
                scalePosition="far"
                tooltipPosition="far"
                showUnit
                rightToLeft
                unit='ק"ג'
            />
        </div>
    );
}

export default App;