import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { RadioButton } from 'smart-webcomponents-react/radiobutton';
import { Slider } from 'smart-webcomponents-react/slider';

const App = () => {
  const slider = useRef();
  const slider2 = useRef();

  const handleAllChange = () => {
    if (slider.current && slider2.current) {
      slider.current.labelsVisibility = 'all';
      slider2.current.labelsVisibility = 'all';
    }
  };

  const handleEndPointsChange = () => {
    if (slider.current && slider2.current) {
      slider.current.labelsVisibility = 'endPoints';
      slider2.current.labelsVisibility = 'endPoints';
    }
  };

  const handleNoneChange = () => {
    if (slider.current && slider2.current) {
      slider.current.labelsVisibility = 'none';
      slider2.current.labelsVisibility = 'none';
    }
  };

  const handleMajorChange = () => {
    if (slider.current && slider2.current) {
      slider.current.ticksVisibility = 'major';
      slider2.current.ticksVisibility = 'major';
    }
  };

  const handleMinorChange = () => {
    if (slider.current && slider2.current) {
      slider.current.ticksVisibility = 'minor';
      slider2.current.ticksVisibility = 'minor';
    }
  };

  const handleNoTicksChange = () => {
    if (slider.current && slider2.current) {
      slider.current.ticksVisibility = 'none';
      slider2.current.ticksVisibility = 'none';
    }
  };

  return (
    <div>
      <Slider ref={slider} id="horizontalSlider" showTooltip min="17" max="769"
        value="172" scalePosition="both"></Slider>
      <br />
      <Slider ref={slider2} id="verticalSlider" showTooltip orientation="vertical"
        inverted min="-100" max="0" value="-4" scalePosition="both"></Slider>
      <div className="options">
        <div className="option">
          <p>Labels</p>
          <RadioButton id="all" name="labelsVisibility" defaultChecked onChange={handleAllChange}>
            <label htmlFor="all">All</label>
          </RadioButton>
          <br />
          <RadioButton id="endPoints" name="labelsVisibility" onChange={handleEndPointsChange}>
            <label htmlFor="endPoints">Endpoints</label>
          </RadioButton>
          <br />
          <RadioButton id="none" name="labelsVisibility" onChange={handleNoneChange}>
            <label htmlFor="none">None</label>
          </RadioButton>
          <br />
        </div>
        <div className="option">
          <p>Tick Marks</p>
          <RadioButton id="major" name="ticksVisibility" onChange={handleMajorChange}>
            <label htmlFor="major">Major</label>
          </RadioButton>
          <br />
          <RadioButton id="minor" name="ticksVisibility" defaultChecked onChange={handleMinorChange}>
            <label htmlFor="minor">Minor</label>
          </RadioButton>
          <br />
          <RadioButton id="noTicks" name="ticksVisibility" onChange={handleNoTicksChange}>
            <label htmlFor="noTicks">None</label>
          </RadioButton>
          <br />
        </div>
      </div>
    </div>
  );
};

export default App;