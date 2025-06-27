import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { Calendar } from 'smart-webcomponents-react/calendar';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

const App = () => {
  const calendar = useRef(null);

  const handleChange = (view, event) => {
    if (event.detail.value) {
      calendar.current.view = view;
    }
  };

  return (
    <div>
      <Calendar
        ref={calendar}
        className="calendar-views"
        view="landscape"
        viewSections={["title", "header"]}
        selectionMode="one"
      />
      <div className="options">
        <div className="caption">View Mode</div>
        <div className="option">
          <RadioButton onChange={(e) => handleChange('landscape', e)} checked>
            Landscape
          </RadioButton>
          <RadioButton onChange={(e) => handleChange('portrait', e)}>
            Portrait
          </RadioButton>
        </div>
      </div>
    </div>
  );
};

export default App;
