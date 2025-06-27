import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { Button } from 'smart-webcomponents-react/button';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';
import { Tooltip } from 'smart-webcomponents-react/tooltip';

const App = () => {
  const tooltip = useRef(null);

  const handleChange = (position) => {
    if (tooltip.current) {
      tooltip.current.position = position;
    }
  };

  return (
    <div>
      <Button id="button">כפתור</Button>
      <Tooltip
        ref={tooltip}
        id="tooltip"
        selector="button"
        arrow
        rightToLeft
      >
        הסבר כלים מימין לשמאל ...
      </Tooltip>

      <div className="options">
        <h3>Tooltip Position:</h3>
        <RadioButton checked onChange={() => handleChange('top')}>Top</RadioButton>
        <br />
        <RadioButton onChange={() => handleChange('bottom')}>Bottom</RadioButton>
        <br />
        <RadioButton onChange={() => handleChange('left')}>Left</RadioButton>
        <br />
        <RadioButton onChange={() => handleChange('right')}>Right</RadioButton>
        <br />
      </div>
    </div>
  );
};

export default App;
