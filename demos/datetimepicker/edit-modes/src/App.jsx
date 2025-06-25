import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { DateTimePicker } from 'smart-webcomponents-react/datetimepicker';

const App = () => {
  return (
    <div>
      <p>editMode: 'full' - Value validation on blur only.</p>
      <DateTimePicker
        calendarButton
        formatString="d"
        enableMouseWheelAction
        interval="new smartUtilities.TimeSpan(24, 0, 0)"
        dropDownPosition="center-bottom"
        spinButtons
        spinButtonsPosition="left"
        editMode="full"
      />
      <br />
      <p>editMode: 'default' - Validation while typing and on blur.</p>
      <DateTimePicker
        calendarButton
        formatString="d"
        enableMouseWheelAction
        interval="new smartUtilities.TimeSpan(24, 0, 0)"
        dropDownPosition="center-bottom"
        spinButtons
        spinButtonsPosition="left"
        editMode="default"
      />
      <br />
      <p>editMode: 'partial' - Strict Validation while typing. Delete/Backspace sets the edit part to min value.</p>
      <DateTimePicker
        calendarButton
        formatString="d"
        enableMouseWheelAction
        interval="new smartUtilities.TimeSpan(24, 0, 0)"
        dropDownPosition="center-bottom"
        spinButtons
        spinButtonsPosition="left"
        editMode="partial"
      />
    </div>
  );
};

export default App;
