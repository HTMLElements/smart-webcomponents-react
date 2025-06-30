import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { Gauge } from 'smart-webcomponents-react/gauge';

const App = () => {
    // You can use useEffect here if you need lifecycle logic.
    // React.useEffect(() => {
    //     // componentDidMount logic here
    // }, []);
    
    return (
        <div>
            <Gauge 
                id="gauge" 
                analogDisplayType="needle" 
                digitalDisplay
                startAngle={-30} 
                endAngle={210} 
                min="0" 
                max="100" 
                value="0"
            />
        </div>
    );
};

export default App;