import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { Slider } from 'smart-webcomponents-react/slider';

function App() {
  // Handler function to update the displayed value on change.
  const handleSliderChange = (event) => {
    const value = event.detail.value;
    const sliderId = event.target.id;
    document.getElementById(sliderId + 'Value').innerHTML = parseFloat(value).toFixed(2);
  };

  return (
    <div>
      mechanicalAction: 'switchWhileDragging' <em>(default)</em>
      <Slider
        id="smartSlider3"
        showTooltip
        orientation="horizontal"
        min="0"
        max="100"
        value="10"
        scalePosition="none"
        mechanicalAction="switchWhileDragging"
        onChange={handleSliderChange}
      />
      Value: <span id="smartSlider3Value">10.00</span>
      <br />
      <br />mechanicalAction: 'switchUntilReleased'
      <Slider
        id="smartSlider1"
        showTooltip
        orientation="horizontal"
        min="0"
        max="100"
        value="20"
        scalePosition="none"
        mechanicalAction="switchUntilReleased"
        onChange={handleSliderChange}
      />
      Value: <span id="smartSlider1Value">20.00</span>
      <br />
      <br />mechanicalAction: 'switchWhenReleased'
      <Slider
        id="smartSlider2"
        showTooltip
        orientation="horizontal"
        min="0"
        max="100"
        value="30"
        scalePosition="none"
        mechanicalAction="switchWhenReleased"
        onChange={handleSliderChange}
      />
      Value: <span id="smartSlider2Value">30.00</span>
    </div>
  );
}

export default App;