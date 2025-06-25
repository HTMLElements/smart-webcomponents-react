import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { DateTimePicker } from 'smart-webcomponents-react/datetimepicker';

const App = () => {
  return (
    <div>
      <p>
        DateTime precision up to a yoctosecond (10⁻²⁴ second) support.
        Engineering/Scientific Formats
      </p>
      <DateTimePicker
        calendarButton
        enableMouseWheelAction
        spinButtons
        spinButtonsPosition="left"
        formatString="FP"
        value={new window.smartUtilities.DateTime(2019, 2, 19, 12, 54, 111, 333, 31, 40, 436, 144, 490, 59, 99)}
      />
    </div>
  );
};

export default App;
