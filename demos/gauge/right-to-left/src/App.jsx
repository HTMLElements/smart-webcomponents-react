import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { Gauge } from 'smart-webcomponents-react/gauge';

function App() {
    // You can use useEffect here if you need componentDidMount logic in the future.

    return (
        <div>
            <Gauge
                id="gauge"
                analogDisplayType="needle"
                scaleType="integer"
                digitalDisplay
                startAngle={-30}
                endAngle={210}
                min={0}
                max={100}
                value={25}
                rightToLeft
                unit='ק"ג'
                showUnit
            />
        </div>
    );
}

export default App;