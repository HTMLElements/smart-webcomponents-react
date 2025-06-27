import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useState } from "react";
import { Tank } from 'smart-webcomponents-react/tank';

function App() {
  // State to hold tank values
  const [values, setValues] = useState({
    smartTank1: 10,
    smartTank2: 20,
    smartTank3: 30,
  });

  // Handler that updates the right tank value based on event target id
  const handleTankChange = (event) => {
    const tankId = event.target.id; // e.g., "smartTank1"
    const value = event.detail.value;
    setValues(prevValues => ({
      ...prevValues,
      [tankId]: parseFloat(value).toFixed(2)
    }));
  };

  return (
    <div>
      mechanicalAction: 'switchUntilReleased'
      <Tank
        id="smartTank1"
        orientation="vertical"
        min={0}
        max={100}
        value={10}
        mechanicalAction="switchUntilReleased"
        onChange={handleTankChange}
      ></Tank>
      Value: <span>{values.smartTank1}</span>
      <br />
      <br />
      mechanicalAction: 'switchWhenReleased'
      <Tank
        id="smartTank2"
        orientation="vertical"
        min={0}
        max={100}
        value={20}
        mechanicalAction="switchWhenReleased"
        onChange={handleTankChange}
      ></Tank>
      Value: <span>{values.smartTank2}</span>
      <br />
      <br />
      mechanicalAction: 'switchWhileDragging'
      <Tank
        id="smartTank3"
        orientation="vertical"
        min={0}
        max={100}
        value={30}
        mechanicalAction="switchWhileDragging"
        onChange={handleTankChange}
      ></Tank>
      Value: <span>{values.smartTank3}</span>
    </div>
  );
}

export default App;
