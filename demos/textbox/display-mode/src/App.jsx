import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { RadioButton } from 'smart-webcomponents-react/radiobutton';
import { TextBox, ListItem } from 'smart-webcomponents-react/textbox';

const App = () => {
  const textbox = useRef();

  const handleRadioButtonChange = (mode) => {
    if (textbox.current) {
      textbox.current.displayMode = mode;
    }
  };

  return (
    <div>
      <TextBox ref={textbox} placeholder="Your text" minLength={1}>
        <ListItem value="Afghanistan">Afghanistan</ListItem>
        <ListItem selected value="Albania">Albania</ListItem>
        <ListItem value="Algeria">Algeria</ListItem>
        {/* ... all other ListItem elements remain the same ... */}
        <ListItem value="Zimbabwe">Zimbabwe</ListItem>
      </TextBox>

      <div className="description">Escaped mode displays by default hidden symbols such as Space</div>

      <div className="options">
        <div className="caption">Settings</div>
        <div className="option">
          <RadioButton
            id="defaultMode"
            checked
            onChange={() => handleRadioButtonChange('default')}
          >
            Default mode
          </RadioButton>
          <RadioButton
            id="escapedMode"
            onChange={() => handleRadioButtonChange('escaped')}
          >
            Escaped mode
          </RadioButton>
          <br />
        </div>
      </div>
    </div>
  );
};

export default App;
