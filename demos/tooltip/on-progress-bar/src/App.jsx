import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useEffect } from "react";
import { ProgressBar, CircularProgressBar } from 'smart-webcomponents-react/progressbar';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';
import { Tooltip } from 'smart-webcomponents-react/tooltip';

const App = () => {
  const tooltip = useRef(null);
  const tooltip2 = useRef(null);
  const progressbar = useRef(null);
  const progressbar2 = useRef(null);

  const handleChange = (position) => {
    if (tooltip.current) tooltip.current.position = position;
    if (tooltip2.current) tooltip2.current.position = position;
  };

  useEffect(() => {
    if (tooltip.current && progressbar.current) {
      tooltip.current.nativeElement.innerHTML = 'Progress: ' + progressbar.current.value + '%';
    }
    if (tooltip2.current && progressbar2.current) {
      tooltip2.current.nativeElement.innerHTML = 'Progress: ' + progressbar2.current.value + '%';
    }
  }, []);

  return (
    <div>
      <ProgressBar ref={progressbar} id="linearProgressBar" value={50}></ProgressBar>
      <Tooltip ref={tooltip} id="tooltip" selector="linearProgressBar" arrow></Tooltip>

      <CircularProgressBar ref={progressbar2} id="circularProgressBar" value={75}></CircularProgressBar>
      <Tooltip ref={tooltip2} id="tooltip2" selector="circularProgressBar" arrow position="left"></Tooltip>

      <div className="options">
        <h3>Tooltip Position:</h3>
        <RadioButton checked onChange={() => handleChange('top')}>Top</RadioButton>
        <br />
        <RadioButton onChange={() => handleChange('bottom')}>Bottom</RadioButton>
        <br />
        <RadioButton onChange={() => handleChange('left')}>Left</RadioButton>
        <br />
        <RadioButton onChange={() => handleChange('right')}>Right</RadioButton>
      </div>
    </div>
  );
};

export default App;
