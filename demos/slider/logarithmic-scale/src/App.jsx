import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { Slider } from 'smart-webcomponents-react/slider';

function App() {
    return (
        <div>
            <h2>Logarithmic Scale</h2>
            <br />
            <h3>Horizontal</h3>
            <Slider
                id="horizontalSlider"
                showTooltip
                logarithmicScale
                coerce
                interval={1}
                min={0}
                max={10000000}
                value={1000}
                scalePosition="both"
            />
            <br />
            <h3>Vertical</h3>
            <Slider
                id="verticalSlider"
                showTooltip
                tooltip-position="far"
                orientation="vertical"
                logarithmicScale
                coerce
                interval={1}
                min={0}
                max={10000000}
                value={1000}
                scalePosition="far"
            />
        </div>
    );
}

export default App;