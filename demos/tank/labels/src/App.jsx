import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { RadioButton } from 'smart-webcomponents-react/radiobutton';
import { Tank } from 'smart-webcomponents-react/tank';

function App() {
  const tank = useRef();
  const tank2 = useRef();

  const handleAllChange = () => {
    tank.current.labelsVisibility = 'all';
    tank2.current.labelsVisibility = 'all';
  };

  const handleEndPointsChange = () => {
    tank.current.labelsVisibility = 'endPoints';
    tank2.current.labelsVisibility = 'endPoints';
  };

  const handleNoneChange = () => {
    tank.current.labelsVisibility = 'none';
    tank2.current.labelsVisibility = 'none';
  };

  const handleMajorChange = () => {
    tank.current.ticksVisibility = 'major';
    tank2.current.ticksVisibility = 'major';
  };

  const handleMinorChange = () => {
    tank.current.ticksVisibility = 'minor';
    tank2.current.ticksVisibility = 'minor';
  };

  const handleNoTicksChange = () => {
    tank.current.ticksVisibility = 'none';
    tank2.current.ticksVisibility = 'none';
  };

  return (
    <div>
      <Tank
        ref={tank}
        id="horizontalTank"
        orientation="horizontal"
        min={0}
        max={10}
        value={5}
        inverted
        scalePosition="both"
      ></Tank>
      <br /><br />
      <Tank
        ref={tank2}
        id="verticalTank"
        orientation="vertical"
        inverted
        min={-100}
        max={0}
        value={-50}
        scalePosition="both"
      ></Tank>
      <div className="options">
        <div className="option">
          <p>Labels</p>
          <RadioButton id="all" name="labelsVisibility" checked onChange={handleAllChange}>
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
          <RadioButton id="minor" name="ticksVisibility" checked onChange={handleMinorChange}>
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
}

export default App;
