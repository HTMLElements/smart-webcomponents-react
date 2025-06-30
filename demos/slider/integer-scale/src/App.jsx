import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { Slider } from 'smart-webcomponents-react/slider';

function App() {
    // You can use useEffect here if you need component lifecycle logic
    // React.useEffect(() => {
    //     // componentDidMount logic
    // }, []);

    return (
        <div>
            <h2>64-bit(Large) Integer Scale</h2>
            <br />
            <h3>Horizontal</h3>
            <Slider
                id="horizontalSlider"
                showTooltip
                scaleType="integer"
                min="-1000000000000000000000"
                max="100000000000000000000"
                value="0"
                scalePosition="both"
            />
            <br />
            <h3>Vertical</h3>
            <Slider
                id="verticalSlider"
                showTooltip
                tooltipPosition="far"
                orientation="vertical"
                scaleType="integer"
                min="-1000000000000000000000"
                max="100000000000000000000"
                value="0"
                scalePosition="far"
            />
        </div>
    );
}

export default App;