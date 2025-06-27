import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { Calendar } from 'smart-webcomponents-react/calendar';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

const App = () => {
  const calendarRef = useRef(null);

  const handleScrollButtonsPosition = (position, event) => {
    if (event.detail.value) {
      calendarRef.current.scrollButtonsPosition = position;
    }
  };

  const handleScrollButtonsNavigationMode = (mode, event) => {
    if (event.detail.value) {
      calendarRef.current.scrollButtonsNavigationMode = mode;
    }
  };

  return (
    <div>
      <Calendar ref={calendarRef}></Calendar>
      <div className="options">
        <div className="caption">Scroll Buttons Position</div>
        <div className="option">
          <RadioButton onChange={(e) => handleScrollButtonsPosition('near', e)} groupName="a">
            Near
          </RadioButton>
          <br />
          <RadioButton onChange={(e) => handleScrollButtonsPosition('far', e)} groupName="a">
            Far
          </RadioButton>
          <br />
          <RadioButton onChange={(e) => handleScrollButtonsPosition('both', e)} checked groupName="a">
            Both
          </RadioButton>
          <br />
        </div>
        <div className="caption">Scroll Buttons Navigation Mode</div>
        <div className="option">
          <RadioButton onChange={(e) => handleScrollButtonsNavigationMode('landscape', e)} checked groupName="b">
            Landscape
          </RadioButton>
          <br />
          <RadioButton onChange={(e) => handleScrollButtonsNavigationMode('portrait', e)} groupName="b">
            Portrait
          </RadioButton>
        </div>
      </div>
    </div>
  );
};

export default App;
