import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { Slider } from 'smart-webcomponents-react/slider';

function App() {
    // The init and componentDidMount methods from the class are not used.
    // Add React.useEffect here if you need lifecycle logic.

    return (
        <div>
            <Slider
                id="slider"
                showTooltip
                orientation="horizontal"
                min="0"
                max="100"
                value="71"
                scalePosition="both"
                ticksPosition="track"
            />
        </div>
    );
}

export default App;