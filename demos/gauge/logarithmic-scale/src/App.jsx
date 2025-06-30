import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { Gauge } from 'smart-webcomponents-react/gauge';

function App() {
    // If you need to mimic componentDidMount, use useEffect, e.g.:
    // React.useEffect(() => {
    //     // componentDidMount logic
    // }, []);

    return (
        <div>
            <Gauge
                analogDisplayType="needle"
                digitalDisplay
                startAngle={-30}
                endAngle={210}
                min="1"
                max="300000"
                interval="1"
                value="2"
                logarithmicScale
            />
        </div>
    );
}

export default App;